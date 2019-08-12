import React, { Component } from 'react'
import AdoptionPage from '../../components/AdoptionPage/AdoptionPage'

export default class LineRoute extends Component {

    render() {
        return (
            <>
            <h2>Adopt Here</h2>
            <div className="adoptionPage">
                <AdoptionLinePage/>
            </div>
            </>
        )
    }
}