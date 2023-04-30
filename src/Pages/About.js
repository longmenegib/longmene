import { Facebook } from '@mui/icons-material'
import { Divider } from '@mui/material'
import React from 'react'
import MenuCustom from '../components/menu'
import profile from '../assets/profile.jpg'
import { Button } from 'react-bootstrap'
import LinearProgress from '@mui/material/LinearProgress';

export default function About() {
    return (
        <div className='base'>
            <span className='title'>About <span className='name'>Me</span></span>
            <div className='container w-100'>
                <div className='row w-100 align-items-center' style={{ marginTop: 40 }}>
                    <div className='col-12 col-md-4'>
                        <div className='w-95 profile-img'>
                            <img src={profile} width="100%" height={'450px'} />
                        </div>
                    </div>
                    <div className='col-12 col-md-8'>
                        <div className='w-100 about-infos'>
                            <span className='body'>
                                I'm Longmene Gibril, 22 years old Cameroonian based
                                front‑end developer living in Yaounde, focused on crafting clean,
                                creative and user‑friendly experiences,
                                I build beautiful and powerful websites and android applications.
                            </span>
                            <div className='footer row w-100'>
                                <div className='col-12 col-sm-6'>
                                    <div className='footer-item'>
                                        <div className='item-item'><Facebook color="red" /></div>
                                        <div className='item-item'>Birthday: </div>
                                        <div className='item-item bold'>January 2001</div>
                                    </div>
                                    <div className='footer-item'>
                                        <div className='item-item'><Facebook color="red" /></div>
                                        <div className='item-item'>Nationality: </div>
                                        <div className='item-item bold'>Cameroonian</div>
                                    </div>
                                    <div className='footer-item'>
                                        <div className='item-item'><Facebook color="red" /></div>
                                        <div className='item-item'>Experience: </div>
                                        <div className='item-item bold'>2 years</div>
                                    </div>
                                    
                                </div>
                                <div className='col-12 col-sm-6'>
                                    <div className='footer-item'>
                                        <div className='item-item'><Facebook color="red" /></div>
                                        <div className='item-item'>Phone: </div>
                                        <div className='item-item bold'>+237 652 256 452</div>
                                    </div>
                                    <div className='footer-item'>
                                        <div className='item-item'><Facebook color="red" /></div>
                                        <div className='item-item'>Address: </div>
                                        <div className='item-item bold'>Yaounde, CMR</div>
                                    </div>
                                    <div className='footer-item'>
                                        <div className='item-item'><Facebook color="red" /></div>
                                        <div className='item-item'>Email: </div>
                                        <div className='item-item bold'>gibrillongmene@gmail.com</div>
                                    </div>
                                </div>
                                <Button style={{marginTop: 10}} className='w-50 button'>Download MY CV</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='resume'>
                    <span className='title'>My Resume</span>
                    <div className='row w-100'>
                        <div className='col-12 col-md-4'>
                            <div className='w-96 resume-item'>
                                <div className='d-flex justify-content-between'>
                                    <div className='resume-title'>Web developer</div>
                                    <div className='year'>2019-2021</div>
                                </div>
                                <div>Freelancing</div>
                                <div className='object'>
                                    I'm Longmene Gibril, british based web designer and
                                    front‑end developer living in London focused
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-4'>
                        <div className='w-96 resume-item'>
                                <div className='d-flex justify-content-between'>
                                    <div className='resume-title'>Frontend developer</div>
                                    <div className='year'>2021-2022</div>
                                </div>
                                <div>Bivindi Technology</div>
                                <div className='object'>
                                    I'm Longmene Gibril, british based web designer and
                                    front‑end developer living in London focused
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-4'>
                        <div className='w-96 resume-item'>
                                <div className='d-flex justify-content-between'>
                                    <div className='resume-title'>Frontend developer</div>
                                    <div className='year'>2022-present</div>
                                </div>
                                <div>BeOne/Gateway</div>
                                <div className='object'>
                                    I'm Longmene Gibril, british based web designer and
                                    front‑end developer living in London focused
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='stats'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-sm-4 stats-item'>
                            <div className='icon'><Facebook sx={{color: '#fff'}} fontSize="large"/></div>
                            <div className='number'>02</div>
                            <div className='titre'>Years experience</div>
                        </div>
                        <div className='col-12 col-sm-4 stats-item'>
                            <div className='icon'><Facebook sx={{color: '#fff'}} fontSize="large"/></div>
                            <div className='number'>08</div>
                            <div className='titre'>Done projects</div>
                        </div>
                        <div className='col-12 col-sm-4 stats-item'>
                            <div className='icon'><Facebook sx={{color: '#fff'}} fontSize="large"/></div>
                            <div className='number'>05</div>
                            <div className='titre'>Side projects</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='skills'>
                <div className='container'>
                    <span className='title-skills'>My Skills</span>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <div className='skill-item'>
                                <div className='name'>HTML5</div>
                                <div><LinearProgress sx={{
                                    height: 8, 
                                    backgroundColor: '#383838', '& .MuiLinearProgress-bar': {
                                    backgroundColor: '#ffc107'
                                }}} 
                                value={90} 
                                variant="determinate"/></div>
                            </div>
                            <div className='skill-item'>
                                <div className='name'>CSS3</div>
                                <div><LinearProgress sx={{
                                    height: 8, 
                                    backgroundColor: '#383838', '& .MuiLinearProgress-bar': {
                                    backgroundColor: '#ffc107'
                                }}} 
                                value={90} 
                                variant="determinate"/></div>
                            </div>
                            <div className='skill-item'>
                                <div className='name'>JAVASCRIPT</div>
                                <div><LinearProgress sx={{
                                    height: 8, 
                                    backgroundColor: '#383838', '& .MuiLinearProgress-bar': {
                                    backgroundColor: '#ffc107'
                                }}} 
                                value={60} 
                                variant="determinate"/></div>
                            </div>
                            <div className='skill-item'>
                                <div className='name'>REACT</div>
                                <div><LinearProgress sx={{
                                    height: 8, 
                                    backgroundColor: '#383838', '& .MuiLinearProgress-bar': {
                                    backgroundColor: '#ffc107'
                                }}} 
                                value={80} 
                                variant="determinate"/></div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='skill-item'>
                                <div className='name'>REACT NATIVE</div>
                                <div><LinearProgress sx={{
                                    height: 8, 
                                    backgroundColor: '#383838', '& .MuiLinearProgress-bar': {
                                    backgroundColor: '#ffc107'
                                }}} 
                                value={90} 
                                variant="determinate"/></div>
                            </div>
                            <div className='skill-item'>
                                <div className='name'>PHP</div>
                                <div><LinearProgress sx={{
                                    height: 8, 
                                    backgroundColor: '#383838', '& .MuiLinearProgress-bar': {
                                    backgroundColor: '#ffc107'
                                }}} 
                                value={50} 
                                variant="determinate"/></div>
                            </div>
                            <div className='skill-item'>
                                <div className='name'>NODEJS</div>
                                <div><LinearProgress sx={{
                                    height: 8, 
                                    backgroundColor: '#383838', '& .MuiLinearProgress-bar': {
                                    backgroundColor: '#ffc107'
                                }}} 
                                value={70} 
                                variant="determinate"/></div>
                            </div>
                            <div className='skill-item'>
                                <div className='name'>GIT/GITHUB</div>
                                <div><LinearProgress sx={{
                                    height: 8, 
                                    backgroundColor: '#383838', '& .MuiLinearProgress-bar': {
                                    backgroundColor: '#ffc107'
                                }}} 
                                value={70} 
                                variant="determinate"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MenuCustom />
        </div>
    )
}
