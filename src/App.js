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
      <div className="App">
        <p>{id}</p>
        <p>{advice}</p>
      <button onClick={this.moreAdvice}>more advice</button>
      </div>
  );
  }
  
}

export default App;
