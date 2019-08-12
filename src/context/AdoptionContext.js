import React, { Component } from 'react'

const AdoptionContext = React.createContext({
    user: {},
    dogs: [],
    firstDog: {},
    cats: [],
    firstCat: {},
    people: [],
    catsInLine: [],
    dogsInLine: [],
    error: null,
    place: null,
    setError: () => { },
    clearError: () => { },
    setUser: () => { },
    setPeople: () => [],
    setDogs: () => [],
    setCats: () => [],
    setFirstDog: () => {},
    setFirstCat: () => {},
    setPlace: () => {},
    setCatsInLine: () => [],
    setDogsInLine: () => [],
})

export default AdoptionContext

export class AdoptionProvider extends Component {
    state = {
        user: {},
        error: null,
        people: [],
        dogs: [],
        cats: [],
        firstDog: {},
        firstCat: {},
        catsInLine: [],
        dogsInLine: [],
        place: null,
    };


    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setDogs = dogs => {
        this.setState({ dogs })
    }

    setCats = cats => {
        this.setState({ cats })
    }

    setFirstDog = firstDog => {
        this.setState({firstDog})
    }

    setFirstCat = firstCat => {
        this.setState({firstCat})
    }

    setUser = name => {
        this.setState({
            name
        })
    }

    setPlace = number => {
        console.log(number)
        console.log(this.state.place)
        this.setState({place: number})
    }

    setPeople = people => {
        console.log(people)
        this.setState({
            people
        })
    }

    setDogsInLine = dogsInLine => {
        console.log(dogsInLine)
        this.setState({
            dogsInLine: dogsInLine
        })
    }

    setCatsInLine = catsInLine => {
        console.log(catsInLine)
        this.setState({
            catsInLine: catsInLine
        })
    }

    render() {

        const value = {
            user: this.state.user,
            error: this.state.error,
            people: this.state.people,
            dogs: this.state.dogs,
            cats: this.state.cats,
            firstDog: this.state.firstDog,
            firstCat: this.state.firstCat,
            dogsInLine: this.state.dogsInLine,
            catsInLine: this.state.catsInLine,
            place: this.state.place,
            setError: this.setError,
            clearError: this.clearError,
            setUser: this.setUser,
            setDogs: this.setDogs,
            setCats: this.setCats,
            setPeople: this.setPeople,
            setFirstDog: this.setFirstDog,
            setFirstCat: this.setFirstCat,
            setPlace: this.setPlace,
            setDogsInLine: this.setDogsInLine,
            setCatsInLine: this.setCatsInLine,
        }
        return (
            <AdoptionContext.Provider value={value}>
                {this.props.children}
            </AdoptionContext.Provider>
        )
    }

}