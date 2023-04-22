import React, { useState, useEffect } from 'react'
import './AllTickets.css'
import './AllTickets.scss'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button, MenuItem, Select, colors } from '@mui/material';
import Badge from '@mui/material/Badge';
import { AllTicketsData } from './AllTicketsData';
import ErrorBox from '../ErrorBox/ErrorBox';
import PageinationComp from '../Pageination/PageinationComp';
import { styled } from '@mui/material/styles';
import TicketDetailModal from '../TicketDetailModal/TicketDetailModal';
import { Link } from 'react-router-dom';
export default function AllTickets({ goToNewTicket }) {

    const [filter1, setFilter1] = useState(1);
    const [filter2, setFilter2] = useState(1);

    const [allTicket, setAllTicket] = useState(AllTicketsData);
    const [currentPage, setCurrentPage] = useState(1)
    const [currentTickets, setCurrentTickets] = useState([])
    const [showTicketModal, setShowTicketModal] = useState(false)
    const [ticketDetail, setTicketDetail] = useState([])
    let filteredData = [...allTicket]
    
    
    
    let pageSize = 4;
    let pagesCount;
   
    


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

    const filterChange1 = (event) => {
        setFilter1(event.target.value);
    };
    const filterChange2 = (event) => {
        setFilter2(event.target.value);
    };




    const activeNumHandler = (event, value) => {
        setCurrentPage(value);
    };



    let endIndex = pageSize * currentPage;
    let startIndex = endIndex - pageSize;
    let allShowTicket;
   
    
    useEffect(() => {
      
        allShowTicket = allTicket.slice(startIndex, endIndex);
        setCurrentTickets(allShowTicket)
    }, [])


   
        const filteredHandler = () => {
    
            if (filter1 === 2) {
                filteredData = filteredData.filter(ticket => ticket.condition === "باز")
                
            } else if (filter1 === 3) {
    
                filteredData = filteredData.filter(ticket => ticket.condition === "پاسخ داده شده")
            } else if (filter1 === 4) {
    
                filteredData = filteredData.filter(ticket => ticket.condition === "بسته")
            }
          
            allShowTicket = filteredData.slice(startIndex, endIndex);
            
           
            return allShowTicket;
    
        }

    
   
        pagesCount = Math.ceil(AllTicketsData.length / pageSize)

    useEffect(() => {

        if(filteredData.length){
            pagesCount = Math.ceil(filteredData.length / pageSize)
            filteredHandler()
        } else {
            allShowTicket = AllTicketsData.slice(startIndex, endIndex);
        }
        setCurrentTickets(allShowTicket)
    }, [currentPage])




    const cancelTicketModal = () => {
        setShowTicketModal(false)
    }




    return (
        <>
            <div className='alltickets-wrapper'>
                <div className="alltickets-header">
                    <span>همه تیکت ها:</span>
                    <Link to="/React-Shopping-Project/userpanel/newticket">
                        

                        ارسال تیکت جدید
                     
                        </Link>
                </div>
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
                            <MailOutlineIcon fontSize='large' />
                        </StyledBadge2>
                        <span>پاسخ داده شده</span>
                        <span className='alltickets-nums' style={{ backgroundColor: "var(--green)" }}>1</span>
                    </div>
                    <div className="alltickets-box">
                        <StyledBadge3 badgeContent="" variant="dot" overlap="circular" >
                            <MailOutlineIcon fontSize='large' />
                        </StyledBadge3>
                        <span>بسته</span>
                        <span className='alltickets-nums' style={{ backgroundColor: "var(--blue)" }}>0</span>
                    </div>
                    <div className="alltickets-box">
                        <StyledBadge4 badgeContent="" variant="dot" overlap="circular">
                            <MailOutlineIcon fontSize='large' />
                        </StyledBadge4>
                        <span>همه</span>
                        <span className='alltickets-nums' style={{ backgroundColor: "var(--darker-gray)" }}>2</span>
                    </div>
                </div>

                <div className="alltickets-filters">
                    <span>فیلتر:</span>

                    <Select
                        labelId="filter1"
                        id="filter1"
                        value={filter1}
                        onChange={filterChange1}
                    >

                        <MenuItem value={1}>همه</MenuItem>
                        <MenuItem value={2}>باز</MenuItem>
                        <MenuItem value={3}>پاسخ داده شده</MenuItem>
                        <MenuItem value={4}>بسته</MenuItem>

                    </Select>
                    <Select
                        labelId="filter2"
                        id="filter2"
                        value={filter2}
                        onChange={filterChange2}
                    >

                        <MenuItem value={1}>تاریخ پاسخ</MenuItem>
                        <MenuItem value={2}>تاریخ ایجاد</MenuItem>

                    </Select>
                    <Button onClick={filteredHandler}>
                        اعمال
                    </Button>
                </div>
                <div className="alltickets-tickets">
                    <ul className="alltickets-tickets-list">
                        <li className="alltickets-tickets-listitem" style={{ borderTop: "1px dashed var(--gray)" }}>
                            <span>شماره</span>
                            <span>محصول</span>
                            <span>عنوان</span>
                            <span>وضعیت</span>
                            <span>تاریخ - ساعت</span>
                            <span> </span>

                        </li>
                        {allTicket ? (
                            currentTickets.map(ticket => (
                                <li key={ticket.id} className="alltickets-tickets-listitem">
                                    <span>{ticket.id}</span>
                                    <span>{ticket.product}</span>
                                    <span>{ticket.title}</span>
                                    <span><span className={
                                        ticket.condition === "باز" ? "orange-circle" :
                                            ticket.condition === "پاسخ داده شده" ? "green-circle" :
                                                ticket.condition === "بسته" ? "blue-circle" :
                                                    null
                                    }>{ticket.condition}</span></span>
                                    <span>{ticket.date} - {ticket.time}</span>
                                    <Button className='show-detail-btn' onClick={() => (setShowTicketModal(true), setTicketDetail(ticket))}>
                                        نمایش
                                    </Button>
                                </li>
                            ))
                        ) : (
                            <ErrorBox title="هیچ تیکتی نیست!" />
                        )}
                    </ul>
                </div>
                <PageinationComp pagesCount={pagesCount} currentPage={currentPage} activeNumHandler={activeNumHandler} />
            </div>
            <TicketDetailModal isShowModal={showTicketModal} detailModalCancel={cancelTicketModal} ticketDetail={ticketDetail} />
        </>
    )
}
