import React, { Component } from 'react'
import AdoptionService from '../../service/AdoptionService'
import AdoptionContext from '../../context/AdoptionContext';
import { Link } from 'react-router-dom'

export default class AdoptionPage extends Component {
    static defaultProps = {
        cuttingLine: () => { }
    }

    static contextType = AdoptionContext

    componentDidMount() {
        setTimeout(() => {
            AdoptionService.getPeople()
                .then(res => {
                    console.log(res)
                    this.context.setPeople(res)
                    console.log(this)
                })
                .catch(error => {
                    console.log(error)
                })
            AdoptionService.getDogs()
                .then(dogs => {
                    this.context.setDogs(dogs)
                    this.context.setFirstDog(dogs.first.data)
                })
                .catch(error => {
                    console.log(error)
                })
            AdoptionService.getCats()
                .then(cats => {
                    this.context.setCats(cats)
                    this.context.setFirstCat(cats.first.data)
                    this.findPlaceInLine()
                    console.log(this.context)
                })
                .catch(error => {
                    console.log(error)
                })

        }, 500)
    }

    findPlaceInLine = () => {
        let place = 1;
        const { people = [] } = this.context
        console.log(place)
        const name = window.localStorage.getItem('name');
        people.forEach((person, i) => {
            console.log(person)
            console.log(i)
            console.log(name)
            if (person.name === name) {
                this.context.setPlace({ place });
                return;
            }
            place = i + 2
        })
        this.context.setPlace(place);
    };

    adoptDog = () => {
        AdoptionService.adoptDog()
            .then(dogs => {
                this.context.setDogs(dogs)
                this.context.setFirstDog(dogs.first.data)
            })
            .then(res =>
                AdoptionService.removePerson()
                    .then(users => {
                        this.context.setPeople(users)
                        window.location.reload(false);
                    })
            )
            .catch(error => console.error(error));
    };

    adoptCat = () => {
        AdoptionService.adoptCat()
            .then(cats => {
                this.context.setCats(cats)
                this.context.setFirstCat(cats.first.data)
            })
            .then(res =>
                AdoptionService.removePerson()
                    .then(users => {
                        this.context.setPeople(users)
                        window.location.reload(false);
                    })
            )
            .catch(error => console.error(error));
    };

    cutLine = () => {
        AdoptionService.cutLine()
            .then(user => {
                this.context.setPeople(user)
                window.location.reload(false);
            })
    }

    peopleAhead = () => {
        let number = this.context.place
        let count = 0;
        while (number > 1) {
            number -= 1
            count += 1
        }
        return count
    }

    renderPeople() {
        const { people = [] } = this.context
        const list = people.map((person, i) => {
            return <li key={i} className="personListItem">
                <p>{i + 1}. {person.name}</p>
            </li>
        })
        return (
            <div className="description people">
                <div className="details">
                    <h2>The current line:</h2>
                    <ul>
                        {list}
                    </ul>
                    <p>There are {this.peopleAhead()} people ahead of you in line</p>
                    <button type="click" onClick={() => this.cutLine()} className="adoptButton">Cut the line</button>
                </div>
            </div>
        )
    }



    renderDog() {
        const { firstDog = {} } = this.context

        return (
            <>
                <div className="description dogs">
                    <div className="details">
                        <button type="button" disabled={this.context.place !== 1} onClick={() => this.adoptDog()} className="adoptButton">Adopt</button>
                        <br />
                        <img src={firstDog.imageURL} alt="dogimage"></img>
                        <p>Name: {firstDog.name}</p>
                        <p>Sex: {firstDog.sex}</p>
                        <p>Age: {firstDog.age}</p>
                        <p>Breed: {firstDog.breed}</p>
                        <p>Story: {firstDog.story}</p>
                        <p>Description: {firstDog.imageDescription}</p>
                    </div>
                </div>
            </>
        )
    }

    renderCat() {
        const { firstCat = {} } = this.context

        return (
            <>
                <div className="description cats">
                    <div className="details">
                        <button type="button" disabled={this.context.place !== 1} onClick={() => this.adoptCat()} className="adoptButton">Adopt</button>
                        <br />
                        <img src={firstCat.imageURL} alt="dogimage"></img>
                        <p>Name: {firstCat.name}</p>
                        <p>Sex: {firstCat.sex}</p>
                        <p>Age: {firstCat.age}</p>
                        <p>Breed: {firstCat.breed}</p>
                        <p>Story: {firstCat.story}</p>
                        <p>Description: {firstCat.imageDescription}</p>
                    </div>
                </div>
            </>
        )
    }

    render() {
        return (
            <>
                {this.renderPeople()}
                {this.renderDog()}
                {this.renderCat()}
            </>
        )
    }
}