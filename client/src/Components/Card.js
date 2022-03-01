import React, { } from "react";
import EditCard from "./EditCard";
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Card( {card, onUpdateCard, onCardDelete, handleSingleCard}) {
    const navigate = useNavigate();

    function handleclick() {
        fetch(`/cards/${card.id}`)
        .then(r => r.json())
        .then(singleCard => handleSingleCard(singleCard))
        navigate('/single_card')
      }

    function handleDeleteClick() {
        fetch(`/cards/${card.id}`, {
          method: "DELETE",
        })
        onCardDelete(card.id)
    }

    return (
        <div>
            <div onClick={handleclick}>
            <div className={card.template.classname}>
                <div className="message_render">
                    <div>
                        <div>{card.salutation} {card.receiver},</div>
                        <br/>
                        <div>{card.message}</div>
                        <br/>
                        <div>{card.closing}</div>
                        <div>-{card.user.first_name}</div>
                    </div>
                </div>
            </div>
            </div>
            <Typography style={{fontWeight: "bold", fontSize: 20, fontFamily: "Courier"}} align='center' variant="p" gutterBottom component="div">
                Click Image to Save
            </Typography>
            <>---</>
            <Typography style={{fontWeight: "bold", fontSize: 20, fontFamily: "Courier"}} align='center' variant="p" gutterBottom component="div">
                Edit Note Below
            </Typography>
            <EditCard onUpdateCard={onUpdateCard} card={card}/>
            <Button variant="outlined" onClick={handleDeleteClick}>Delete Note</Button>
            <br/>
            <>__________________________________________________</>
            <br/><br/>
        </div>
    )
}

export default Card