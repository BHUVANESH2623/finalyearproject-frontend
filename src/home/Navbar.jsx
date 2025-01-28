import './navbar.scss';
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";


export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link className="link" to={"/"}>
            <h2>BusToo</h2>
        </Link>
      </div>
      <div className="right">
        <Button className="btn">
          <Link className="link" to={"/login"}>
            Login
          </Link>
        </Button>
        <Button className="btn">
          <Link className="link" to={"/register"}>
            Register
          </Link>
        </Button>
      </div>
    </div>
  )
}
