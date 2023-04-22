import React, { useEffect, useState } from 'react'
import './UserPanel.css'
import './UserPanel.scss'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { Link, Outlet } from 'react-router-dom';
import { orderData } from '../../Components/Orders/OrdersData';


export default function UserPanel() {

  const [value, setValue] = useState(0);
  const [pathName, setPathName] = useState(window.location.pathname)
  const [label, setLabel] = useState("")
  const [orders, setOrders] = useState(orderData)


  const handleChange = (event, newValue) => {
    setValue(newValue);


  };
  
  const StyledBadge1 = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        top: 5,
        backgroundColor: "var(--orange)",
        color: "var(--white)"
    },
}));
const StyledBadge2 = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        top: 5,
        backgroundColor: "var(--green)",
        color: "var(--white)"
    },
}));
const StyledBadge3 = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        top: 5,
        backgroundColor: "var(--blue)",
        color: "var(--white)"
    },
}));
const StyledBadge4 = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        top: 5,
        backgroundColor: "var(--darker-gray)",
        color: "var(--white)"
    },
}));


  useEffect(() => {
    setPathName(window.location.pathname)
  }, [pathName])
  return (

    <div className='background-body'>
      <div className="container">

        <div className="user-panel-wrapper">


          <div className="user-panel-tabs">
              <span>پنل کاربری</span>

            <Link to="/React-Shopping-Project/userpanel" onClick={() => setLabel("userpanel")} className={window.location.pathname.slice(-9) === "userpanel" ? "active" : null}>

              پیشخوان

            </Link>
            <Link to="orders" onClick={() => setLabel("orders")} className={window.location.pathname.slice(-6) === "orders" ? "active" : null}>

              سفارشات

            </Link>
            <Link to="mywallet" onClick={() => setLabel("mywallet")} className={window.location.pathname.slice(-8) === "mywallet" ? "active" : null}>

              کیف پول

            </Link>
            <Link to="edituser" onClick={() => setLabel("edituser")} className={window.location.pathname.slice(-8) === "edituser" ? "active" : null}>

              ویرایش حساب کاربری

            </Link>
            <Link to="alltickets" onClick={() => setLabel("alltickets")} className={window.location.pathname.slice(-10) === "alltickets" ? "active" : null}>

              تیکت ها

            </Link>

          </div>




          {window.location.pathname.slice(-9) === "userpanel" ? (
            <div className="user-panel-pishkhan">
              <p>از طریق پیشخوان حساب کاربری‌، می‌توانید سفارش‌های اخیر و اعتبار کیف پول را مشاهده کنید!</p>
              <div className="main-dashboard-body">
                <div className="main-dashboard-rightside">
                  <h4>سفارشات اخیر:</h4>
                  <ul className='dashboard-rightside-list'>
                    <li className="dashboard-rightside-listitem" style={{borderTop:"1px dashed var(--gray)"}}>
                      <span>شماره سفارش</span>
                      <span>تاریخ</span>
                      <span>وضعیت پرداخت</span>
                      <span>مجموع مبلغ</span>

                    </li>
                    {
                      orders.slice(0, 3).map(order => (

                        <li key={order.id} className='dashboard-rightside-listitem'>
                          <span>#{order.orderNumber}</span>
                          <span>{order.orderDate}</span>
                          <span><span className={`condition-${order.condition ? 'complete' : 'incomplete'}`}> {order.condition ? 'تکمیل شده' : 'درحال پرداخت'} </span></span>
                          <span>{Number(order.totalPrice).toLocaleString()} تومان</span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div className="main-dashboard-leftside">
                <div className="mywallet-money">
                <h4 className='mywallet-title'>اعتبار کیف پول:</h4>
                  <h4 className='mywallet-Validity'>{Number(254200).toLocaleString()} تومان</h4>

                </div>
                    <h4 className='alltickets-title'>تیکت ها:</h4>
                  <div className="alltickets-boxes ">
                    <div className="alltickets-box">
                        <StyledBadge1 badgeContent={4} variant="dot" overlap="circular" >
                            <MailOutlineIcon fontSize='large' />
                        </StyledBadge1>
                        <span>باز</span>
                        <span className='alltickets-nums' style={{ backgroundColor: "var(--orange)" }}>1</span>
                    </div>
                    <div className="alltickets-box">
                        <StyledBadge2 badgeContent="" variant="dot" color='warning' overlap="circular" >
                            <MailOutlineIcon  fontSize='large' />
                        </StyledBadge2>
                        <span>پاسخ داده شده</span>
                        <span className='alltickets-nums' style={{ backgroundColor: "var(--green)" }}>1</span>
                    </div>
                  
                </div>
                </div>
              </div>
            </div>
          ) : (
            <Outlet />
          )
          }




        </div>
      </div>
    </div>


  )
}
