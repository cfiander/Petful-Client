// Petful is a web app for an animal shelter that only allows visitors to adopt animals that have been in the
// the shelter the longest. That means only one cat and one dog is available to adopt at any given time. 
// Users are also only allowed to adopt an animal if they are at the front of the line. 
// Users can see see their place in line in a center block. For the purposes of demonstration the app has a button to 'cut the line'
// Users can move to a page and see the other animals in the shelter, which are in line for a turn to be adopted.
// Users can move to page to see a list of all the animals that have been adopted. 
// When a user is at the front of the line and on the main `/adopt' page, they can push one of two adopt buttons.
// One which adopts the cat at the top of their line, and the other, which adopts the dog at the head of the dog line.

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
        window.localStorage.setItem("adoptionStatus", "freeToAdopt")
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
                        We are a first come, first serve and first in, first out
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
                    <p>By clicking on the 'Find a Friend' button, you'll be able to see your place in line
                        as well as the gender, age, and breed of the cat and dog that are currently up for adoption.
                    </p>
                    <form onSubmit={ev => this.handleSubmit(ev)}>
                        <label htmlFor="name">What's your name ?</label>
                        <input placeholder="Art Vandelay" name="name" id="name"></input>
                        <br/>
                        <button type="submit" className="adoptButton">Find a Friend</button>
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