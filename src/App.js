import "./styles.css";
import { Component } from 'react';
import axios from 'axios';

const baseURL = 'https://api.adviceslip.com/advice';

class App extends Component {

  state = {
    advice: '',
    id: ''
  }

  componentDidMount() {
    this.moreAdvice();
  }

  moreAdvice = () => {
    axios.get(baseURL)
    .then(res => {
      const {id, advice} = res.data.slip;
      this.setState({
        advice: advice,
        id: id
      });
      console.log(res.data.slip)
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const {id , advice} = this.state;
    return (
      <div className="slip">
        <p>Advice #{id}</p>
        <p>"{advice}"</p>
        <img src="/image/pattern-divider-mobile.svg" alt="" />
      <button onClick={this.moreAdvice}>
        <img src="/image/icon-dice.svg" alt="" />
      </button>
      </div>
  );
  }
  
}

export default App;
