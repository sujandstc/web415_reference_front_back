import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  return (
    <>
      User logged in ...
      <div
        className="bg-red-300 p-3 m-4 cursor-pointer"
        onClick={() => {
          localStorage.removeItem("accessToken");
          navigate("/");
        }}
      >
        Logout
      </div>
    </>
  );
};

export default DashboardPage;
