import './leftSide.css';
import instagramLogo from '../assets/instagramlogo.png';
import profile from '../assets/profile.png';
import { Add, EmailOutlined, Explore, FavoriteBorderOutlined, Gesture, Home, Menu, MusicVideo, Search } from '@mui/icons-material';

const LeftSide = () => {
    return (
        <div className="leftSidePart">
            <div className="logoPart">
                <img className='logoImg' src={instagramLogo} alt='Instagram'/>
            </div>
            <div className="navLinkPart">
                <div className="navLink">
                    <Home sx={{fontSize: "30px", margin:"0 20px 0 0"}}/>
                    <div className='navName'>Home</div>
                </div>
                <div className="navLink">
                    <Search sx={{fontSize: "30px", margin:"0 20px 0 0"}} />
                    <div className='navName'>Search</div>
                </div>
                <div className="navLink">
                    <Explore sx={{fontSize: "30px", margin:"0 20px 0 0"}} />
                    <div className='navName'>Explore</div>
                </div>
                <div className="navLink">
                    <MusicVideo sx={{fontSize: "30px", margin:"0 20px 0 0"}} />
                    <div className='navName'>Reels</div>
                </div>
                <div className="navLink">
                    <EmailOutlined sx={{fontSize: "30px", margin:"0 20px 0 0"}} />
                    <div className='navName'>Messages</div>
                </div>
                <div className="navLink">
                    <FavoriteBorderOutlined sx={{fontSize: "30px", margin:"0 20px 0 0"}} />
                    <div className='navName'>Notifications</div>
                </div>
                <div className="navLink">
                    <Add sx={{fontSize: "30px", margin:"0 20px 0 0"}} />
                    <div className='navName'>Create</div>
                </div>
                <div className="navLink">
                    <img className='profileImg' src={profile} alt='Profile Image'/>
                    <div className='navName'>Profile</div>
                </div>

                <div className="belowPart">
                    <div className="navLink">
                        <Gesture sx={{fontSize: "30px", margin:"0 20px 0 0"}} />
                        <div className='navName'>Thread</div>
                    </div>
                    <div className="navLink">
                        <Menu sx={{fontSize: "30px", margin:"0 20px 0 0"}} />
                        <div className='navName'>More</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSide