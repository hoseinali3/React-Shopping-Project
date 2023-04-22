import React,{useState,useEffect} from 'react'
import CachedIcon from '@mui/icons-material/Cached';
import './CaptchaCode.css'
import { TextField } from '@mui/material';
export default function CaptchaCode({
    captchaNum,
    setCaptchaNum,
    inputCaptchaCode,
    setInputCaptchacode
}) {

  
    const captchaHandler = () => {
        const randomNum = Math.round(Math.random() * 100000);
        setCaptchaNum(randomNum)
       
}


useEffect(() => {
    captchaHandler()
},[])



    return (
        <div className="captcha-code">
            <TextField id="standard-basic" type="number" label="کد را وارد کنید" variant="standard" onChange={event => setInputCaptchacode(event.target.value)} value={inputCaptchaCode}/>
            <span>{captchaNum}</span>
            <CachedIcon onClick={captchaHandler} sx={{cursor:"pointer"}} />
        </div>
    )
}
