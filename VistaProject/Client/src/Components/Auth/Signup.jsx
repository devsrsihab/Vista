import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import auth from "./firebase";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Signup = () => {
  // error sate
  const [registerErr, SetRegisterErr] = useState("");
  const [success, SetSuccess] = useState("");
  const [isoading, setIsloding] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  // hanlde handleSignUpForm
  const handleSignUpForm = (e) => {
    e.preventDefault();
    setIsloding(true);

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    SetRegisterErr("");
    SetSuccess("");

    const term = e.target.term.checked;
    console.log(term);

    if (!term) {
      SetRegisterErr("pLease Check Our Term and Condtion");
      setIsloding(false);
      return;
    }

    const pattern = "/^(?=.*[!@#$%^&*])(?=.*[0-9])[A-Za-z0-9!@#$%^&*]{8,26}$/";
    if (pattern.match(password)) {
      SetRegisterErr(
        "Your Password Al least 8 character and 1 Special Character"
      );
      setIsloding(false);

      return;
    }

    // register use
    createUserWithEmailAndPassword(auth, email, password)
      .then((resutl) => {
        const user = resutl.user;
        sendEmailVerification(auth.currentUser).then(() => {
          console.log("Email verification sended in Your Email");
        });

        //  update the user name and photo
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: "alumalusalu@alu.com",
        })
          .then(() => {
            SetSuccess(
              "You have Registered Successfully, To login Please Verify Your Email"
            );
            setIsloding(false);
          })
          .catch((err) => {
            console.error(err);
          });

        console.log(user);
      })
      .catch((err) => {
        console.log(err);
        console.log("user not created");
        SetRegisterErr(err.message);
        setIsloding(false);
      });
  };

  return (
    <>
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUpForm}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="pass flex relative">
                    <input
                      name="password"
                      type={isShowPassword ? "text" : "password"}
                      placeholder="Password"
                      className="input  w-full input-bordered"
                    />

                    <div
                      onClick={() => {
                        setIsShowPassword(!isShowPassword);
                      }}
                      className="icons absolute bottom-[30%] text-2xl cursor-pointer right-0"
                    >
                      {isShowPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 ">
                  <input type="checkbox" name="term" id="term" />
                  <label className="label" htmlFor="term">
                    <span className="label-text">
                      Accept Our Term and Condition{" "}
                    </span>
                  </label>
                </div>
                <div className="form-control mt-4">
                  {isoading && (
                    <span className="loading loading-bars loading-lg"></span>
                  )}
                  <div
                    className={`error text-sm ${
                      registerErr && "text-red-700"
                    } ${success && "text-green-500"}  my-5`}
                  >
                    <h2>
                      {registerErr && registerErr.replace("Firebase:", "")}
                    </h2>
                    <h2>{success && success}</h2>
                  </div>
                  <button className="btn btn-primary">Submit</button>
                </div>
                <span className="my-6">
                  Already Have an Accoutn? Please <Link to="/login">Login</Link>{" "}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
