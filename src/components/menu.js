import { Article, AssignmentTurnedIn, ContentCopy, ContentCut, ContentPaste, Email, Home, Person } from '@mui/icons-material';
import { ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import { Spin as Hamburger } from 'hamburger-react'
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function MenuCustom() {
    const [isOpen, setOpen] = useState(false);

    const location = useLocation();

    return (
        <div style={{ position: 'absolute', top: 40, right: 40, zIndex: 100 }}>
            <div style={{ position: 'relative' }}>
                <div style={{ position: 'relative', zIndex: 20, backgroundColor: '#383838', width: 50, height: 50 }}>
                    <Hamburger size={20} toggled={isOpen} toggle={setOpen} color="#fff" />
                </div>
                <div
                    style={{
                        background: "#383838",
                        position: "fixed",
                        zIndex: 1,
                        right: 40,
                        top: 40,
                        height: 237,
                        width: 200,
                        opacity: !isOpen ? "0" : "1",
                        transition: "all .2s ease-in-out",
                        visibility: !isOpen ? "hidden" : "visible",
                    }}
                >
                    <MenuList sx={{marginTop: 1, color: '#fff'}}>
                        <MenuItem className='menuitem' style={{height: 49}}>
                            <NavLink className={(navData) => (navData.isActive ?  'menuitem d-flex w-100 h-100 align-items-center justify-content-center active' : 'menuitem d-flex w-100 h-100 align-items-center justify-content-center')} to="/">
                                <ListItemIcon>
                                    <Home fontSize="medium" sx={{color: location.pathname === '/' ? '#ffc107' : '#fff'}} />
                                </ListItemIcon>
                                <ListItemText>HOME</ListItemText>
                            </NavLink>
                        </MenuItem>
                        <MenuItem className='menuitem' style={{height: 49}}>
                            <NavLink className={(navData) => (navData.isActive ?  'menuitem d-flex w-100 h-100 align-items-center justify-content-center active' : 'menuitem d-flex w-100 h-100 align-items-center justify-content-center')} to="/about">
                                <ListItemIcon>
                                    <Person fontSize="medium" sx={{color: location.pathname ==='/about' ? '#ffc107' : '#fff'}} />
                                </ListItemIcon>
                                <ListItemText>ABOUT</ListItemText>
                            </NavLink>
                        </MenuItem>
                        {/* <MenuItem className='menuitem' style={{height: 49}}>
                            <NavLink className={(navData) => (navData.isActive ?  'menuitem d-flex w-100 h-100 align-items-center justify-content-center active' : 'menuitem d-flex w-100 h-100 align-items-center justify-content-center')} to="/portfolio">
                                <ListItemIcon>
                                    <AssignmentTurnedIn fontSize="medium" sx={{color: location.pathname ==='/portfolio' ? '#ffc107' : '#fff'}} />
                                </ListItemIcon>
                                <ListItemText>PORTFOLIO</ListItemText>
                            </NavLink>
                        </MenuItem> */}
                        <MenuItem className='menuitem' style={{height: 49}}>
                            <NavLink className={(navData) => (navData.isActive ?  'menuitem d-flex w-100 h-100 align-items-center justify-content-center active' : 'menuitem d-flex w-100 h-100 align-items-center justify-content-center')} to="/contact">
                                <ListItemIcon>
                                    <Email fontSize="medium" sx={{color: location.pathname ==='/contact' ? '#ffc107' : '#fff'}} />
                                </ListItemIcon>
                                <ListItemText>CONTACT</ListItemText>
                            </NavLink>
                        </MenuItem>
                        <MenuItem className='menuitem' style={{height: 49}}>
                            <NavLink className={(navData) => (navData.isActive ?  'menuitem d-flex w-100 h-100 align-items-center justify-content-center active' : 'menuitem d-flex w-100 h-100 align-items-center justify-content-center')} to="/blog">
                                <ListItemIcon>
                                    <Article fontSize="medium" sx={{color: location.pathname ==='/blog' ? '#ffc107' : '#fff'}} />
                                </ListItemIcon>
                                <ListItemText>BLOG</ListItemText>
                            </NavLink>
                        </MenuItem>
                    </MenuList>
                </div>
            </div>
        </div>

    )
}