import { toyService } from "../../services/toy.service"
import { REMOVE_TOY, SET_FILTER_BY, SET_TOYS } from "../reducers/toy.reducer"
import { store } from "../store"

export function loadToys(filterBy, sortBy) {
    return toyService.query(filterBy, sortBy)
        .then((toys) => {
            store.dispatch({ type: SET_TOYS, toys })
        })
        .catch(err => {
            console.log('err loadToys:', err)
            throw err
        })
}

export function removeToy(toyId) {
    return toyService.remove(toyId)
        .then(() => {
            store.dispatch({ type: REMOVE_TOY, toyId })
        })
        .catch(err => {
            console.log('err loadToys:', err)
            throw err
        })
}
