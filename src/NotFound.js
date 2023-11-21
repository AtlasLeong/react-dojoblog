import { Link } from "react-router-dom";

const NotFound = () => {

    return ( 
        <div>
            <h2>Sorry</h2>
            <p>This page is already missing....</p>
            <Link to='/'>Back to homepage</Link>
        </div>
     );
}
 
export default NotFound
