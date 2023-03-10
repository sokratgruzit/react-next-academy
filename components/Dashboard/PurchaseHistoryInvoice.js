
import styles from "../../styles/Dashboard/PurchaseHistoryInvoice.module.scss";

const PurchaseHistoryInvoice = ({ invoice }) => {
    const DUMMY_DATA = [
        {
            header: "General Details",
            content: [
            {
                title: "Day",
                value: "1"
            },
            {
                title: "Pay method",
                value: "wallet"
            },
            {
                title: "Company",
                value: "CORE Academy"
            },
            {
                title: "Status",
                value: "Paid"
            },
            {
                title: "Phone",
                value: "668576"
            },
            {
                title: "EMail",
                value: "iriev69@gmail.com"
            },
            {
                title: "Address",
                value: "59 Rustaveli Str."
            }]
        },
        {
            header: "Billed To",
            content: [
                {
                    title: "Name",
                    value: "bondo"
                },
                {
                    title: "Phone",
                    value: "968767"
                },
                {
                    title: "EMail",
                    value: "@tfhgd"
                },
                {
                    title: "Address",
                    value: "vake"
                }
            ]
        },
        {
            header: "Order List",
            content: [
                {
                    title: "Course name",
                    value: "js"
                },
                {
                    title: "Discount",
                    value: "0%"
                },
            ]
        }
    ];
    
    return (
        <>
            <div className={styles.options}>
                <div onClick={invoice}>
                    <svg className={styles.backBtn} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.2602 15.5287L9.74023 11.9987L13.2602 8.46875" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <p>Invoice #1002 </p>
                <div className={styles.invoiceButtons}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.83398 4.66536H11.1673V3.33203C11.1673 1.9987 10.6673 1.33203 9.16732 1.33203H6.83398C5.33398 1.33203 4.83398 1.9987 4.83398 3.33203V4.66536ZM10.6673 9.9987V12.6654C10.6673 13.9987 10.0007 14.6654 8.66732 14.6654H7.33398C6.00065 14.6654 5.33398 13.9987 5.33398 12.6654V9.9987H10.6673Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11.3333 10.0013H4.66667M4.66667 7.33464H6.66667M14 6.66797V10.0013C14 11.3346 13.3333 12.0013 12 12.0013H10.6667V10.0013H5.33333V12.0013H4C2.66667 12.0013 2 11.3346 2 10.0013V6.66797C2 5.33464 2.66667 4.66797 4 4.66797H12C13.3333 4.66797 14 5.33464 14 6.66797Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p>Print</p>
                </div>
                <div className={styles.invoiceButtons}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g mask="url(#mask0_9499_2994)">
                            <path d="M4.3945 12.7984C4.06431 12.7984 3.78255 12.6809 3.54922 12.4459C3.31589 12.2109 3.19922 11.9284 3.19922 11.5984V10.3984H4.39922V11.5984H11.5992V10.3984H12.7992V11.5984C12.7992 11.9284 12.6817 12.2109 12.4465 12.4459C12.2114 12.6809 11.9287 12.7984 11.5986 12.7984H4.3945ZM7.99922 10.3984L4.79922 7.19844L5.64922 6.34844L7.39922 8.09844V2.39844H8.59922V8.09844L10.3492 6.34844L11.1992 7.19844L7.99922 10.3984Z" fill="white"/>
                        </g>
                    </svg>
                    <p>Download</p>
                </div>
                <div className={styles.line}></div>
            </div>
            <div className={styles.invoiceWrapper}>
                {DUMMY_DATA.map((item, index) => {
                    return (
                        <div className={styles.invoiceContentWrapper} key={index}>
                            <div className={styles.invoiceHeader}>
                                {item.header}
                            </div>
                            <div className={styles.invoiceContent}>
                                {item.content.map((item, index) => {
                                    return (
                                        <div className={styles.invoiceContentItem} key={index}>
                                            <div className={styles.invoiceContentItemTitle}>{item.title}</div>
                                            <div className={styles.invoiceContentItemValue}>{item.value}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default PurchaseHistoryInvoice;