import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import Nevbar from '../../component/Nevbar/Nevbar';
import './shope.scss';

const Shope = () => {
  const [quantity, setQuantity] = useState(1); // State to hold the quantity
  const [productNumber, setProductNumber] = useState(''); // State to hold the product number

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleProductNumberChange = (e) => {
    setProductNumber(e.target.value);
  };

  const handleBuyNow = async () => {
    try {
      const response = await axios.post('http://localhost:5000/bookProduct', {
        productNumber,
        quantity, // Include quantity if needed
      });

      alert(response.data.message); // Show success message
    } catch (error) {
      console.error('Error booking product:', error.response ? error.response.data : error.message);
      alert('Error booking product: ' + (error.response ? error.response.data.message : error.message));
    }
  };

  return (
    <>
      <Nevbar />
      <div className="shop">
        <div className="price">
          <h1>Garbage Bags</h1>
          <div className="contentSec">
            <div className="contentSec">
              <img src="/imagecopy13.png" alt="" />
            </div>
            <div className="prc">
              <p>Price: $7 PER BAG</p>
              <a>
                This premium garbage is carefully curated from the finest dumpsters. Perfect for art projects, compost enthusiasts, or those who just appreciate the beauty in waste. At per set, there are 10 garbage bags in 1 bag.
              </a>

              <div className="buys">
            
                <label className='l'>Quantity</label>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  value={productNumber}
                  onChange={handleProductNumberChange}
                  
                />
                <p className='p'>bag(s)</p>
              </div>

              <button onClick={handleBuyNow}>Buy now (${7 * productNumber})</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shope;