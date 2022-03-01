import React, { useState } from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CardContent from '@mui/material/CardContent';

function EditCard( {onUpdateCard, card}) {
    const [receiver, setReceiver] = useState(card.receiver)
    const [message, setMessage] = useState(card.message)
    const [salutation, setSalutation] = useState(card.salutation)
    const [closing, setClosing] = useState(card.closing)
    const [errors, setErrors] = useState([]);

    function handleUpdateCard(updatedCard) {
        onUpdateCard(updatedCard)
      }

    function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`/cards/${card.id}`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        receiver: receiver,
        message: message,
        salutation: salutation,
        closing: closing,
        }),
    })
    .then((r) => {
        if (r.ok) {
          r.json().then(updatedCard => {
            handleUpdateCard(updatedCard)
            })
        } else {
          r.json().then((err) => setErrors(err.errors));  
        }
      })
    }

    return (
            <CardContent align='center'>
                <form onSubmit={handleFormSubmit}>
                    <Select
                        value={salutation}
                        label="Edit Greeting"
                        onChange={(e) => setSalutation(e.target.value)}
                        sx={{ minWidth: 275, bgcolor: '#cfe8fc' }}
                    >
                        <MenuItem value="Greetings">Greetings</MenuItem>
                        <MenuItem value="Hello">Hello</MenuItem>
                        <MenuItem value="Hi">Hi</MenuItem>
                        <MenuItem value="Dear">Dear</MenuItem>
                    </Select>
                <Typography>
                    <TextField
                        sx={{bgcolor: '#cfe8fc'}}
                        multiline
                        variant="filled"
                        type="text"
                        name="to"
                        autoComplete="off"
                        value={receiver}
                        onChange={(e) => setReceiver(e.target.value)}
                    />
                    <br/>
                    <TextField
                        sx={{bgcolor: '#cfe8fc' }}
                        multiline
                        variant="filled"
                        type="text"
                        name="message"
                        autoComplete="off"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />                
                </Typography>
                    <Select
                        value={closing}
                        label="Edit Signature"
                        onChange={(e) => setClosing(e.target.value)}
                        sx={{ minWidth: 275, bgcolor: '#cfe8fc' }}
                    >
                        <MenuItem value="Love,">Love</MenuItem>
                        <MenuItem value="Yours Truly,">Yours Truly</MenuItem>
                        <MenuItem value="Sincerely,">Sincerely</MenuItem>
                        <MenuItem value="Condolences,">Condolences</MenuItem>
                        <MenuItem value="Thinking of you,">Thinking of you</MenuItem>
                        <MenuItem value="Best,">Best</MenuItem>
                        <MenuItem value="Thanks!">Thanks!</MenuItem>
                        <MenuItem value="Thank you!">Thank you!</MenuItem>
                    </Select>
                    <br/>
                <Button variant="outlined" type="submit">Update</Button>
                </form>
                <div>
                {errors.map((err) => (
                    <li key={err}>{err}</li>
                ))}
                </div>
            </CardContent>
    )
}

export default EditCard