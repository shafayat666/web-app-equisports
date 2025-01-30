import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then(userCredential => {
        console.log(userCredential.user);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className="hero">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-8">
          <form onSubmit={handleLogin} className="card-body space-y-4">
            <fieldset className="fieldset">
              <label className="fieldset-label">Email</label>
              <input name="email" type="email" className="input input-lg" placeholder="Email" />
              <label className="fieldset-label">Password</label>
              <input name="password" type="password" className="input input-lg" placeholder="Password" />
              <div className="mt-2">
                New here? Please <Link className="link link-hover" to={"/register"}>Register</Link>
              </div>
              <button className="btn btn-neutral btn-lg mt-4 w-full">Login</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
