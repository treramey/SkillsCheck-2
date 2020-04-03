import React, { Component } from "react";
import Card from "../card/card";
import axios from "axios";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };
  }
  componentDidMount() {
    axios.get("/api/inventory").then(res => {
      console.log(res);
      this.setState({ inventory: res.data });
    });
  }
  updateList = () => {
    axios.get("/api/inventory").then(res => {
      this.setState({ inventory: res.data });
    });
  };
  render() {
    let cardGen = this.state.inventory.map((el, i) => {
      return (
        <Card
          key={i}
          name={el.name}
          price={el.price}
          image_url={el.image_url}
          id={el.product_id}
          updateList={this.updateList}
        />
      );
    });
    return (
      <div className=".app-container">
        <div className="main-column">
          <main>{cardGen}</main>
        </div>
      </div>
    );
  }
}
