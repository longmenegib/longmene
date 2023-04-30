import { Button } from 'react-bootstrap';
import SpeedDial from '../components/speeddial';
import MenuCustom from '../components/menu';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="App">
      <div class="bg-image"></div>
      
      <div class="bg-text">
        <span className='bg-title'>Hi ! I’m <span className='name'>Gibril.</span></span>
        <p className='bg-role'>I'm a Frontend Developer based in Yaounde, Cameroon.</p>
        <Link to={'/about'}><Button className='button'>More about me</Button></Link>
      </div>
      <SpeedDial />
      <div className='contact container'>
        <span>Let's work together</span>
        <span className='name'>gibrillongmene@gmail.com</span>
        <span>+237 652 256 452</span>
      </div>
      <MenuCustom />
    </div>
  );
}

export default Home;
