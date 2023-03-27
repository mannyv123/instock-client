import "./ErrorMsg.scss";
import errorIcon from "../../assets/icons/error-24px.svg";

//Error message rendered when field is invalid
function ErrorMsg({ isInvalidQuantity }) {
    return (
        <div className="error-msg">
            <div className="error-msg__main">
                <img className="error-msg__icon" src={errorIcon} alt="error" />
                <p>This field is required.</p>
            </div>
            {isInvalidQuantity && <p>This field cannot be less than zero or zero if in stock.</p>}
        </div>
    );
}

export default ErrorMsg;
