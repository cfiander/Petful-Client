import React, { Component } from 'react'
import AdoptionPage from '../../components/AdoptionPage/AdoptionPage'

export default class AdoptionRoute extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => { },
        },
    }

    seeMore = () => {
        const { history } = this.props
        history.push('/adoptionline')
    }
    
    render() {
        return (
            <>
            <h2>Adopt Here</h2>
            <div className="adoptionPage">
                <AdoptionPage seeMore={this.seeMore}/>
            </div>
            </>
        )
    }
}