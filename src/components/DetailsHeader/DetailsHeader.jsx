import "./DetailsHeader.scss";

function DetailsHeader() {
  return (
    <li className="warehouse-details__header">
      <div className="warehouse-details__col warehouse-details__col--1">
        Inventory Item
        <button className="sort" onClick={() => {}}></button>
      </div>
      <div className="warehouse-details__col warehouse-details__col--2">
        Category
        <button className="sort" onClick={() => {}}></button>
      </div>
      <div className="warehouse-details__col warehouse-details__col--3">
        Status
        <button className="sort" onClick={() => {}}></button>
      </div>
      <div className="warehouse-details__col warehouse-details__col--4">
        Qty
        <button className="sort" onClick={() => {}}></button>
      </div>
      <div className="warehouse-details__col warehouse-details__col--5">
        Actions
      </div>
    </li>
  );
}

export default DetailsHeader;
