import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./Login.scss";

function Login() {
  const {login} = useContext(AuthContext)


  const handleLogin = () => {
    login();
  }
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio,
            architecto aut voluptate quaerat quidem obcaecati
          </p>
          <span>Don't you have an account?</span>
          <Link to={"/register"}>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h2>Login</h2>
          <form>
            <input type="text" name="password" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
