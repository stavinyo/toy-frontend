import { useEffect, useState } from "react"
import { loadToys, removeToy } from "../store/actions/toy.action"
import { useSelector } from "react-redux"
import { ToyList } from "../cmps/ToyList"
import { Link } from "react-router-dom"
import { ToyFilter } from "../cmps/ToyFilter"
import { toyService } from "../services/toy.service"

export function ToyIndex() {
    const toys = useSelector((storeState) => storeState.toyModule.toys)
    const [filterBy, setFilterBy] = useState(toyService.getDefaultFilterBy())
    const [sortBy, setSortBy] = useState('')

    useEffect(() => {
        loadToys(filterBy, sortBy)
            .catch((err) => {
                console.log('err loadToys', err)
            })
    }, [filterBy, sortBy])

    function onRemoveToy(toyId) {
        removeToy(toyId)
            .catch((err) => console.log('err removeToy: ', err))
    }

    function onFilterBy(labels, selectedAvailability, priceRange, searchValue) {
        setFilterBy(
            {
                ...filterBy,
                labels: labels,
                inStock: selectedAvailability,
                priceRange: priceRange,
                search: searchValue
            })
    }

    function onSortBy(sortBy) {
        setSortBy(sortBy)
    }

    return (
        <main className="main-container">
            <ToyFilter onFilterBy={onFilterBy} onSortBy={onSortBy} />

            <Link to={`/toy/edit`} className="btns-toy">
                <button>
                    <i className="fa-solid fa-plus fa-xl"></i>
                </button>
            </Link>

            <ToyList toys={toys} onRemoveToy={onRemoveToy} />
        </main >
    )
} 