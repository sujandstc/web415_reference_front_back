import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div className="font-semibold h-screen w-screen flex items-center align-middle justify-center bg-red-50">
        Loading, please wait...
      </div>
    </>
  );
};

export default MainPage;
