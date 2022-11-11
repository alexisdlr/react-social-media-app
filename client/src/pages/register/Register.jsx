import './Register.scss'
function Register() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, architecto aut voluptate quaerat quidem obcaecati   
          </p>
          <span>
            Do you have an account?
          </span>
          <button>Login</button>
        </div>
        <div className="right">
          <h2>Register</h2>
          <form>
            <input type="text" name="password" placeholder="Username"/>
            <input type="password" name="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
