import { ToyPreview } from "./ToyPreview"

export function ToyList({ toys, onRemoveToy }) {

    if (!toys) return <h1>loading...</h1>

    return (
        <section className="toy-list">
            <ul>
                {toys.map((toy) => (
                    <li className="toy-il" key={toy._id}>
                        <ToyPreview toy={toy} onRemoveToy={onRemoveToy} />
                    </li>
                ))}
            </ul>
        </section>
    )
} 