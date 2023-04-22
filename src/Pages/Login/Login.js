import { useEffect, useState } from 'react'
import './Login.css'
import { Button } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import InputBox from '../../Components/Forms/InputBox/InputBox';
import loginIcon from '../../images/illustrations/Login-bro.svg'
import PersonIcon from '@mui/icons-material/Person';
import CaptchaCode from '../../Components/CaptchaCode/CaptchaCode';
import { useSnackbar } from 'notistack';

export default function Login() {


    const [userNameError, setUserNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [userNameValue, setUserNameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const [captchaNum, setCaptchaNum] = useState(null)
    const [inputCaptchaCode, setInputCaptchacode] = useState('')
    const handleClickShowPassword = () => setShowPassword(show => !show);

    const [userNameData, setUserNameData] = useState(null)
    const [passwordData, setPasswordData] = useState(null)
    const [helperTextUserName, setHelperTextUserName] = useState('')
    const [helperTextPassword, setHelperTextPassword] = useState('')

    useEffect(() => {
        setUserNameData(localStorage.getItem("userName"))
        setPasswordData(localStorage.getItem("password"))
    }, [])



    useEffect(() => {

        setInterval(() => {
            setUserNameError(false)
            setPasswordError(false)
            setHelperTextUserName("")
            setHelperTextPassword("")
        }, 10000);

    }, [
        userNameError,
        passwordError
    ])



    useEffect(() => {

        userNameValue && setUserNameError(false)
        passwordValue && setPasswordError(false)
        userNameValue && setHelperTextUserName("")
        passwordValue && setHelperTextPassword("")

    }, [
        userNameValue,
        passwordValue
    ])


    const loginValidation = () => {


        passwordValue !== passwordData ? enqueueSnackbar('رمزعبور صحیح نیست!', { variant: "error", autoHideDuration: 4000 }) : setPasswordError(false)
        userNameValue !== userNameData ? enqueueSnackbar('نام کاربری صحیح نیست!', { variant: "error", autoHideDuration: 4000 }) : setUserNameError(false)

      

        if (userNameValue === userNameData && passwordValue === passwordData && captchaNum === +inputCaptchaCode) {
            enqueueSnackbar('شما با موفقیت وارد شدید!', { variant: "success", autoHideDuration: 4000 })
            setInputCaptchacode('')
            localStorage.setItem('isLogin', true);
            setInterval(() => {
                window.location.href = "/React-Shopping-Project"
               
            }, 3000);
        }
    }


    return (
        <div className='background-body'>
            <div className='container'>
                <div className="login-form-wrapper">
                    <div className="login-form-header">
                        <h3>فرم ورود به شاپینگ کالا</h3>
                        <div className="reg-btn-no-account">
                            <span>حساب کاربری ندارید؟ همین حالا ثبت نام کنید:</span>
                            <Link to='/React-Shopping-Project/register' className='reg-btn-no-account-btn'>ثبت نام</Link>
                        </div>
                    </div>
                    <img className='login-icon' src={loginIcon} alt="" />
                    <div className="login-form-inputs">
                        <InputBox
                            id="userName"
                            name="userName"
                            label="نام کاربری"
                            type="text"
                            icon={<PersonIcon />}
                            changeHandler={event => setUserNameValue(event.target.value)}
                            value={userNameValue}
                            
                        />
                        <InputBox
                            id="password"
                            name="password"
                            label="رمزعبور"
                            type={showPassword ? 'text' : 'password'}
                            icon={showPassword ? <VisibilityOff /> : <Visibility />}
                            changeHandler={event => setPasswordValue(event.target.value)}
                            value={passwordValue}
                            handleClickShowPassword={handleClickShowPassword}
                           
                        />

                        <Link className='forget-password' to='#'>رمزعبور خود را فراموش کرده‌اید؟</Link>
                    </div>
                    <CaptchaCode
                        captchaNum={captchaNum}
                        setCaptchaNum={setCaptchaNum}
                        inputCaptchaCode={inputCaptchaCode}
                        setInputCaptchacode={setInputCaptchacode}
                    />
                    <Button onClick={loginValidation} className="login-form-btn">

                        ورود به سایت

                    </Button>
                </div>
            </div>
        </div>
    )
}
