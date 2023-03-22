//--------------------Manjot Code Start----------------------
import "./DeleteModal.scss";

function DeleteModal({ setIsOpen }) {
    return (
        <div>
            <div className="modal__bg" onClick={() => setIsOpen(false)}></div>
            <div className="modal__body">
                <div className="modal__header">
                    <h1 className="modal__title">Delete</h1>
                </div>
                <button className="modal__close-btn" onClick={() => setIsOpen(false)}>
                    Close Icon
                </button>
                <p className="modal__content">Please confirm....</p>
                <div className="modal__actions">
                    <div className="modal__actions-container">
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
