import React, { } from "react";
import { Link } from "react-router-dom";

function Nav( {user, onSetUser}) {

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                onSetUser(null);
            }
        });
    }

    return (
        <div className="bg-red-200 sticky top-0 z-50 py-6">
            <div className="flex justify-between text-lg font-mono font-semibold">
                <div className="px-2">
                    <p>Welcome to <i>LoveNotes</i> {user.first_name}!</p>
                </div>
                <div className="px-2 space-x-4 float-right ">
                    <Link to="/">Home</Link>
                    <Link to="/new_card">Create</Link>
                    <Link to="/my_cards">My Cards</Link>
                    <Link to="/logout" onClick={handleLogoutClick}>Logout</Link>
                </div>
            </div>
        </div>
    )
}

export default Nav