import "./ErrorMsg.scss";
import errorIcon from "../../assets/icons/error-24px.svg";

//Error message rendered when field is invalid
function ErrorMsg() {
    return (
        <div className="error-msg">
            <img className="error-msg__icon" src={errorIcon} alt="error" />
            <p>This field is required</p>
        </div>
    );
}

export default ErrorMsg;
