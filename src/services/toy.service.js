import { utilService } from './util.service'
import { storageService } from './async-storage.service'
import { httpService } from './http.service';

const TOY_KEY = 'toyDB'
const BASE_URL = 'toy/'
const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor', 'Battery Powered'];

_createToys()

export const toyService = {
    query,
    remove,
    save,
    getEmptyToy,
    get,
    getLabels,
    getLabelsMap,
    getDefaultFilterBy
}


function query(filterBy = {}, sortby = {}) {
    return httpService.get(BASE_URL, { params: { filterBy, sortby } })
    // return storageService.query(TOY_KEY)
}

function get(toyId) {
    return httpService.get(BASE_URL + toyId)
    // return storageService.get(TOY_KEY, toyId)
}

function remove(toyId) {
    // return storageService.remove(TOY_KEY, toyId)
    return httpService.delete(BASE_URL + toyId)
}

function save(toy) {
    if (toy._id) {
        return httpService.put(BASE_URL, toy)
        // return storageService.put(TOY_KEY, toy)
    } else {
        return httpService.post(BASE_URL, toy)
        // return storageService.post(TOY_KEY, toy)
    }
}

function _createToys() {
    let toys = utilService.loadFromStorage(TOY_KEY)
    if (!toys || !toys.length)
        toys = [
            {
                _id: 't101',
                name: 'Talking Doll',
                price: 123,
                labels: ['Doll', 'Battery Powered', 'Baby'],
                createdAt: 1631031801011,
                inStock: true,
            },
            {
                _id: 't102',
                name: 'Remote Control Car',
                price: 45,
                labels: ['On wheels', 'Battery Powered', 'Outdoor'],
                createdAt: 1631031901011,
                inStock: true,
            },
            {
                _id: 't103',
                name: 'Artistic Coloring Set',
                price: 20,
                labels: ['Art', 'Baby'],
                createdAt: 1631032001011,
                inStock: false,
            },
            {
                _id: 't104',
                name: 'Wooden Puzzle',
                price: 15,
                labels: ['Puzzle'],
                createdAt: 1631032101011,
                inStock: true,
            },
            {
                _id: 't105',
                name: 'Outdoor Soccer Ball',
                price: 10,
                labels: ['Outdoor'],
                createdAt: 1631032201011,
                inStock: true,
            }
        ]
    utilService.saveToStorage(TOY_KEY, toys)
}

function getEmptyToy() {
    return {
        name: '',
        price: null,
        labels: [''],
        createdAt: Date.now(),
        inStock: true,
    }
}

function getLabels() {
    return labels
}

function getLabelsMap(toys, type) {
    if (toys === null) return

    const labelsMap = toys.reduce((acc, toy) => {
        toy.labels.forEach(label => {
            acc[label] = (acc[label] || 0) + 1
        })
        return acc
    }, {})

    if (type === 'value') {
        return Object.values(labelsMap)
    } else if (type === 'key') {
        return Object.keys(labelsMap)
    }

    return labelsMap
}

function getDefaultFilterBy() {
    return {
        search: '',
        priceRange: [-Infinity, Infinity],
        labels: [],
        inStock: null
    }
}