import React, {  } from "react";
import Card from "./Card";

function UserCards( { cards, onCardDelete, onUpdateCard, user_id, onClick, handleSingleCard, singleCard }) {
    const userCards = cards.filter(card => card.user.id === user_id)
    const userRenderedCards = userCards.map(card => <Card card={card} key={card.id} onCardDelete={onCardDelete} onUpdateCard={onUpdateCard} user_id={user_id} onClick={onClick} handleSingleCard={handleSingleCard} singleCard={singleCard} />)

    return (
        <div align='center' style={{paddingTop: 100}}>
            {userRenderedCards}
        </div>
    )
}

export default UserCards