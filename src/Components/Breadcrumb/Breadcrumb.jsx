import React from 'react'
import './Breadcrumb.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@mui/material';

export default function Breadcrumb({links}) {
    return (
        <div className='breadcrump-container'>
            <Breadcrumbs
                separator={<NavigateBeforeIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {
                    links.map(link => (
                        <Link key={link.id} to={`/${link.link}`} style={{color:link.color}}>
                            {link.title}
                        </Link>
                    ))
                }
            </Breadcrumbs>
        </div>
    )
}
