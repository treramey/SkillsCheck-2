import React, { Component } from "react";
import axios from "axios";
import "./card.css";

export default class card extends Component {
  deleteCard = () => {
    axios
      .delete(`/api/inventory/${this.props.id}`)
      .then(() => {
        this.props.updateList();
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="Product">
        <div className="product_img">{/* <img src="" alt="" /> */}</div>
        <div className="product_box">
          <p className="product_title">{this.props.name}</p>
          <p className="product_price">{"$" + this.props.price}</p>
        </div>
        <div className="product_button_box">
          <button onClick={this.deleteCard}> Delete</button>
          <button>Edit</button>
        </div>
      </div>
    );
  }
}
