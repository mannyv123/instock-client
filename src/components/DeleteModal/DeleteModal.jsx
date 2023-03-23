//--------------------Manjot Code Start----------------------
import "./DeleteModal.scss";
import closeIcon from "../../assets/icons/close-24px.svg";

function DeleteModal({ setIsOpen }) {
    //test variables
    const location = "Washington";
    const type = "warehouse";
    const typePlural = "warehouses";

    return (
        <div className="modal">
            <div className="modal__bg" onClick={() => setIsOpen(false)}></div>
            <div className="modal__body">
                <img
                    className="modal__close"
                    src={closeIcon}
                    alt="close modal"
                    onClick={() => setIsOpen(false)}
                />
                <div className="modal__content">
                    <div className="modal__header">
                        <h1 className="modal__title">
                            Delete {location} {type}?
                        </h1>
                    </div>

                    <p className="modal__text">
                        Please confirm that you'd like to delete {location} from the list of
                        {` ${typePlural}`}. You won't be able to undo this action.
                    </p>
                    <div className="modal__actions">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="modal__button modal__button--cancel"
                        >
                            Cancel
                        </button>
                        <button className="modal__button modal__button--delete">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;

//--------------------Manjot Code End----------------------
