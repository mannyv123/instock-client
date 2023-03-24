import './SearchHeader.scss';

function SearchHeader() {
    return (
        <header className='warehouse-header'>
            <h1 className='warehouse-header__title'>Warehouses</h1>
            <form className='warehouse-header__form' action=''>
                <input className='warehouse-header__input' type='search' placeholder='Search...'></input>
                <button className='warehouse-header__button'>+ Add New Warehouse</button>
            </form>
        </header>
    );
}

export default SearchHeader;
