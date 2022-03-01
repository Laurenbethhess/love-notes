import React, { } from "react";
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Home() {
    return (
        <div>
            <div align='center'>
                <Box sx={{paddingTop: 12, width: '100%', maxWidth: 1200 }}>
                    <Typography style={{fontStyle: "italic", fontWeight: "bold", fontSize: 30, fontFamily: "Courier"}} align='center' variant="p" gutterBottom component="div">
                        Send love to your loved ones.
                    </Typography>
                </Box>
            </div>
            <div align='center'>
                <Box sx={{paddingTop: 1, width: '100%', maxWidth: 1200 }}>
                    <Typography>
                        <img className="home_photo"  src="https://ak.imgag.com/imgag/product/siteassets/general/3497315/image.jpg"/>
                    </Typography>
                </Box>
            </div>
            <div align='center'>
                <Box sx={{ width: '100%', maxWidth: 1200 }}>
                    <Typography style={{fontWeight: "bold", fontSize: 20, fontFamily: "Courier"}} align='center' variant="p" gutterBottom component="div">
                        Get started!
                    </Typography>
                </Box>
            </div>
            <div align='center'>
                <Box sx={{ width: '100%', maxWidth: 1200 }}>
                    <Typography style={{fontWeight: "bold", fontSize: 20, fontFamily: "Courier"}} align='center' variant="p" gutterBottom component="div">
                        <Link to="/new_card"><Button variant="outlined">Create</Button></Link>
                    </Typography>
                </Box>
            </div>
        </div>    
    )

}

export default Home