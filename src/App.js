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
        <p className="slip-id">Advice #{id}</p>
        <p className="slip-advice">"{advice}"</p>
        <picture>
          <source media="(min-width: 768px)" srcSet="/image/pattern-divider-desktop.svg" />
          <img className="divider" src="/image/pattern-divider-mobile.svg" alt="divider mobile" />
        </picture>
        <div>
          <button onClick={this.moreAdvice} className="slip-btn">
            <img src="/image/icon-dice.svg" alt="geneate advice button" />
          </button>
        </div>
      </div>
  );
  }
  
}

export default App;
