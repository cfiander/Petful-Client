import React, { Component } from 'react'
import AdoptionService from '../../service/AdoptionService'



export default class AdoptionLinePage extends Component {
    state = {
        cats: [],
        dogs: []
    }

    componentDidMount() {
        setTimeout(() => {
        AdoptionService.catsInLine()
            .then(cats => {
                this.setState({ cats })
            })
        AdoptionService.dogsInLine()
            .then(dogs => {
                this.setState({ dogs })
            })
        }, 500)
    }

    renderCats() {
        const {cats = []} = this.state
        const list = cats.map((cat, i) => {
            return <li key={i}>
                <img src={cat.imageURL} alt="dogimage"></img>
                <p>Name: {cat.name}</p>
                <p>Sex: {cat.sex}</p>
                <p>Age: {cat.age}</p>
                <p>Breed: {cat.breed}</p>
                <p>Story: {cat.story}</p>
                <p>Description: {cat.imageDescription}</p>
            </li>
        })
        return (
            <div className="descriptionLine cat">
            <ul className="details">
                {list}
            </ul>
            </div>
        )
    }

    renderDogs() {
        const {dogs = []} = this.state
        const list = dogs.map((dog, i) => {
            return <li key={i} className="linePets">
                <img src={dog.imageURL} alt="dogimage"></img>
                <p>Name: {dog.name}</p>
                <p>Sex: {dog.sex}</p>
                <p>Age: {dog.age}</p>
                <p>Breed: {dog.breed}</p>
                <p>Story: {dog.story}</p>
                <p>Description: {dog.imageDescription}</p>
            </li>
        })
        return (
            <div className="descriptionLine dog">
            <ul className="details">
                {list}
            </ul>
            </div>
        )
    }

    

    render() {
        return (
            <>
            {this.renderDogs()}
            {this.renderCats()}
            </>
        )
    }
}