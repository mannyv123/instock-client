import './WarehouseInfo.scss';

function WarehouseInfo() {
     return (
          <section className='warehouse-info'>
               <div className='warehouse-info__address'>
                    <h3 className='warehouse-info__address--title'>Warehouse Address:</h3>
                    <p className='warehouse-info__address--text'>33 Pearl Street SW, Washington, USA</p>
               </div>
               <div className='warehouse-row'>
                    <div className='warehouse-row__contact'>
                         <h4 className='warehouse-row__contact--title'>Contact Name:</h4>
                         <p className='warehouse-row__contact--text'>
                              Graeme Lyon
                              <br />
                              Warehouse Manager
                         </p>
                    </div>
                    <div className='warehouse-row__contact'>
                         <h4 className='warehouse-row__contact--title'>Contact information:</h4>
                         <p className='warehouse-row__contact--text'>
                              +1 (647) 504-0911
                              <br />
                              glyon@instock.com
                         </p>
                    </div>
               </div>
          </section>
     );
}

export default WarehouseInfo;
