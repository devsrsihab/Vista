import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // success state
  const [success, setSuccess] = useState("");
  const [erros, setErrors] = useState("");



  const handleLoginForm = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const term = e.target.term.checked;

    if (!term) { setErrors('pLease Check Our Term and Condtion')
     return }

     // reset password
     setErrors('')
     setSuccess('')

    // signInWithEmailAndPassword
    signInWithEmailAndPassword(auth, email, password)
      .then((success) => {
        const isEmailVerified = success.user.emailVerified
        if (!isEmailVerified) {
          setErrors("Check Your Email inbox and Verify Your Email First");
        }else{
          setSuccess("Your Have login Succesfully");
        }
        console.log(isEmailVerified);

        
        const user = success.user;
        console.log(user);
      })
      .catch((err) => {
        setSuccess("");
        setErrors(err.message);
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLoginForm }>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="flex gap-2 ">
                  <input 
                  type="checkbox"  name="term" id="term" />
                  <label className="label" htmlFor="term">
                    <span className="label-text">
                      Accept Our Term and Condition{" "}
                    </span>
                  </label>
                </div>
                <div className="form-control ">
                  <div
                    className={
                      success ? "text-green-500 my-6" : "text-red-500 my-6"
                    }
                  >
                    {success && success}
                    {erros && erros.replace("Firebase:", "Your")}
                  </div>
                  <button className="btn btn-primary">Login</button>
                </div>
                <div className="form-control mt-6">
                <Link to='/register' > <button className="btn w-full btn-secondary">Create a New Account</button></Link>
                  
                </div>
                <div className="forget-pawwrod text-center">

            <span className="my-6 text-blue-500" ><Link to='/forget-password' > Forgotten password?</Link>  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
