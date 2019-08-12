import config from '../config'
import { queueArray } from '../helpers/helpers'
import AdoptionContext from '../context/AdoptionContext'

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
    // catsInLine() {
    //     return fetch(`${config.API_ENDPOINT}/cats/inline`, {
    //         headers: {
    //         },
    //     })
    //         .then(res =>
    //             (!res.ok)
    //                 ? res.json().then(e => Promise.reject(e))
    //                 : res.json()
    //         )
    //         .then(data => {
    //             return queueArray(data)
    //         })
    // },
    // dogsInLine() {
    //     return fetch(`${config.API_ENDPOINT}/dogs/inline`, {
    //         headers: {
    //         },
    //     })
    //         .then(res =>
    //             (!res.ok)
    //                 ? res.json().then(e => Promise.reject(e))
    //                 : res.json()
    //         )
    //         .then(data => {
    //             return queueArray(data)
    //         })
    // },
    getInLine() {
    Promise.all([
        fetch(`${config.API_ENDPOINT}/dogs/inline`),
        fetch(`${config.API_ENDPOINT}/cats/inline`)
      ])
        .then(([dogsRes, catsRes]) => {
          if (!dogsRes.ok) return dogsRes.json().then(e => Promise.reject(e));
          if (!catsRes.ok) return catsRes.json().then(e => Promise.reject(e));
  
          return Promise.all([dogsRes.json(), catsRes.json()]);
        })
        .then(([dogData, catData]) => {
            console.log([queueArray(dogData), queueArray(catData)])
            return Promise.all([queueArray(dogData), queueArray(catData)]);
        })
    },
}
export default AdoptionService