import express from 'express';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import UserModule from './model/user.js';
import PostModule from './model/post.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import bookingModule from './model/product.js';


const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173", // Adjust origin if needed
  methods: ["GET", "POST"],
  credentials: true 
}));

// Middleware to verify JWT and set req.user
function isLogedin(req, res, next) {
  const token = req.cookies.token;

  if (!token || token === '') {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const data = jwt.verify(token, "your_strong_secret_key"); 
    req.user = data;
    next();
  } catch (error) {
    console.error("JWT verification error:", error);
    return res.status(401).json({ message: 'Invalid token' });
  }
}

app.post('/register', async (req, res) => {
  try {
    const { email, username, name, password } = req.body;
    const existingUser = await UserModule.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserModule.create({
      name,
      email,
      password: hashedPassword
    });

    const token = jwt.sign({ email: newUser.email, userid: newUser._id }, "your_strong_secret_key"); 

    res.cookie("token", token, { httpOnly: true });
    res.status(201).json({ message: "User created successfully" });

  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: 'Server error during registration' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModule.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ email: user.email, userid: user._id }, "your_strong_secret_key"); 

    res.cookie("token", token);
    res.status(200).json({ message: "Login successful" });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: 'Server error during login' });
  }
});

app.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'Logged out successfully' });
});

app.use(isLogedin); // Apply middleware for protected routes

app.post('/post', async (req, res) => {
  try {
    const { username, Name, Subject, Massage,Email } = req.body;

    const newPost = await PostModule.create({
      username,
      Name,
      Subject,
      Massage,
      Email
    });

    await UserModule.findByIdAndUpdate(req.user.userid, {
      $push: { posts: newPost._id }
    });

    res.status(201).json({ message: 'Post created successfully', post: newPost });

  } catch (error) {
    console.error("Post creation error:", error);
    res.status(500).json({ message: 'Error creating post' });
  }
});
app.post('/bookProduct', isLogedin, async (req, res) => {
  try {
    const { productNumber } = req.body;

    

    const newBooking = await bookingModule.create({
      user: req.user.userid,
      productNumber
    });

    await UserModule.findByIdAndUpdate(req.user.userid, {
      $push: { bookings: newBooking._id }
    });

    res.status(201).json({ message: 'Product booked successfully', booking: newBooking });

  } catch (error) {
    console.error("Product booking error:", error);
    res.status(500).json({ message: 'Error booking product' });
  }
});
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});