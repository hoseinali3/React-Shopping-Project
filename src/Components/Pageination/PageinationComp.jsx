import React from 'react'
import './PageinationComp.css'
import { Pagination } from '@mui/material'




export default function PageinationComp({ pagesCount, currentPage, activeNumHandler }) {


    return (
        <div className="pageination-wrapper">
            <Pagination sx={{ direction: "ltr" }} count={pagesCount} page={currentPage} shape="rounded" onChange={activeNumHandler} />
        </div>
    )
}
