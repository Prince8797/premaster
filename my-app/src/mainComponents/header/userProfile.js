import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Box, Menu, MenuItem, Typography, styled } from '@mui/material';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/data-provider';

import './Header.css';

const ProfileMenuItems = styled(Typography)`
    // font-size:16px;
    // margin-left:2px;
    // font-weight:600;
`

export const UserProfile = ({ userInfo }) => {

    const { dispatch: ctxDispatch } = useContext(DataContext);

    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfileClick = () => {
        // navigate(`/user/${userInfo.firstname}`)
        setAnchorEl(null)
    }

    const logoutUser = () => {
        setAnchorEl(null);
        ctxDispatch({ type: 'USER_LOGOUT' });
        window.localStorage.clear();
        navigate("/");
    }

    return (
        <Box>
            <div className='accountCircle'>
                <div style={{ marginRight: 8 }} onClick={handleClick}>{userInfo.firstname}</div>
                <AccountCircleIcon onClick={handleClick} fontSize='large' />
            </div>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <div className='profileDialog'>
                    <MenuItem onClick={handleProfileClick}>
                        <ProfileMenuItems>
                            <Link to={'/myProfile'}>Profile</Link>
                        </ProfileMenuItems>
                    </MenuItem>
                    <MenuItem onClick={handleProfileClick}>
                        <Link to={'/myAccount'}>My Account</Link>
                    </MenuItem>
                    <MenuItem onClick={() => { handleClose(); logoutUser(); }}>
                        <PowerSettingsNewIcon color="primary" fontSize='small' />
                        <ProfileMenuItems>Logout</ProfileMenuItems>
                    </MenuItem>
                </div>
            </Menu>
        </Box>
    )
}

export default UserProfile;