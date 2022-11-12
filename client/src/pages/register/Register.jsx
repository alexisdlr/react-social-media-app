import { Link } from "react-router-dom";
import "./Register.scss";
function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>BIRD FACE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio,
            architecto aut voluptate quaerat quidem obcaecati
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h2>Register</h2>
          <form>
            <input type="text" name="user" placeholder="Username" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <input type="text" name="name" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
