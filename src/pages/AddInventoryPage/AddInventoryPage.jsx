import "./AddInventoryPage.scss";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";

function AddInventoryPage() {
    return (
        <section className="container">
            <section className="new-inventory">
                <div className="new-inventory__header">
                    <img className="new-inventory__back" src={arrowBack} alt="back arrow" />
                    <h1 className="new-inventory__title">Add New Inventory Item</h1>
                </div>
                <form action="submit" className="new-inventory__form">
                    <div className="new-inventory__item-details">
                        <h2 className="new-inventory__sub-header">Item Details</h2>
                        <label className="new-inventory__label" htmlFor="name">
                            Item Name
                        </label>
                        <input
                            className="new-inventory__input"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Item Name"
                        />
                        <label className="new-inventory__label" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            className="new-inventory__description"
                            name="description"
                            id="description"
                            placeholder="Please enter a brief description..."
                        ></textarea>
                        <label className="new-inventory__label" htmlFor="category">
                            Category
                        </label>
                        <select className="new-inventory__category" name="category" id="category">
                            <option value="">Please select</option>
                            <option value="accessories">Accessories</option>
                            <option value="electronics">Electronics</option>
                            <option value="gear">Gear</option>
                            <option value="health">Health</option>
                            <option value="apparel">Apparel</option>
                        </select>
                    </div>
                </form>
            </section>
        </section>
    );
}

export default AddInventoryPage;
