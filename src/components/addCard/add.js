import React, { Component } from "react";
import "./add.css";

export default class add extends Component {
  render() {
    return (
      <div className=".app-container">
        <div className="main-column">
          <main>
            <div className="Form">
              <div className="form_img_preview"></div>
              <p>Image URL:</p>
              <input type="text" value="" />
              <p>Product Name:</p>
              <input type="text" value="" />
              <p>Price:</p>
              <input type="text" pattern="[0-9]*" value="0" />
              <div className="form_button_box">
                <button>Cancel</button>
                <button>Add To Inventory</button>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
