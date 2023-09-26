import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { toyService } from "../services/toy.service"

export function ToyEdit() {
    const predefinedLabels = toyService.getLabels()

    const [toyToEdit, setToyToEdit] = useState(null)
    const { toyId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (toyId) {
            toyService.get(toyId).then(toy => {
                setToyToEdit(toy)
            })
        } else {
            setToyToEdit(toyService.getEmptyToy())
        }
    }, [toyId])

    function handleInputChange({ target: { name, value, type, checked } }) {
        if (type === "checkbox") {
            if (name === "inStock") {
                setToyToEdit({ ...toyToEdit, [name]: checked })
            } else {
                const updatedLabels = checked
                    ? [...toyToEdit.labels, name]
                    : toyToEdit.labels.filter((label) => label !== name)

                setToyToEdit({ ...toyToEdit, labels: updatedLabels })
            }
        } else {
            setToyToEdit({ ...toyToEdit, [name]: value })
        }
    }

    function handleSaveChanges(ev) {
        ev.preventDefault()
        toyService.save(toyToEdit)
            .then(() => navigate('/toy'))
    }


    if (!toyToEdit) return <div>Loading...</div>

    const { createdAt, inStock, labels, name, price, _id } = toyToEdit
    return (
        <section className="toy-details-container">
            <div className="btn-back btns-toy">
                <Link to='/toy'>
                    <button>
                        <i className="fa-solid fa-arrow-left fa-xl"></i>
                    </button>
                </Link>
            </div>

            <form onSubmit={handleSaveChanges}>
                <div className="toy-edit">
                    <h1>Name: <input type="text" name="name" value={name} onChange={handleInputChange} /></h1>
                    <p>Price: <input type="number" name="price" value={price} onChange={handleInputChange} /></p>

                    <p>
                        Labels:
                        {predefinedLabels.map((label) => (
                            <label key={label}>
                                <input
                                    type="checkbox"
                                    name={label}
                                    checked={toyToEdit.labels.includes(label)}
                                    onChange={handleInputChange}
                                />{" "}
                                {label}
                            </label>
                        ))}
                    </p>

                    <p>Created At: {createdAt}</p>
                    {toyId && <p>ID: {_id}</p>}
                    <p>In Stock: <input type="checkbox" name="inStock" checked={inStock} onChange={handleInputChange} /></p>
                    <button type="submit">
                        {toyId ? "Save Changes" : "Add Toy"}
                    </button>
                </div>
            </form>
        </section>
    )
}