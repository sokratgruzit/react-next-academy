import { useState } from "react";
import RelatedThemes from "./RelatedThemes";
import PurchaseHistoryInvoice from "./PurchaseHistoryInvoice";
import Button from "../UI/Button/Button";

import styles from "../../styles/Dashboard/PurchaseHistory.module.scss";

const PurchaseHistory = () => {
  const DATA_H = [
    { title: "SL" },
    {
      title: "Date",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.6959 13.6992H15.7049M15.6959 16.6992H15.7049M11.9959 13.6992H12.0059M11.9959 16.6992H12.0059M8.29492 13.6992H8.30492M8.29492 16.6992H8.30492"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    { title: "Total courses" },
    {
      title: "Total price",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 15L22 9C22 4 20 2 15 2L9 2C4 2 2 4 2 9L2 15C2 20 4 22 9 22L15 22C20 22 22 20 22 15Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.8603 9.88844L13.8203 6.84844L13.8203 17.1484"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.14062 14.1084L10.1806 17.1484L10.1806 6.84844"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    { title: "Discount" },
    {
      title: "Payment type",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.34989 2H12.2499C12.9899 2 13.5999 2.61 13.5999 3.35V4.83C13.5999 5.37 13.2599 6.04 12.9299 6.38L10.0299 8.94C9.62989 9.28 9.35989 9.95 9.35989 10.49V13.39C9.35989 13.79 9.08989 14.33 8.74989 14.54L7.80989 15.15C6.92989 15.69 5.71989 15.08 5.71989 14V10.43C5.71989 9.96 5.44989 9.35 5.17989 9.01L2.61989 6.31C2.27989 5.97 2.00989 5.37 2.00989 4.96V3.41C1.99989 2.61 2.60989 2 3.34989 2Z"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 11.9983V14.9983C2 19.9983 4 21.9983 9 21.9983H15C20 21.9983 22 19.9983 22 14.9983V8.99828C22 5.87828 21.22 3.91828 19.41 2.89828C18.9 2.60828 17.88 2.38828 16.95 2.23828M13 12.9983H18M11 16.9983H18"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    { title: "Invoice" },
  ];

  const DUMMY_DATA = [
    {
      id: 1,
      purchaseDate: new Date(),
      totalCourses: 1,
      totalPrice: "19$",
      discount: "0%",
      paymentType: "PayPal",
      invoice: "view invoice",
    },
    {
      id: 2,
      purchaseDate: new Date(),
      totalCourses: 1,
      totalPrice: "19$",
      discount: "0%",
      paymentType: "PayPal",
      invoice: "view invoice",
    },
    {
      id: 3,
      purchaseDate: new Date(),
      totalCourses: 1,
      totalPrice: "19$",
      discount: "0%",
      paymentType: "PayPal",
      invoice: "view invoice",
    },
    {
      id: 1,
      purchaseDate: new Date(),
      totalCourses: 1,
      totalPrice: "19$",
      discount: "0%",
      paymentType: "PayPal",
      invoice: "view invoice",
    },
    {
      id: 4,
      purchaseDate: new Date(),
      totalCourses: 1,
      totalPrice: "19$",
      discount: "0%",
      paymentType: "PayPal",
      invoice: "view invoice",
    },
    {
      id: 2,
      purchaseDate: new Date(),
      totalCourses: 4,
      totalPrice: "55$",
      discount: "20%",
      paymentType: "Wallet",
      invoice: "view invoice",
    },
    {
      id: 3,
      purchaseDate: new Date(),
      totalCourses: 4,
      totalPrice: "55$",
      discount: "20%",
      paymentType: "Wallet",
      invoice: "view invoice",
    },
    {
      id: 4,
      purchaseDate: new Date(),
      totalCourses: 4,
      totalPrice: "55$",
      discount: "20%",
      paymentType: "Wallet",
      invoice: "view invoice",
    },
  ];

  const [invoice, setInvoice] = useState(false);

  return (
    <>
      {invoice ? (
        <PurchaseHistoryInvoice invoice={() => setInvoice(false)} />
      ) : (
        <div className={styles.purchaseHistoryWrapper}>
          <RelatedThemes title="Purchase History" />
          <div className={styles.purchaseHeaderWrapp}>
            {DATA_H.map((item, index) => {
              return (
                <div className={styles.purchaseHeaders} key={index}>
                  {item.title}
                  {item.svg}
                </div>
              );
            })}
          </div>
          <div className={styles.purchaseContentWrapp}>
            {DUMMY_DATA.map((item, index) => {
              return (
                <div className={styles.purchaseContent} key={index}>
                  <p>{item.id}</p>
                  <p>{item.purchaseDate.toLocaleString()}</p>
                  <p>{item.totalCourses}</p>
                  <p>{item.totalPrice}</p>
                  <p>{item.discount}</p>
                  <p>{item.paymentType}</p>
                  <button
                    className={styles.viewButton}
                    onClick={() => setInvoice(true)}
                  >
                    {item.invoice}
                  </button>
                  {/* <Button
                    clasName={styles.viewButton}
                    title={item.invoice}
                    onClick={() => setInvoice(true)}
                    type={"blue-btn"}
                    custumLink={{ color: "#fff" }}
                    customStyles={{
                      backgroundColor: "transparent",
                      padding: "10px 8px",
                    }}
                    // href={"/"}
                  /> */}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default PurchaseHistory;
