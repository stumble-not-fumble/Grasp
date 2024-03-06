import Footer from "./footer"
import HomePage from "./homepage"
import Navbar from "./navbar"
import { BrowserRouter } from 'react-router-dom'

const App = () => {
    return (
        <section>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
            <HomePage />
            <Footer />
        </section>
    )
}

export default App