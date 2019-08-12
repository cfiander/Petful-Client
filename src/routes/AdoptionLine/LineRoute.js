import React, { Component } from 'react'
import AdoptionLinePage from '../../components/AdoptionLinePage/AdoptionLinePage'
import { Link } from 'react-router-dom'

export default class LineRoute extends Component {

    render() {
        return (
            <>
                <h2>Coming soon to a shelter near you...</h2>
                <Link to={`/adopt`}>&#8592;</Link>
                <div className="adoptionPage">
                    <AdoptionLinePage />
                </div>
            </>
        )
    }
}