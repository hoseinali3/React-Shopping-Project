import { useState, Fragment } from 'react';
import './Mobile-Menu.css';
import './Mobile-Menu.scss';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import NavbarDatas from '../NavbarDatas';
import { NavLink } from 'react-router-dom';
import { SwipeableDrawer } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

export default function MobileMenu() {
  const [open, setOpen] = useState(false)




  const list = (anchor) => (

    <List sx={{ width: 250, direction: "rtl" }} className="mobile-color">
      <CloseIcon sx={{ marginRight: 2, fontSize: 50, color: "#3a3a3a" }} onClick={() => setOpen(prev => !prev)} />
      {NavbarDatas.map((item, index) => (
        <div key={item.id}>
          <ListItem sx={{ padding: 0 }}  >

            {!item.submenu ? (<ListItemButton>


              <NavLink style={{ padding: "12px 0", color: "var(--bs-gray-700)" }} to={`/${item.link}`}>{item.title}</NavLink>


            </ListItemButton>) : (<Accordion sx={{ width: "100%", direction: "rtl" }} className="accordion">
              <ListItemButton className="mobile-li" >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{ width: "100%" }}
                >

                  <NavLink to={`/${item.link}`} style={{ color: "var(--bs-gray-700)" }}>{item.title}</NavLink>
                </AccordionSummary>
              </ListItemButton>
              {item.menus.map(menu => (

                <Accordion sx={{ width: "100%", direction: "rtl" }} className="accordion">
                  <ListItemButton >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{ width: "100%" }}
                    >


                      <NavLink to={`/${menu.link}`} style={{ color: "var(--bs-gray-700)" }}>{menu.header}</NavLink>

                    </AccordionSummary>
                  </ListItemButton>

                  <Divider className='devider' />
                  {
                    menu.prods.map(item => (
                      <>
                        <ListItemButton  sx={{backgroundColor:"var(--bs-gray-500)"}}>

                          <NavLink style={{ padding: "12px 0", color: "var(--bs-gray-700)" }} to={`/${item.link}`}>{item.title}</NavLink>

                        </ListItemButton>
                        <Divider className='devider' />
                      </>
                    ))
                  }

                </Accordion>

              ))}
            </Accordion>)}


          </ListItem>
          <Divider className='devider' />
        </div>
      ))}

    </List>

  );

  return (
    <div className='mobile-menu' >


      <div className="hamburger-menu" onClick={() => setOpen(prev => !prev)} >
        <div className="hamburger-menu-lines"></div>
      </div>


      <SwipeableDrawer
        anchor={"right"}
        open={open}
        onClose={() => setOpen(prev => !prev)}
        sx={{ direction: "ltr" }}
      >
        {list("right")}
      </SwipeableDrawer>






    </div>
  )
}


