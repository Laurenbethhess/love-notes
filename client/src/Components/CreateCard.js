import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CardContent from '@mui/material/CardContent';

function CreateCard( {onAddCard, user_id}) {
    const [receiver, setReceiver] = useState("")
    const [salutation, setSalutation] = useState("")
    const [message, setMessage] = useState("")
    const [closing, setClosing] = useState("")
    const [user, setUserId] = useState(user_id)
    const [template_id, setTemplateId] = useState("")
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    function handleSubmit(e) {
      e.preventDefault()
  
      fetch("/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          receiver: receiver,
          salutation: salutation,
          message: message,
          closing: closing,
          user_id: user,
          template_id: template_id
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then(newCard => {
              onAddCard(newCard)
              setReceiver("")
              setSalutation("")
              setMessage("")
              setClosing("")
              setTemplateId("")
              setUserId(user_id)
              navigate('/my_cards');
            })
        } else {
          r.json().then((err) => setErrors(err.errors));  
        }
      });
    }
  
    return (
      <div align='center' style={{paddingTop: 65}}>
        <div className="rose_thumb">Roses are red</div>
        <div className="aqua_thumb">As cold as blue blazes</div>
        <div className="green_thumb">Green vibes only</div>
        <div className="yellow_thumb">I'm just mad about saffron</div>
          <CardContent style={{paddingTop: 80}}>
            <form onSubmit={handleSubmit}>
              <FormControl sx={{ minWidth: 275, bgcolor: '#cfe8fc' }}>
                <InputLabel align='center'>Choose Template</InputLabel>
                <Select
                    value={template_id}
                    label="Choose Template"
                    onChange={(e) => setTemplateId(e.target.value)}
                >
                    <MenuItem value={1}>Roses are red</MenuItem>
                    <MenuItem value={2}>As cold as blue blazes</MenuItem>
                    <MenuItem value={3}>Green vibes only</MenuItem>
                    <MenuItem value={4}>I'm just mad about saffron</MenuItem>
                </Select>
              </FormControl>
              <br/>
              <FormControl sx={{ minWidth: 275, bgcolor: '#cfe8fc' }}>
                <InputLabel align='center'>Choose Greeting</InputLabel>
                <Select
                    value={salutation}
                    label="Choose Greeting"
                    onChange={(e) => setSalutation(e.target.value)}
                >
                    <MenuItem value="Greetings">Greetings</MenuItem>
                    <MenuItem value="Hello">Hello</MenuItem>
                    <MenuItem value="Hi">Hi</MenuItem>
                    <MenuItem value="Dear">Dear</MenuItem>
                </Select>
              </FormControl>
              <br/>
              <Typography>
                  <TextField
                    sx={{bgcolor: '#cfe8fc' }}
                    multiline
                    variant="filled"
                    type="text"
                    name="to"
                    autoComplete="off"
                    value={receiver}
                    label="To"
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
                    label="Message"
                    onChange={(e) => setMessage(e.target.value)}
                  />                
              </Typography>
              <FormControl sx={{ minWidth: 275, bgcolor: '#cfe8fc' }}>
              <InputLabel align='center'>Choose Signature</InputLabel>
                <Select
                    value={closing}
                    label="Choose Signature"
                    onChange={(e) => setClosing(e.target.value)}
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
              </FormControl>
                <br/>
              <Button variant="outlined" type="submit">Submit</Button>
            </form>
            <div>
              {errors.map((err) => (
                <li key={err}>{err}</li>
              ))}
            </div>

          </CardContent>
        <br/>
    </div>
  )
}

export default CreateCard