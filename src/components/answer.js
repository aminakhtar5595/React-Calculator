import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class answer extends Component {
    constructor() {
        super();
        let today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),

            weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            current_day = weekdays[today.getDay()];

            this.state = {
                date: date,
                current_day: current_day
            }
    }
    render() {
         let {result} = this.props;
        return (
<Container>
<div className="result">
<div className="demo">
<Row>
<Col><p id="ans-date">{this.state.date}</p></Col>
<Col><h2>Calcu<span className="demo-span">lator</span></h2></Col>
<Col><p id="ans-date">{this.state.current_day}</p></Col>
</Row>
</div>
<p>{result}</p>
</div>
</Container>


    );
    }
}

export default answer;