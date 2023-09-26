import { useEffect, useState } from "react"
import { toyService } from "../services/toy.service"
import { Link, useParams } from "react-router-dom"

export function ToyDetails() {

    const [toy, setToy] = useState(null)
    const { toyId } = useParams()

    useEffect(() => {
        toyService.get(toyId)
            .then(toy => {
                setToy(toy)
            })
            .catch(error => {
                console.error("Error fetching toy:", error);
            })
    }, [])

    if (!toy) return <div>Loading...</div>

    const { createdAt, inStock, labels, name, price, _id } = toy
    return (
        <section className="toy-details-container">
            <div className="btn-back btns-toy">
                <Link to='/toy'>
                    <button>
                        <i className="fa-solid fa-arrow-left fa-xl"></i>
                    </button>
                </Link>
            </div>

            <div className="toy-details">
                <h1>{'name: ' + name}</h1>
                <p>{'price: ' + price}</p>
                <p>{'labels: ' + labels}</p>
                <p>{'createdAt: ' + createdAt}</p>
                <p>{'_id: ' + _id}</p>
                <p>{'inStock: ' + inStock}</p>
            </div>
        </section>
    )
}