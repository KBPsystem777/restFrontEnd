import React, { Component } from 'react';
import axios from 'axios';

const API = 'http://localhost:8080/api/dishes';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      name: [],
      price: [],
      picture: []
    });
  }

  componentDidMount = () => {
    axios.get(API).then((res) => {
      for(var i = 0; i < res.data.length; i++);
      this.setState({
        name: [...this.state.name, res.data[i].name],
        price: [...this.state.price, res.data[i].price],
        picture: [...this.state.picture, res.data[i].picture]
      })
    }).catch((err) => {
      console.log(err)
    })
  }
  render() {
    return (
      <div>My App</div>
    );
  }
}

export default App;
