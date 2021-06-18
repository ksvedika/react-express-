import React, { Component } from 'react';
import './customers.css';
import axios from 'axios'

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
      msg:""
    };
  }

  async componentWillMount() {
    var res = await axios.get("/api/test");
    console.log(res);
    this.state.msg = res.data.msg
  }

  render() {
    return (
      <div>
        <h2>{this.state.msg}</h2>
        
      </div>
    );
  }
}

export default Customers;
