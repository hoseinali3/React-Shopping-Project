import React, { useState,useEffect } from 'react'
import { Button, Pagination } from '@mui/material'
import './Orders.css'
import { orderData } from './OrdersData'
import OrderDetailModal from '../OrderDetailModal/OrderDetailModal'
import PageinationComp from '../Pageination/PageinationComp'



export default function Orders() {

    const [isShowDetailModal, setIsShowDetailModal] = useState(false)
    
    const [orderDetail, setOrderDetail] = useState([])

    const [orders, setOrders] = useState(orderData)
    const [currentPage, setCurrentPage] = useState(1)
    const [currentOrders, setCurrentOrders] = useState([])

    let pageSize = 5;
    const pagesCount = Math.ceil(orders.length / pageSize)
    let pagesNumbers = Array.from(Array(pagesCount).keys())

  
    const activeNumHandler = (event, value) => {
        setCurrentPage(value);
    };

    let endIndex = pageSize * currentPage;
    let startIndex = endIndex - pageSize;
    let allShowOrder;

    useEffect(() => {

         allShowOrder = orders.slice(startIndex,endIndex);
        setCurrentOrders(allShowOrder)
    },[])

    useEffect(() => {

         allShowOrder = orders.slice(startIndex,endIndex);
        setCurrentOrders(allShowOrder)
    },[currentPage])

    return (
        <>
        <div className='orders-wrapper'>
            <table className='orders-table'>
                <thead className='orders-thead'>
                    <tr>
                        <th>شماره سفارش</th>
                        <th>تاریخ</th>
                        <th>وضعیت پرداخت</th>
                        <th>مجموع مبلغ</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody className='orders-tbody'>
                    {currentOrders.map(order => (
                        <tr key={order.id}>
                            <td className='orders-font'>#{order.orderNumber}</td>
                            <td  className='orders-font'>{order.orderDate}</td>
                            <td  className='orders-font'><span className={`condition-${order.condition ? 'complete' : 'incomplete'}`}> {order.condition ? 'تکمیل شده' : 'درحال پرداخت'} </span></td>
                            <td  className='orders-font'>{Number(order.totalPrice).toLocaleString()} تومان</td>
                            <td>
                                <Button className='show-detail-btn' onClick={() => (setIsShowDetailModal(true), setOrderDetail(order.orderDetail))}>
                                    نمایش
                                </Button>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>

            <PageinationComp pagesCount={pagesCount} currentPage={currentPage} activeNumHandler={activeNumHandler}/>
        </div>
        <OrderDetailModal isShowModal={isShowDetailModal} detailModalCancel={() => setIsShowDetailModal(false)} orderDetail={orderDetail} />
                    </>
    )
}
