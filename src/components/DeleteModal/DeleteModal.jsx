//--------------------Manjot Code Start----------------------
import "./DeleteModal.scss";
import closeIcon from "../../assets/icons/close-24px.svg";
import axios from "axios";
import { apiUrl } from "../../App";
import { useParams } from "react-router-dom";

function DeleteModal({ setIsOpen, item, getItems, apiPath, type, typePlural }) {
    const { id } = useParams();
    const handleDelete = () => {
        axios
            .delete(`${apiUrl}${apiPath}/${item.id}`)
            .then(() => {
                setIsOpen(false);
                if (id) {
                    getItems(id);
                } else {
                    getItems();
                }
                alert("Delete successful!");
            })
            .catch((error) => {
                console.error(error);
            });
    };

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
                            Delete {type === "warehouse" ? item.warehouse_name : item.item_name} {type}?
                        </h1>
                    </div>

                    <p className="modal__text">
                        Please confirm that you'd like to delete
                        {type === "warehouse" ? ` ${item.warehouse_name} ` : ` ${item.item_name} `}
                        from the list of
                        {` ${typePlural}`}. You won't be able to undo this action.
                    </p>
                    <div className="modal__actions">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="modal__button modal__button--cancel"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={handleDelete}
                            className="modal__button modal__button--delete"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;

//--------------------Manjot Code End----------------------
