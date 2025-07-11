import React, { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";
const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // handle Sign Up form Submit
  const handleSignup = async (e) => {
    e.preventSignUp();
    let profileImageUrl = "";

    if (!fullName) {
      setError("please enter your name");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please entr a valid address");
      return;
    }
    if (!password) {
      setError("Please enter the password");
      return;
    }
    setError("");
  };

  return (
    <AuthLayout>
      <div className=" lg:w-[100%] h-auto md:h-full mt-10 md:mt-10  flex flex-col justify-center ">
        <div className="text-xl font-semibold text-black ">
          {" "}
          Create an Account{" "}
        </div>
        <p className="text-xs text-slate-700 mt-[5px] mb-6  ">
          Join us today by entering your details below
        </p>
        <form onSubmit={handleSignup}>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label="Full Name"
              placeholder="John"
              type="text"
            />
            <Input
              type="text"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="john@example.com"
            />
            <div className="col-span-2">
              <Input
                type="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                label="Password"
                placeholder="Min 8 Characters"
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-xs pb-2.5 ">{error}</p>}
          <button type="submit" className="btn-primary">
            SIGN UP
          </button>
          <p className="text-[13px] text-slate-800 mt-3  ">
            {" "}
            Already have an account{" "}
            <Link className="font-medium text-primary underline" to="/login">
              {" "}
              Login
            </Link>{" "}
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
