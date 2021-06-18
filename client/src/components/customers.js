import React, { Component, useState} from 'react';
import './customers.css';
import axios from 'axios'

class Customers extends Component {
  constructor() {
    super();
    const [msg] = useState(0);

  }

  async componentWillMount() {
    var res = await axios.get("/api/test");
    console.log(res);
    this.msg = res.data.msg
    
  }

  render() {
    return (
      <div>
        <h2>{this.msg}</h2>
        
      </div>
    );
  }
}

export default Customers;
