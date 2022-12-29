import { BrowserRouter as Router } from "react-router-dom"
import Routing from './routes';
import './assets/css/icofont.min.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/bootstrap.min.css'
import './assets/css/responsive.css'
import './assets/css/style.css'

export default function App() {
  return (
    <Router>
      <Routing />
    </Router>
  );
}
