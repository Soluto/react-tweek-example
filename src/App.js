import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import { prepareKey } from "react-tweek";
import MyComponent from './MyComponent';
import {
  createTweekClientWithFallback,
} from "tweek-client";
import {
  TweekRepository
} from "tweek-local-cache";
import {
  makeObservable,
  observable
} from "mobx";


class App extends Component {

  tweekRepo=undefined;
  tweekContext=undefined;
  tweekClient=undefined;

  constructor() {
    super();
    this.state={};
    makeObservable(this, {
      tweekRepo: observable,
      tweekContext: observable
    })

  }

  async componentDidMount() {

    this.tweekClient=createTweekClientWithFallback({
      urls: ["https://tweek.mysoluto.com/configurations"],
      requestTimeoutInMillis: 6000,
      useLegacyEndpoint: true,
    });
    prepareKey("legacy/mobileremote/_");

    this.tweekRepo=new TweekRepository({
      client: this.tweekClient,
      context: this.tweekContext,
    });
    this.setState({isReady: true})

  }

  render() {
    if (!this.state.isReady) {
      return <div/>
    }
    return (
       <div className="App" >
       <img src={logo} alt="fireSpot"/>
             <MyComponent/>
             </div>
    );
  }
}

export default App;