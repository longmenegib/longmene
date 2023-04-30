import { Email, Facebook, LinkedIn, LocationCity, Phone, Twitter, WhatsApp } from '@mui/icons-material'
import { Divider } from '@mui/material'
import React from 'react'
import { Button } from 'react-bootstrap'
import MenuCustom from '../components/menu'

export default function Contact() {
  return (
    <div className='base'>
        <span className='title'>Get <span className='name'>In Touch</span></span>
        <div className='container w-100'>
            <div className='row w-100'>
                <div className='col-12 col-md-4'>
                    <div className='w-96 contact-item'>
                        <div className='icon'><Email sx={{color: '#fff'}}/></div>
                        <span>gibrillongmene@gmail.com</span>
                    </div>
                </div>
                <div className='col-12 col-md-4'>
                    <div className='w-96 contact-item'>
                        <div className='icon'><Phone sx={{color: '#fff'}}/></div>
                        <span>+237 652 256 452</span>
                    </div>
                </div>
                <div className='col-12 col-md-4'>
                    <div className='w-96 contact-item'>
                        <div className='icon'><LocationCity sx={{color: '#fff'}}/></div>
                        <span>Yaounde, Cameroon</span>
                    </div>
                </div>
            </div>
            <Divider sx={{ width: 200, height: 2, backgroundColor: '#ffc107', margin: 'auto'}}/>
            <div className='row w-100' style={{marginTop: 40}}>
                <div className='col-12 col-md-5'>
                    <div className='w-95 contact-infos'>
                        <span className='head'>Send Me An Email</span>
                        <span className='body'>Feel free to get in touch with me. I am always open to discussing new projects or creative ideas.</span>
                        <div className='footer'>
                            <span className='footer-head'>My socials:</span>
                            <div className='footer-socials px-2 row'>
                                <div className='icon'><Facebook sx={{color: '#fff'}} fontSize="small"/></div>
                                <div className='icon'><LinkedIn sx={{color: '#fff'}} fontSize="small"/></div>
                                <div className='icon'><WhatsApp sx={{color: '#fff'}} fontSize="small"/></div>
                                <div className='icon'><Twitter sx={{color: '#fff'}} fontSize="small"/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-7'>
                    <div className='w-95'>
                        <div className='row'>
                            <div className='col-4 col-md-4'><input type="text" placeholder='YOUR NAME'/></div>
                            <div className='col-4 col-md-4'><input type="text" placeholder='YOUR EMAIL'/></div>
                            <div className='col-4 col-md-4'><input type="text" placeholder='SUBJECT'/></div>
                        </div>
                        <div className='row textarea'>
                            <div className='col-12'>
                                <textarea rows={6} className='w-100' placeholder='YOUR MESSAGE'></textarea>
                            </div>
                        </div>
                        <Button style={{marginTop: 10}} className='w-50 button'>Send</Button>
                    </div>
                </div>
            </div>
        </div>
        <MenuCustom />
    </div>
  )
}
