import React, { Component } from 'react';
import { Container } from 'reactstrap';

class number extends Component {
    render() {
        return (
            <Container>
            <div className="button"> 
                <button name="AC" onClick={e => this.props.onClick(e.target.name)} id="sign">AC</button>
                <button name="(" onClick={e => this.props.onClick(e.target.name)} id="sign">(</button>
                <button name=")" onClick={e => this.props.onClick(e.target.name)} id="sign">)</button>
                <button name="/" onClick={e => this.props.onClick(e.target.name)} id="sign">/</button><br/>

                <button name="7" onClick={e => this.props.onClick(e.target.name)} id="num">7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)} id="num">8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)} id="num">9</button>
                <button name="*" onClick={e => this.props.onClick(e.target.name)} id="sign">*</button><br/>

                <button name="4" onClick={e => this.props.onClick(e.target.name)} id="num">4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)} id="num">5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)} id="num">6</button>
                <button name="-" onClick={e => this.props.onClick(e.target.name)} id="sign">-</button><br/>

                <button name="1" onClick={e => this.props.onClick(e.target.name)} id="num">1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)} id="num">2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)} id="num">3</button>
                <button name="+" onClick={e => this.props.onClick(e.target.name)} id="sign">+</button><br/>

                <button name="0" onClick={e => this.props.onClick(e.target.name)} id="num">0</button>
                <button name="." onClick={e => this.props.onClick(e.target.name)} id="num">.</button>
                <button name="DEL" onClick={e => this.props.onClick(e.target.name)} id="num">DEL</button>
                <button name="=" onClick={e => this.props.onClick(e.target.name)} id="equal">=</button>

            </div>
            </Container>
        );
    }
}

export default number;