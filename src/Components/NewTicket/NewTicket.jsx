import React, { useState } from 'react'
import './NewTicket.scss'
import { Button, FormControl, IconButton, InputLabel, MenuItem, Select } from '@mui/material'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Link } from 'react-router-dom';
export default function NewTicket() {

    const [priority, setPriority] = useState(null)
    const [department, setDepartment] = useState(null)

    return (
        <div className='newticket-wrapper'>
            <div className="newticket-header">
                <span>تیکت جدید:</span>
                <Link to="/React-Shopping-Project/userpanel/alltickets">
                    همه تیکت ها
                </Link>
            </div>
            <FormControl className='newticket-form'>
                <div className="newticket-form-header">
                    <input className='newticket-title' placeholder='عنوان تیکت...' type='text' />
                    <FormControl sx={{ m: 1, width: 130 }}>

                        <InputLabel id="newticket-priority">اولویت پیام</InputLabel>
                        <Select
                            labelId="newticket-priority"
                            id="newticket-priority"
                            value={priority}
                            label="اولویت پیام"
                            onChange={event => setPriority(event.target.value)}
                        >

                            <MenuItem value={1}>کم</MenuItem>
                            <MenuItem value={2}>متوسط</MenuItem>
                            <MenuItem value={3}>زیاد</MenuItem>


                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: 110 }}>

                        <InputLabel id="newticket-department">دپارتمان</InputLabel>
                        <Select
                            labelId="newticket-department"
                            id="newticket-department"
                            value={department}
                            label="دپارتمان"
                            onChange={event => setDepartment(event.target.value)}
                        >

                            <MenuItem value={1}>پشتیبانی</MenuItem>
                            <MenuItem value={2}>مالی</MenuItem>
                            <MenuItem value={3}>فروش</MenuItem>
                            <MenuItem value={4}>مدیریت</MenuItem>


                        </Select>
                    </FormControl>

                </div>
                <textarea className='newticket-textarea' placeholder='متن تیکت...' name="newticket-textarea1" id="newticket-textarea1" ></textarea>
                <div className="newticket-footer">

                    <IconButton color='primary' component="label">

                        <AddPhotoAlternateIcon />
                        <input type="file" hidden multiple />
                    </IconButton>
                    <IconButton component="label">
                        <AttachFileIcon />
                        <input type="file" hidden multiple />
                    </IconButton>

                    <Button className="newticket-sendbtn">
                        ارسال
                    </Button>
                </div>
            </FormControl>
        </div>
    )
}
