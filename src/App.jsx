import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { ToyIndex } from './views/ToyIndex'
import { AppHeader } from './cmps/AppHeader'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { ToyDetails } from './cmps/ToyDetails'
import { ToyEdit } from './cmps/ToyEdit'
import { HomePage } from './views/HomePage'
import { Dashboard } from './views/Dashboard'
import { Map } from './views/Map'

import './assets/scss/styles.scss'

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className="app">
          <AppHeader />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/map" element={<Map />} />
            <Route path="/toy" element={<ToyIndex />} />
            <Route path="/toy/:toyId" element={<ToyDetails />} />
            <Route path="/toy/edit/:toyId" element={<ToyEdit />} />
            <Route path="/toy/edit" element={<ToyEdit />} />
          </Routes>
        </section>
      </Router>
    </Provider>
  )
}
