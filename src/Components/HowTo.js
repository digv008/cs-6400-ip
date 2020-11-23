import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';


export class HowTo extends Component {
    render() {
        return (
            <Container fluid
                style={{
                    backgroundColor: "light", 
                    margin: "2% 0 1% 0",
                    textAlign: "left",
                    padding: "1% 1% 1% 1%"
                }}
            >
                <p><strong>Tab Explaination: </strong><a href="#legend" style={{ color: "#0056b3" }}></a></p>
                <p><strong>Intensive Care: </strong> This tab gives the probability of the patients to end up in an ICU. <a href="#legend" style={{ color: "#0056b3" }}></a></p>
                <p><strong>Acute respiratory distress syndrome: </strong> This tab gives the probability of an individual to suffer from acute respiratory distress syndrom based on their current symptoms. <a href="#legend" style={{ color: "#0056b3" }}></a></p>
                <p><strong>Respiratory Distress Mortality: </strong> This gives the probibility of death due to respiratory distress. <a href="#legend" style={{ color: "#0056b3" }}></a></p>
                <p><strong>Mortality</strong></p>
                <p><strong>Use : </strong>This application can be used by an individual to assess their prognosis based on their current symptoms and blood and body vitals.<a href="#legend" style={{ color: "#0056b3" }}></a></p>
                <p> <strong>Warning: </strong> Results provided by below test are indicative purpose only and should not be considered final. </p>

            </Container>
        )
    }
}

export default HowTo
