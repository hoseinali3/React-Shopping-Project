import React from 'react'
import { Button, FormControl, TextField } from '@mui/material';
import './CommentForm.css'
export default function CommentForm({title,label}) {
    return (
        <FormControl className="addcomment-form">
            <span className='addcomment-title'>{title}</span>
            <TextField id="standard-basic" required fullWidth label="نام" variant="standard" />
            <TextField id="standard-basic" required fullWidth label="ایمیل" variant="standard" />
            <TextField id="standard-basic" fullWidth label="شماره تماس" variant="standard" />
            <TextField
                id="standard-multiline-static"
                label={label + " شما"}
                multiline
                rows={4}

                variant="standard"

            />
            <Button className="prod-detail-opinion-addcommentbtn">
                ارسال {label}
            </Button>
        </FormControl>
    )
}
