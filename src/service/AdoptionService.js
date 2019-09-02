import config from '../config'
import { queueArray } from '../helpers/helpers'


const AdoptionService = {
    createUser(name) {
        return fetch(`${config.API_ENDPOINT}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: name
            }),
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res.json()
            })
    },
    getPeople() {
        return fetch(`${config.API_ENDPOINT}/users`, {
            headers: {
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(data => {
                return queueArray(data)
            })
    },
    getDogs() {
        return fetch(`${config.API_ENDPOINT}/dogs`, {
            headers: {
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(data => {
                return data
            })
    },
    getCats() {
        return fetch(`${config.API_ENDPOINT}/cats`, {
            headers: {
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(data => {
                return data
            })
    },
    adoptDog() {
        return fetch(`${config.API_ENDPOINT}/dogs`, {
            method: 'DELETE',
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json();
            })
    },
    adoptCat() {
        return fetch(`${config.API_ENDPOINT}/cats`, {
            method: 'DELETE',
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json();
            })
    },
    removePerson() {
        return fetch(`${config.API_ENDPOINT}/users`, {
            method: 'DELETE',
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(data => {
                return queueArray(data)
            })
    },
    cutLine() {
        return fetch(`${config.API_ENDPOINT}/users/cuttingline`, {
            method: 'DELETE',
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(data => {
                return queueArray(data)
            })
    },
    catsInLine() {
        return fetch(`${config.API_ENDPOINT}/cats/inline`, {
            headers: {
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(data => {
                const cats = queueArray(data)
                cats.shift()
                return cats
            })
    },
    dogsInLine() {
        return fetch(`${config.API_ENDPOINT}/dogs/inline`, {
            headers: {
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(data => {
                const dogs = queueArray(data)
                console.log(dogs)
                dogs.shift()
                return dogs
            })
    },
    getAdoptedAnimals() {
        return fetch(`${config.API_ENDPOINT}/adopted`, {
            headers: {
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(data => {
                return data
            })
    },

}
export default AdoptionService