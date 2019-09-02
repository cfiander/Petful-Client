import React, { Component } from 'react'
import AdoptionPage from '../../components/AdoptionPage/AdoptionPage'
import { Link } from 'react-router-dom'

export default class AdoptionRoute extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => { },
        },
    }

    onAdopt = () => {
        const { history } = this.props
        history.push('/adopted')
    }

    render() {
        return (
            <>
                <h2>Adopt Here</h2>
                <div className="adoptionPage">
                    <AdoptionPage onAdopt={this.onAdopt} />
                </div>
                <section>
                    <br/>
                    <Link to={'/adoptionline'} className="adoptButton">See More Pets</Link>
                    <br/>
                    <br/>
                    <img
                        src={'https://img.pngio.com/png-hd-dogs-and-cats-transparent-hd-dogs-and-catspng-images-dog-and-cat-png-629_488.jpg'}
                        alt="catanddog"
                        className="landingImage"
                    />
                    <br/>
                    <br/>
                    <Link to={`/adopted`} className="adoptButton">View Adopted Pets</Link>
                </section>
            </>
        )
    }
}