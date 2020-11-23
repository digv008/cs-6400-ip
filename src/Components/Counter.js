import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function Counter({ counter, sum }) {    
    return (
        <div className="risk-counter">
            <h4><strong>COVID-19 Prognosis Probability Score:</strong>  {counter}</h4>
            <h5>Higher the probability score, higher the chances of the individual ending up in Intensive care or their chances of death.</h5>
            <ProgressBar variant="danger" now={(counter / sum) * 100}
            />
            <br />
        </div>
    )
}
