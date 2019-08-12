import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AdoptionService from '../../service/AdoptionService'
import AdoptionContext from '../../context/AdoptionContext';
import './AdoptionLinePage.css';

export default class AdoptionPage extends Component {


    renderCats() {
        const {catsInLine = []} = this.context
        const list = catsInLine.map((cat, i) => {
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
            <div className="descriptionLine">
            <ul>
                {list}
            </ul>
            </div>
        )
    }

    renderDogs() {
        const {dogsInLine = []} = this.context
        const list = dogsInLine.map((dog, i) => {
            return <li key={i}>
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
            <div className="descriptionLine">
            <ul>
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