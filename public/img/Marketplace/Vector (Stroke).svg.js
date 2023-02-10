import styles from "../../../styles/UI/Filter/Filter.module.scss";

const StrokeSvg = (props) => {
  return (
      <svg className={props.className}
        width="10"
        height="5"
        viewBox="0 0 10 5"
        xmlns="http://www.w3.org/2000/svg"
        fill='none'
        
        >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.209209 0.198521C0.488155 -0.0661736 0.940416 -0.0661736 1.21936 0.198521L4.7475 3.5464C4.88522 3.67709 5.11478 3.67709 5.2525 3.5464L8.78064 0.198521C9.05958 -0.0661736 9.51184 -0.0661736 9.79079 0.198521C10.0697 0.463215 10.0697 0.892369 9.79079 1.15706L6.26265 4.50495C5.56704 5.16502 4.43296 5.16502 3.73735 4.50495L0.209209 1.15706C-0.0697365 0.892369 -0.0697365 0.463215 0.209209 0.198521Z"
          fill= 'currentColor' 
          />
      </svg>
  );
};
export default StrokeSvg;
