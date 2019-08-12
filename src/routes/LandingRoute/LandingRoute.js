import React, { Component } from 'react'
import LandingPage from '../../components/LandingPage/LandingPage'

export default class LandingRoute extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => { },
        },
    }

    onSubmit = () => {
        const { history } = this.props
        history.push('/adopt')
    }
    render() {
        return (
            <section>
                <LandingPage
                    onSubmit={this.onSubmit}
                />
            </section>
        )
    }
}