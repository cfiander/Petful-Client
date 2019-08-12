import React, { Component } from 'react'
import AdoptionService from '../../service/AdoptionService'
import AdoptionContext from '../../context/AdoptionContext';

export default class LandingPage extends Component {
    static defaultProps = {
        onSubmit: () => {}
      }

    static contextType = AdoptionContext

    handleSubmit = ev => {
        ev.preventDefault()
        let name = ''
        if (ev.target['name'].value !== '') {
            name = ev.target['name'].value
        }
        window.localStorage.setItem("name", name)
        AdoptionService.createUser(name)
            .then(name => {
                this.context.setUser(name)
                this.props.onSubmit()
            })
            .catch(error => {
                console.error(error)
            })
    }

    render() {
        return (
            <div>
                <div className="landingDescription">
                    <p>Welcome to Petful, a special kind of animal shelter.</p>
                    <img
                        src={'https://img.pngio.com/png-hd-dogs-and-cats-transparent-hd-dogs-and-catspng-images-dog-and-cat-png-629_488.jpg'}
                        alt="catanddog"
                        className="landingImage"
                    />
                    <p>
                        We are a first come first serve and first in first out
                        animal shelter.
                    </p>
                    <img
                        src={'https://www.stickpng.com/assets/images/5847f61acef1014c0b5e48a3.png'}
                        alt="catanddog"
                        className="landingImage"
                    />
                    <p>
                        That means whoever is first in line gets to adopt first.
                        And more importantly, whatever 'future pets' got here first,
                        are the only cat and dog currently available for adoption.
                    </p>
                    <img
                        src={'http://pngimg.com/uploads/cat/cat_PNG50497.png'}
                        alt="catanddog"
                        className="landingImage"
                    />
                    <p>By clicking on the adopt button, you'll be able to see your place in line
                        as well as the gender, age, and breed of the cat and dog that are currently up for adoption.
                    </p>
                    <form onSubmit={ev => this.handleSubmit(ev)}>
                        <label htmlFor="name">What's your name ?</label>
                        <input placeholder="Art Vandelay" name="name" id="name"></input>
                        <button type="submit" className="adoptButton">Find a friend</button>
                    </form>
                    <img
                        src={'http://pluspng.com/img-png/png-hd-dogs-and-cats-pet-dogs-and-cats-pet-dog-cat-free-png-image-650.jpg'}
                        alt="anothercatanddog"
                        className="adoptionImage"
                    />
                    <h2>Thanks for stopping by</h2>
                </div>
            </div>
        )
    }
}