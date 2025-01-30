import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const {signUp} = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    signUp(email, password)
      .then(userCredential => {
        console.log(userCredential.user);
        const userInfo = userCredential.user;
        updateProfile(userInfo, { displayName: name })
      })
      .catch(error => {
        console.log(error);
      });

  }

  return (
    <div className="hero">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Register</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-8">
          <form onSubmit={handleRegister} className="card-body space-y-4">
            <fieldset className="fieldset">
              <label className="fieldset-label">Name</label>
              <input name="name" type="name" className="input input-lg" placeholder="Your Name" required />
              <label className="fieldset-label">Email</label>
              <input name="email" type="email" className="input input-lg" placeholder="Email" required />
              <label className="fieldset-label">Password</label>
              <input name="password" type="password" className="input input-lg" placeholder="Password" required />
              <div className="mt-2">
                Already have an account? Please <Link className="link link-hover" to={"/login"}>Login</Link>
              </div>
              <button className="btn btn-neutral btn-lg mt-4 w-full">Register</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;