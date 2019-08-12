import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AdoptionService from '../../service/AdoptionService'
import AdoptionContext from '../../context/AdoptionContext';

export default class AdoptedPage extends Component {
    state = {
        adopted: [],
    }

    componentDidMount() {
        AdoptionService.getAdoptedAnimals()
            .then(adopted => {
                this.setState({adopted})
            })
    }

    renderAdopted() {
        const {adopted = []} = this.state
        const list = adopted.map((adopted, i) => {
            return <li key={i}>
                <img src={adopted.imageURL} alt="adoptedanimal"></img>
                <p>Name: {adopted.name}</p>
                <p>Sex: {adopted.sex}</p>
                <p>Age: {adopted.age}</p>
                <p>Breed: {adopted.breed}</p>
                <p>Story: {adopted.story}</p>
                <p>Description: They've been adopted!</p>
            </li>
        })
        return (
            <div className="descriptionLine">
            <h2>Adopted Pets</h2>
            <ul className="details">
                {list}
            </ul>
            </div>
        )
    }
    

    render() {
        return (
            <>
            {this.renderAdopted()}
            </>
        )
    }
}