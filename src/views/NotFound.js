import { NavLink } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
const NotFound = () => {
  let history = useHistory();
  return (
    <div className="not-found-container">
      <h4>this page isn't avaible</h4>
      <h5>this link </h5>
      <button class="btn btn-primary" onClick={() => history.push("/")}>
        go to homepage
      </button>
    </div>
  );
};
export default NotFound;
