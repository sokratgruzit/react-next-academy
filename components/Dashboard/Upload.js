import React, { useState } from "react";

import CornerDecor from "../UI/CornerDecor/CornerDecor";

import styles from "../../styles/Dashboard/Upload.module.scss";

function Upload() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <div className={styles.profile}>
        <CornerDecor />
        <div className={styles.imgBox}>
          <img className={styles.img} src="/img/Dashboard/ali.png" alt="" />
          <div className={styles.icon}>
            {selectedImage && (
              <div className={styles.imgContainer}>
                <img
                  className={styles.changedImg}
                  alt="not fount"
                  width={"250px"}
                  src={URL.createObjectURL(selectedImage)}
                />
                <br />
              </div>
            )}

            <input
              type="file"
              name="myImage"
              onChange={(event) => {
                setSelectedImage(event.target.files[0]);
              }}
            />
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.3333 16.0025C25.2782 16.0025 27.1435 16.7751 28.5187 18.1504C29.894 19.5257 30.6666 21.3909 30.6666 23.3358C30.6666 25.2808 29.894 27.146 28.5187 28.5213C27.1435 29.8966 25.2782 30.6692 23.3333 30.6692C21.3884 30.6692 19.5231 29.8966 18.1478 28.5213C16.7726 27.146 16 25.2808 16 23.3358C16 21.3909 16.7726 19.5257 18.1478 18.1504C19.5231 16.7751 21.3884 16.0025 23.3333 16.0025V16.0025ZM23.3333 18.6692L23.2133 18.6798C23.0801 18.7042 22.9574 18.7685 22.8617 18.8643C22.766 18.96 22.7016 19.0826 22.6773 19.2158L22.6666 19.3358V22.6692H19.3306L19.2106 22.6812C19.0774 22.7055 18.9548 22.7698 18.859 22.8656C18.7633 22.9613 18.699 23.084 18.6746 23.2172L18.664 23.3372L18.6746 23.4572C18.699 23.5904 18.7633 23.713 18.859 23.8088C18.9548 23.9045 19.0774 23.9688 19.2106 23.9932L19.3306 24.0038H22.6666V27.3412L22.6773 27.4612C22.7016 27.5944 22.766 27.717 22.8617 27.8128C22.9574 27.9085 23.0801 27.9728 23.2133 27.9972L23.3333 28.0078L23.4533 27.9972C23.5865 27.9728 23.7091 27.9085 23.8049 27.8128C23.9006 27.717 23.965 27.5944 23.9893 27.4612L24 27.3412V24.0025H27.3386L27.4586 23.9932C27.5918 23.9688 27.7145 23.9045 27.8102 23.8088C27.906 23.713 27.9703 23.5904 27.9946 23.4572L28.0053 23.3372L27.9946 23.2172C27.9702 23.0838 27.9057 22.961 27.8097 22.8652C27.7137 22.7695 27.5907 22.7053 27.4573 22.6812L27.3373 22.6705H24V19.3372L23.9893 19.2172C23.9652 19.0837 23.901 18.9608 23.8052 18.8648C23.7095 18.7688 23.5867 18.7043 23.4533 18.6798L23.3333 18.6692ZM18.5666 3.34118C19.0894 3.34114 19.603 3.47768 20.0567 3.73727C20.5104 3.99687 20.8884 4.37051 21.1533 4.82118L22.2386 6.67051H25C26.149 6.67051 27.251 7.12687 28.0636 7.93924C28.8762 8.75161 29.3329 9.85347 29.3333 11.0025V17.0825C28.7385 16.5115 28.0656 16.028 27.3346 15.6465L27.3333 11.0025C27.3333 10.3837 27.0875 9.79018 26.6499 9.35259C26.2123 8.91501 25.6188 8.66918 25 8.66918H21.6666C21.4923 8.66927 21.321 8.62379 21.1697 8.53725C21.0184 8.45072 20.8923 8.32613 20.804 8.17584L19.428 5.83318C19.3398 5.68309 19.2139 5.55862 19.0628 5.4721C18.9118 5.38557 18.7407 5.33998 18.5666 5.33984H13.496C13.35 5.33996 13.2059 5.37201 13.0737 5.43374C12.9415 5.49547 12.8244 5.58539 12.7306 5.69718L12.644 5.81718L11.1866 8.19184C11.0973 8.33761 10.972 8.45802 10.8229 8.54159C10.6737 8.62516 10.5056 8.66908 10.3346 8.66918H7.00129C6.69476 8.669 6.3912 8.72923 6.10796 8.84641C5.82471 8.96359 5.56733 9.13544 5.35051 9.35212C5.1337 9.56881 4.96171 9.82609 4.84437 10.1093C4.72702 10.3925 4.66663 10.696 4.66663 11.0025V23.6692C4.66663 24.9572 5.71196 26.0025 6.99996 26.0025H15.084C15.3146 26.7132 15.6333 27.3852 16.0293 28.0025H6.99996C5.85069 28.0025 4.74849 27.546 3.93583 26.7333C3.12317 25.9206 2.66663 24.8184 2.66663 23.6692V11.0025C2.66663 9.85324 3.12317 8.75104 3.93583 7.93838C4.74849 7.12572 5.85069 6.66918 6.99996 6.66918H9.77329L10.94 4.77051C11.2082 4.33347 11.584 3.97249 12.0315 3.72202C12.479 3.47156 12.9832 3.33998 13.496 3.33984H18.5666V3.34118ZM16 10.6692C17.2684 10.6691 18.5043 11.0708 19.5303 11.8168C20.5563 12.5627 21.3195 13.6145 21.7106 14.8212C21.044 14.9478 20.404 15.1505 19.8 15.4198C19.5045 14.5144 18.8955 13.7442 18.0827 13.2479C17.2699 12.7515 16.3066 12.5615 15.3662 12.7121C14.4258 12.8627 13.57 13.3441 12.9529 14.0695C12.3358 14.7949 11.9979 15.7168 12 16.6692C12 18.5758 13.3333 20.1692 15.1173 20.5718C14.9039 21.2055 14.7652 21.862 14.704 22.5278C13.2638 22.205 11.9931 21.3629 11.1347 20.1623C10.2763 18.9617 9.89043 17.4869 10.0508 16.0198C10.2111 14.5526 10.9065 13.196 12.004 12.2092C13.1015 11.2224 14.5241 10.6746 16 10.6705V10.6692Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
