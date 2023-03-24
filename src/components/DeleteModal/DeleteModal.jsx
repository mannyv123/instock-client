//--------------------Manjot Code Start----------------------
import "./DeleteModal.scss";
import closeIcon from "../../assets/icons/close-24px.svg";
import axios from "axios";

const API_URL = "http://localhost:5001/api";

function DeleteModal({ isOpen, setIsOpen, warehouse, warehouseId }) {
    const type = "warehouse";
    const typePlural = "warehouses";

    const handleWarehouseDelete = () => {
        console.log("DELETE");
        axios
            .delete(`${API_URL}/warehouses/${warehouseId}`)
            .then(() => {
                //reload the list of warehouses
                console.log(`Warehouse with ID ${warehouseId} successfully deleted`);
                setIsOpen(false);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    console.log(warehouse);

    return (
        <>
            {!isOpen ? (
                ""
            ) : (
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
                                    Delete {warehouse.warehouse_name} {type}?
                                </h1>
                            </div>

                            <p className="modal__text">
                                Please confirm that you'd like to delete {warehouse.warehouse_name} from the
                                list of
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
                                    onClick={handleWarehouseDelete}
                                    className="modal__button modal__button--delete"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default DeleteModal;

//--------------------Manjot Code End----------------------
