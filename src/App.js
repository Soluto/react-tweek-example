import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {createTweekClient} from "@npmsoluto/tweek-rest";
import TweekRepository from "@npmsoluto/tweek-repo";
import {connect} from "@npmsoluto/react-tweek";

import MyComponent from './MyComponent';

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    async componentWillMount() {
        const client = createTweekClient("https://tweek.mysoluto.com/configurations")
        const tweekRepository = new TweekRepository({client});

        await connect(tweekRepository);
        await tweekRepository.refresh();
        await this.setState({isReady: true});
    }

    render() {
      if (!this.state.isReady) {
        return <div />
      }
      return (
        <div className="App">
            <MyComponent />           
        </div>
      );
    }
}

export default App;
