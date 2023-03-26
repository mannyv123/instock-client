import DetailsHeader from '../DetailsHeader/DetailsHeader';
import './DetailsBody.scss';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import { Link } from 'react-router-dom';
export const apiUrl = 'http://localhost:5005/api';

function DetailsBody() {
    return (
        <ul className='warehouse-details'>
            <DetailsHeader />
            <li className='warehouse-details__row'>
                <div className='warehouse-details__col warehouse-details__col--1' data-label='Warehouse'>
                    <Link className='warehouse-details__col--title'>Television</Link>
                </div>
                <div className='warehouse-details__col warehouse-details__col--2' data-label='Category'>
                    Electronics
                </div>
                <div className='warehouse-details__col warehouse-details__col--3' data-label='Status'>
                    <span className='warehouse-details__col--success'>In stock</span>
                </div>
                <div className='warehouse-details__col warehouse-details__col--4' data-label='Qty'>
                    500
                </div>
                <div className='warehouse-details__col warehouse-details__col--5' data-label='Actions'>
                    <button className='warehouse-details__col--btn'>
                        <img src={deleteIcon} alt='delete' />
                    </button>
                    <button className='warehouse-details__col--btn'>
                        <img src={editIcon} alt='edit' />
                    </button>
                </div>
            </li>
        </ul>
    );
}

export default DetailsBody;
