import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddInvoice = () => {
  const [lines, setlines] = useState(1);

  const createInvoice = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      await axios.post(
        "http://localhost:8000/invoices",

        {
          customer_name: "Sujan",
          invoice_date: "2026-01-01",
          items: [
            {
              item_name: "Bag",
              quantity: 10,
              price: 100,
            },
            {
              item_name: "Rice",
              quantity: 1,
              price: 1000,
            },
          ],
          total: 1100,
        },

        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
    } catch (e) {}
  };

  return (
    <>
      Add invoice
      <div>
        <div className="">
          <div>Invoice date</div>

          <input type="text" className="border-gray-200 border" />
        </div>

        <div className="">
          <div>Customer name</div>

          <input type="text" className="border-gray-200 border" />
        </div>

        <div>Description:</div>

        {}
        <div className="flex gap-2 ">
          <input
            type="text"
            placeholder="ItemName"
            className="border-gray-200 border"
          />

          <input
            type="text"
            placeholder="Quantity"
            className="border-gray-200 border"
          />

          <input
            type="text"
            placeholder="Price"
            className="border-gray-200 border"
          />
        </div>

        <div>+ Add new item</div>

        <button
          onClick={() => {
            createInvoice();
          }}
          className="bg-blue-500 text-white shadow-2xl rounded-xl p-3"
        >
          Create invoice
        </button>
      </div>
    </>
  );
};

export default AddInvoice;
