import React, { Component } from 'react';
import './App.css';
import Number from './components/number';
import Answer from './components/answer';


class App extends Component {

constructor() {
    super();
    this.state = {
        result: ''
    }
}

onClick = button => {
    if(button === "AC") {
        this.reset();
    }
    else if(button === "DEL") {
        this.backspace();
    }
    else if(button === "=") {
        this.calculation();
    }
    else {
        this.setState({
            result: this.state.result + button
        })
    }
}

reset = () => {
    this.setState({
        result: ''
    })
}

backspace = () => {
    this.setState({
        result: this.state.result.substr(0, this.state.result.length - 1)
    })
}

calculation = () => {
    try {
        this.setState({
            // eslint-disable-next-line
            result: (eval(this.state.result) || '') + ''
        })
    } catch (error) {
        this.setState({
            result: 'Error'
        })
    }
}

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <hr/>
                    <Answer result={this.state.result}/>
                    <Number onClick={this.onClick}/>
                    <hr/>


                </div>
            </div>
        );
    }
}

export default App;
