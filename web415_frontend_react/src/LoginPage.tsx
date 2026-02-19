import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  // use this useRef to get value from inputs.. input data is on ref.current.value, you need to assign ref on html also
  const emailRef = useRef<any>("");
  const passwordRef = useRef<any>("");

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:8000/user/login", {
        // get data from current.value of ref...
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });

      if (response?.data?.accessToken) {
        localStorage.setItem("accessToken", response?.data?.accessToken);
        navigate("/");
      }
    } catch (e: any) {
      alert(e?.response?.data?.error ?? "Connection failed!");
    }
  };

  return (
    <>
      <div className="font-semibold h-screen w-screen flex items-center align-middle justify-center bg-red-50">
        <div className="p-5 m-5">
          <b>Login:</b>
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
            Login
          </button>

          <div>
            Dont have an account?
            <div
              className="text-blue-600"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
