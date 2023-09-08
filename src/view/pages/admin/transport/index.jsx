import { useEffect, useState } from 'react';
import './transport.scss'
import billAPI from 'api/billApi';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNotesMedical, faFilter, faCaretDown} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment/moment';
const Transport = () => {
  const [bills, setBills] = useState([]);
    
    useEffect(()=> {
        const getAllBill = async () => {
            const response = await billAPI.getAllBill();
            setBills(response.data.rows)
            
        }
        getAllBill();

    }, [])
    const handleChangeSelect = (e) => {
      const id = e.target.id;
      const status = {ship_status: e.target.value}
       
      if(e.target.id != null && e.target.value !== null){
        // console.log(id, status);
          const updateBill = async () => {
            try {
              const res = await billAPI.UpdateBillById(id, status);
              // console.log(res);
              
            } catch (error) {
              console.log(error);
            }
            
          }
          updateBill();
      }

    };


    return (
        <div className='transport-wrapper'>
          <div className='transport-header'>
            <FontAwesomeIcon icon={faNotesMedical} className='icon_header' />
            <h3>Thông tin đơn hàng</h3>
            <FontAwesomeIcon icon={faFilter}  className='icon_header'/>
          </div>
          <div className='transport-content'>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Người đặt hàng</th>
                  <th>Số điện thoại</th>
                  <th>Ngày đặt hàng  <FontAwesomeIcon icon={faCaretDown} /></th>
                  <th>Đơn vị vận chuyển</th>
                  <th>Trạng thái đơn hàng</th>
                </tr>
              </thead>
              <tbody>
                {bills && bills.map((bill) => {
                  console.log(bill);
                  return (
                    <>
                      <tr>
                        <td><FontAwesomeIcon icon={faCaretDown} /></td>
                        <td>{bill.User.name}</td>
                        <td>{bill.User.telephone}</td>
                        <td>{moment(bill.createdAt).format('HH:mm:ss DD/MM/YYYY')}</td>
                        <td>{bill.transport_method}</td>
                        <td>  
                          <select defaultValue={bill.ship_status} id={bill.id} onChange={handleChangeSelect}>
                            <option value="Đang chuẩn bị hàng">Đang chuẩn bị hàng</option>
                            <option value="Đang vận chuyển">Đang vận chuyển</option>
                            <option value="Đang giao hàng">Đang giao hàng</option>
                            <option value="Giao hàng thành công">Giao hàng thành công</option>
                            <option value="Giao hàng thất bại">Giao hàng thất bại</option>
                          </select>
                        </td>
                      </tr>
                      {/* <tr >
                      <thead>
                          <tr>
                            <th>Tên sản phẩm</th>
                            <th>Phân loại</th>
                            <th>Số lượng</th>
                          </tr>
                        </thead>
                        <tbody>
                           
                        </tbody>
                      </tr> */}
                    </>
                    
                    
                  )
                })}
              </tbody>
              
            </table>
          </div>
        </div>
    )
}

export default Transport;