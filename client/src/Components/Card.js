import React, { } from "react";
import EditCard from "./EditCard";
import { useNavigate } from 'react-router-dom';

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
            <div onClick={handleclick} className="flex justify-center">
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
            <p className="flex justify-center">click image to save</p>
            <div className="form_edit_rectangle">
                <EditCard onUpdateCard={onUpdateCard} card={card}/>
                <button className="bg-red-600 mt-4 p-1 font-semibold rounded-sm text-sm" onClick={handleDeleteClick}>Delete Card</button>
                <br/>
                <>__________________________________________________</>
                <br/><br/>
            </div>
        </div>
    )

}

export default Card