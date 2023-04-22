import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import Checkout from './Pages/Checkout/Checkout'
import ContactUs from './Pages/ContactUs/ContactUs'
import ShoppingBasket from './Pages/ShoppingBasket/ShoppingBasket'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import UserPanel from './Pages/UserPanel/UserPanel'
import Error404 from './Components/Error404/Error404'
import Orders from './Components/Orders/Orders'
import MyWallet from './Components/MyWallet/MyWallet'
import EditUser from './Components/EditUser/EditUser'
import AllTickets from './Components/AllTickets/AllTickets'
import NewTicket from './Components/NewTicket/NewTicket'



const Route = [
    {path:"React-Shopping-Project/",element:<Home/>},
    {path:"React-Shopping-Project/products",element:<Products/>},
    {path:"React-Shopping-Project/products/:productID",element:<ProductDetail/>},
    {path:"React-Shopping-Project/shoppingbasket",element:<ShoppingBasket/>},
    {path:"React-Shopping-Project/checkout",element:<Checkout/>},
    {path:"React-Shopping-Project/contactUs",element:<ContactUs/>},
    {path:"React-Shopping-Project/login",element:<Login/>},
    {path:"React-Shopping-Project/register",element:<Register/>},
    {path:"React-Shopping-Project/userpanel/*",element:<UserPanel/>,children:[
        {path:"orders",element: <Orders />},
        {path:"mywallet",element:<MyWallet/>},
        {path:"edituser",element:<EditUser/>},
        {path:"alltickets",element: <AllTickets />},
        {path:"newticket",element:<NewTicket/>}
        
    ]},
    {path:"React-Shopping-Project/*",element:<Error404/>},
]

export default Route