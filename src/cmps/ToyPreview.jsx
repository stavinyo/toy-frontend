import { Link } from "react-router-dom"

export function ToyPreview({ toy, onRemoveToy }) {

    const { _id, name, price, inStock } = toy
    return (
        <section className="toy-item">

            <div className="info-toy">
                <h1 className='toy-title'>
                    {name}
                </h1>
                <p>price: ${price}</p>
                <p>in stock: {inStock ? '✔️' : '❌'}</p>
            </div>

            <div className="btns-toy">
                <button onClick={(() => onRemoveToy(toy._id))}>
                    <i className="fa-solid fa-trash fa-lg"></i>
                </button>

                <Link to={`/toy/edit/${toy._id}`}>
                    <button>
                        <i className="fa-regular fa-pen-to-square fa-lg"></i>
                    </button>
                </Link>

                <Link to={`/toy/${toy._id}`}>
                    <button>
                        <i className="fa-solid fa-info fa-lg"></i>
                    </button>
                </Link>
            </div>

        </section >
    )
} 