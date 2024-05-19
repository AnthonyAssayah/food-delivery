import React from "react";
import "./Add.css";
import { assets } from "../../assets/assets";

const Add = () => {
  return (
    <div className="add">
      <form className="flex-col">
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={assets.upload_area} alt="" />
          </label>
          <input type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            type="text"
            name="name"
            placeholder="Enter product name"
            required
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            name="description"
            placeholder="Enter product description"
            rows="6"
            required
          />
        </div>
        <div className="add-category-price flex-row">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select name="category" required>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure veg">Pure veg</option>
              <option value="Pastas">Pastas</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              type="Number"
              name="price"
              placeholder="$20"
              required
            />
          </div>
        </div>
        <button type='submit' className="add-btn">ADD</button>
      </form>
    </div>
  );
};

export default Add;
