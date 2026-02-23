import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const InvoiceDashboard = () => {
  const [invoices, setInvoices] = useState<any>([]);

  useEffect(() => {
    getInvoices();
  }, []);

  const getInvoices = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.get("http://localhost:8000/invoices", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setInvoices(response?.data?.data);
    } catch (e) {}
  };

  return (
    <>
      <div className="flex justify-between items-center">
        Invoices
        <Link to="/invoices/add">
          <button>Add invoice</button>
        </Link>
      </div>

      <div>
        {invoices?.map((el: any) => (
          <>
            <div className="bg-gray-50 p-2 m-2">
              <div className="">{el.customer_name}</div>

              <div className="">Rs. {el.total}</div>

              <div className="">Items: </div>
              <div className="bg-yellow-50 p-2">
                {el?.items?.map((el: any) => (
                  <>
                    <div className="flex gap-2">
                      <div className="">{el.item_name}</div>

                      <div className="">{el.quantity}</div>

                      <div className="">{el.price}</div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default InvoiceDashboard;
