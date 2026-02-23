import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";
import DashboardPage from "./DashboardPage";
import RegisterPage from "./RegisterPage";
import InvoiceDashboard from "./invoices/invoiceDashboard";
import AddInvoice from "./invoices/addInvoice";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />

        <Route path="/invoices" element={<InvoiceDashboard />} />

        <Route path="/invoices/add" element={<AddInvoice />} />
      </Routes>
    </>
  );
}

export default App;
