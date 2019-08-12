import React, { Component } from 'react'
import AdoptedPage from '../../components/Adopted/AdoptedPage'
import { Link } from 'react-router-dom'
export default class AdoptedRoute extends Component {

    render() {
        return (
            <>
            <h2>Adopt Here</h2>
            <Link to={`/adopt`}>&#8592;</Link>
            <div className="adoptionPage">
                <AdoptedPage/>
            </div>
            </>
        )
    }
}