import { Link } from 'react-router-dom'
import { utilService } from '../services/util.service'

export function AppHeader() {
    return (
        <header className="app-header">
            <Link to="/">
                <img className='img-logo' src={utilService.getAssetSrc('logo.png')} alt="logo.png" />
            </Link>

            <div>
                <Link to="/toy">
                    Toys
                </Link>
                <Link to="/dashboard">
                    Dashboard
                </Link>
                <Link to="/map">
                    Map
                </Link>
            </div>
        </header>
    )
} 