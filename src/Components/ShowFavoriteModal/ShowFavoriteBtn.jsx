import React,{useState,useContext,useEffect} from 'react'
import './ShowFavoriteBtn.css'
import { IconButton, Tooltip } from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShowFavoriteModal from './ShowFavoriteModal';
import { FavContext } from '../Context/FavoriteContext';
export default function ShowFavoriteBtn() {
    const FavState = useContext(FavContext)
    const state2 = FavState.state;
    
    const [isShowModal,setIsShowModal] = useState(false)
  
    const detailModalCancel = () => {
        setIsShowModal(false)
    }
    useEffect(() => {
        if(!state2.length){
            detailModalCancel()
        }
    },[state2])

    return (
        <div className={`show-favorite-btn-wrapper ${state2.length ? "active" : null}`}>
             <Tooltip title="علاقه‌مندی‌ها" className='tooltip-title' placement='top' arrow>
            <IconButton className='show-favorite-btn' onClick={() => setIsShowModal(prev => !prev)}>
                <FavoriteBorderOutlinedIcon />
            </IconButton>

             </Tooltip>
            <ShowFavoriteModal isShowModal={isShowModal} detailModalCancel={detailModalCancel} />
        </div>
    )
}
