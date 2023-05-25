import styles from "../../../styles/UI/Input/Input.module.scss";

const Input = ({ data, type, onChange, errors }) => {
  return (
    <>
      {type === "input" ? (
        <>
          {data.map((item, index) => {
            return (
              <div className="custom-input" key={index}>
                <input
                  className={styles.customInput}
                  type={item.type}
                  placeholder={item.placeholder}
                  onChange={onChange}
                  name={item.name}
                />
                <label className={styles.labelTitle}>{item.label}</label>
              </div> 
            );
          })}
        </>
      ) : type === "textarea" ? (
        <div className={`${styles.customInputTextarea} custom-input`}>
          <textarea
            className={styles.customTextarea}
            placeholder={data.placeholder}
            type={data.type}
            name={data.name}
            onChange={onChange}
          />
          <label className={styles.labelTitle}>{data.label}</label>
        </div>
      ) : type === "inputWithIcon" ? (
        <>
          {data.map((item, index) => {
            return (
              <div className={styles.inputWithIcon} key={index}>
                {item.svg}
                <div className={styles.inputWrapp}>
                  <input
                    className={styles.customInput}
                    onChange={onChange}
                    type={item.type}
                    placeholder={item.placeholder}
                  />
                  <label className={styles.inputWithIconLabel}>
                    {item.label}
                  </label>
                </div>
              </div>
            );
          })}
        </>
      ) : type === "inputWithButton" ? (
        <div className={styles.inputWithButton}>
          <div className={styles.inputWrapp}>
            <input
              className={styles.customInput}
              type={data.type}
              placeholder={data.placeholder}
              onChange={data.onChange}
            />
            <label className={styles.inputWithIconLabel}>{data.label}</label>
          </div>
          <div className={styles.buttonInInput}>Join now</div>
        </div>
      ) : type === "error" ? (
        <>
          {data.map((item, index) => {
            return (
              <div className="custom-input" key={index}>
                <input
                  className={styles.customInput}
                  type={item.type}
                  placeholder={item.placeholder}
                  onChange={onChange}
                  name={item.name}
                />
                <label className={styles.labelTitle}>{item.label}</label>
                {errors[item.name] && <p className={styles.error}>{item.errorText}</p>}
              </div> 
            );
          })}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Input;
