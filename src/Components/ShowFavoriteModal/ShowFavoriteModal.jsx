import React, { useEffect,useContext } from 'react'

import './ShowFavoriteModal.css'
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { FavContext } from '../Context/FavoriteContext';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ShowFavoriteModal({isShowModal, detailModalCancel}) {
 
    const FavState = useContext(FavContext)
    const dispatch2 = FavState.dispatch;
    const state2 = FavState.state;
    
    
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
                    {state2.map((fav,index) => (

                    <tr key={fav.id} className='modal-tbody-tr'>

                        <td className='modal-tbody-td'>{index + 1}</td>
                        <td className='modal-tbody-td'>{fav.title}</td>
                        <td className='modal-tbody-td'><IconButton color='error' onClick={() => dispatch2({type:"REMOVE",payload:fav})}><DeleteIcon/></IconButton></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    )
}
