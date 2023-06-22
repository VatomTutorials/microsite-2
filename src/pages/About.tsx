import { Link } from "react-router-dom";
import './Common.css'
//
const AboutPage = () => {
  return (
		<div>
			<h1>About page</h1>
			<h3>v 0.0.001</h3>			
			<Link to="/home"> Return to the Home page </Link>
		</div>
  )
}
//
export default AboutPage;