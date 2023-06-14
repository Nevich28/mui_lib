import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { useState } from 'react';
export const MuiBottomNavigation = () => {
    const [value, setValue] = useState(0);
    console.log(value);
    return (
        <BottomNavigation
            sx={{ width: '100%', position: 'absolute', bottom: '0' }}
            value={value}
            onChange={(e, newValue) => setValue(newValue)}
            showLabels>
            <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} />
            <BottomNavigationAction label="Favorite" icon={<FavoriteBorderOutlinedIcon />} />
            <BottomNavigationAction label="Profile" icon={<Person2OutlinedIcon />} />
        </BottomNavigation>
    );
};
