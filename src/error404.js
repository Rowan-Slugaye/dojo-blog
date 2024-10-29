import { Link } from "react-router-dom";

const Notfound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The page could not be found. Check if you typed the link correct or</p>
            <Link to="/">Go back to Homepage...</Link>
        </div>
     );
}
 
export default Notfound;