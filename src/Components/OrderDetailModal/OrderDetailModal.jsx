import React, { useEffect } from 'react'

import './OrderDetailModal.css'
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
export default function OrderDetailModal({isShowModal, detailModalCancel,orderDetail}) {
 
    useEffect(() => {
        const closeDetailModal = (event) => {

            if (event.key === "Escape") {

                detailModalCancel()
                window.removeEventListener("keydown", closeDetailModal)

            }
        };

        isShowModal && window.addEventListener("keydown", closeDetailModal)
    });
 
 
 
 
    return (
        <div className={isShowModal ? 'modalparent active' : 'modalparent'}>
        <div className="order-detail-container">
            <IconButton className='cancel-color-btn' onClick={() => detailModalCancel()} ><CloseIcon /></IconButton>
            <table className='modal-table'>
                <thead className='modal-thead'>
                    <tr className='modal-thead-tr'>

                        <th className='modal-thead-th'>شماره</th>
                        <th className='modal-thead-th'>نام محصول</th>
                        <th className='modal-thead-th'>قیمت</th>
                    </tr>
                </thead>
                <tbody className='modal-tbody'>
                    {orderDetail.map(order => (

                    <tr key={order.id} className='modal-tbody-tr'>

                        <td className='modal-tbody-td'>{order.id}</td>
                        <td className='modal-tbody-td'>{order.productName}</td>
                        <td className='modal-tbody-td eng-price-font'>{Number(order.price).toLocaleString()}<span> تومان</span></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    )
}
