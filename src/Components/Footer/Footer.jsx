import React from 'react'
import pic1 from '../../images/footer/delivery-truck.svg'
import pic2 from '../../images/footer/24-hours-support.svg'
import pic3 from '../../images/footer/easy-return.svg'
import pic4 from '../../images/footer/income.svg'
import pic5 from '../../images/footer/original.svg'
import pic6 from '../../images/footer/L-1.png'
import pic7 from '../../images/footer/L-2.png'


import './Footer.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-header">
                <div className="footer-header-item">
                    <img src={pic1} alt="" />
                    <div className="footer-header-item-titles">
                        <strong>تحویل اکسپرس</strong>
                        <span>در کمترین زمان</span>
                    </div>
                </div>
                <div className="footer-header-item">
                    <img src={pic2} alt="" />
                    <div className="footer-header-item-titles">
                        <strong>پشتیبانی 24 ساعته</strong>
                        <span>پشتیبانی هفت روز هفته</span>
                    </div>
                </div>
                <div className="footer-header-item">
                    <img src={pic3} alt="" />
                    <div className="footer-header-item-titles">
                        <strong>7 روز ضمانت بازگشت</strong>
                        <span>هفت روز مهلت دارید</span>
                    </div>
                </div>
                <div className="footer-header-item">
                    <img src={pic4} alt="" />
                    <div className="footer-header-item-titles">
                        <strong>پرداخت در محل</strong>
                        <span>در محل پرداخت کنید</span>
                    </div>
                </div>
                <div className="footer-header-item">
                    <img src={pic5} alt="" />
                    <div className="footer-header-item-titles">
                        <strong>ضمانت اصل بودن کالا</strong>
                        <span>تایید اصالت کالا</span>
                    </div>
                </div>
            </div>
            <div className="footer-middle">
                <div className="footer-middle-rightside">
                    <div className="footer-middle-rightside-col">
                        <span>با شاپینگ کالا</span>
                        <Link to="#">اتاق خبر کالا مارکت</Link>
                        <Link to="#">فروش در کالا مارکت</Link>
                        <Link to="#">همکاری با سازمان‌ها</Link>
                        <Link to="#">فرصت های شغلی</Link>
                    </div>
                    <div className="footer-middle-rightside-col">
                        <span>خدمات مشتریان</span>
                        <Link to="#">پاسخ به پرسش های متداول</Link>
                        <Link to="#">رویه‌های بازگرداندن کالا</Link>
                        <Link to="#">شرایط استفاده</Link>
                        <Link to="#">حریم خصوصی</Link>
                    </div>
                    <div className="footer-middle-rightside-col">
                        <span>راهنمای خرید از شاپینگ کالا</span>
                        <Link to="#">نحوه ثبت سفارش</Link>
                        <Link to="#">رویه ارسال سفارش</Link>
                        <Link to="#">شیوه‌های پرداخت</Link>
                    </div>
                </div>
                <div className="footer-middle-leftside">
                    <span className="footer-middle-leftside-title">با عضویت در خبرنامه از آخرین اخبار و محصولات سایت مطلع شوید...</span>
                    <div className="footer-middle-leftside-input">
                        <input type="email" placeholder='لطفا ایمیل خود را وارد نمایید...'/>
                        <Button type='submit'>ارسال</Button>
                    </div>
                </div>
            </div>
            <div className="footer-footer">
                <div className="footer-footer-rightside">
                    <span className='footer-footer-rightside-title'>فروشگاه اینترنتی شاپینگ کالا</span>
                    <span className='footer-footer-rightside-subtitle'>شاپینگ کالا به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی با بیش از یک دهه تجربه،
                         با پایبندی به سه اصل کلیدی، پرداخت در مح، 7 روز ضمانت بازگشت کالا و تضمین اصل بودن کالا، موفق شده تا همگام با فروشگاه‌های 
                         معتبر جهان، به بزرگترین فروشگاه اینترنتی ایران تبدیل شود. به محض ورود به دیجی اسمارت با یک سایت پر از کالا روبرو میشوید!
                         هر آنچه که نیاز دارید و به ذهن شما خطور میکند در اینجا پیدا خواهید کرد.</span>
                </div>
                <div className="footer-footer-middleside">
<span>تمامی حقوق مادی و معنوی این سایت متعلق به شاپینگ کالا می‌باشد!</span>
                </div>
                <div className="footer-footer-leftside">
                        <img src={pic6} alt="" />
                        <img src={pic7} alt="" />
                </div>
            </div>
        </div>
    )
}
