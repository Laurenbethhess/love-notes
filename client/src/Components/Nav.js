import React, { } from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function Nav( {user, onSetUser}) {

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                onSetUser(null);
            }
        });
    }

    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar align='center' position="fixed" style={{backgroundColor: "#FFFAEA"}}>
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontWeight: "bold", color: "black", fontFamily: "Courier"}}>
                Welcome, {user.first_name}!
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontWeight: "bold", color: "black", fontFamily: "Courier"}}>
                <Link to="/">Home</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontWeight: "bold", color: "black", fontFamily: "Courier"}}>
                <Link to="/new_card">Create</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontWeight: "bold", color: "black", fontFamily: "Courier"}}>
                <Link to="/my_cards">My Notes</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontWeight: "bold", color: "black", fontFamily: "Courier"}}>
                {user?
                    <Button variant="outlined" style={{color: "black", fontFamily: "Courier", fontWeight: "bold", fontSize: 20}} onClick={handleLogoutClick} color="inherit">Logout</Button>
                :
                    <Link to="/login">Login</Link>
                } 
            </Typography>
            </Toolbar>
        </AppBar>
    </Box>
        
    )
}

export default Nav