import React, { useEffect, useState } from 'react'
import './TicketDetailModal.css'
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function TicketDetailModal({ isShowModal, detailModalCancel, ticketDetail }) {

    const { id, title, user, condition, date, time, product, msg, reply } = ticketDetail;

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
            <div className="ticket-detail-wrapper">
                <IconButton className='cancel-color-btn' onClick={() => detailModalCancel()} ><CloseIcon /></IconButton>
                <div className="ticket-detail-body">
                    <h4>عنوان: {title}</h4>
                    <p>نام محصول : {product}</p>
                    <span>تاریخ ثبت تیکت : {date} - {time}</span>
                    <p >وضعیت : <span className={
                        condition === "باز" ? "orange-circle" :
                            condition === "پاسخ داده شده" ? "green-circle" :
                                condition === "بسته" ? "blue-circle" :
                                    null
                    }>
                        {condition}
                    </span></p>
                    <div className="ticket-detail-msgDetail">
                        <p>پیام :</p>
                        <div className="ticket-detail-msg">
                            <p>{msg}</p>
                        </div>
                    </div>
                    {reply ? (
                        <div className="ticket-detail-replyDetail">
                            <p>ادمین</p>
                            <p>تاریخ پاسخ : 1402/01/23</p>
                            <p>پاسخ :</p>
                            <div className="ticket-detail-reply">
                                <p>{reply}</p>
                            </div>
                        </div>
                    ) : (
                        null
                    )}
                </div>
            </div>
        </div>
    )

}
