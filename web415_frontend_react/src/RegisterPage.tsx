import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [isRegistered, setisRegistered] = useState(false);
  // use this useRef to get value from inputs.. input data is on ref.current.value, you need to assign ref on html also
  const emailRef = useRef<any>("");
  const passwordRef = useRef<any>("");

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:8000/user/register", {
        // get data from current.value of ref...
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      setisRegistered(true);
    } catch (e: any) {
      alert(e?.response?.data?.error ?? "Connection failed!");
    }
  };

  return (
    <>
      {isRegistered ? (
        <>
          <div className="font-semibold h-screen w-screen flex items-center align-middle justify-center bg-red-50 ">
            Account created successfully. Please login.
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="bg-green-900 p-2 m-2 rounded-4xl text-white"
            >
              {" "}
              Login now{" "}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="font-semibold h-screen w-screen flex items-center align-middle justify-center bg-red-50">
            <div className="p-5 m-5">
              <b>Register:</b>
              <div className="flex gap-2 items-center justify-end">
                Email:
                <input
                  type="text"
                  className="border border-gray-400 p-2 rounded-3xl"
                  ref={emailRef}
                />
              </div>
              <div className="flex gap-2 items-center justify-end mt-5">
                Password:
                <input
                  type="password"
                  ref={passwordRef}
                  className="border border-gray-400 p-2 rounded-3xl"
                />
              </div>
              <button
                className="font-semibold bg-blue-500 text-white p-3 rounded-full w-[200px] mt-2"
                onClick={() => {
                  login();
                }}
              >
                Register
              </button>

              <div>
                Already have an account?
                <div
                  className="text-blue-600"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RegisterPage;
