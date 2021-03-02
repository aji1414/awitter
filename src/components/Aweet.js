import { dbService } from "fbase";
import React, { useState } from "react";

const Aweet = ({aweetObj, isOwner}) => {

    const [editing, setEditing] = useState(false);
    const [newAweet, setNewAweet] = useState(aweetObj.text);

    const onDeleteClick = async() => {
        const ok = window.confirm("Are you sure you want to delete this aweet?");
        if(ok){
            // delete aweet
            await dbService.doc(`aweets/${aweetObj.id}`).delete();
        }
    };

    const toggleEditing = () => setEditing(prev => !prev);

    const onSubmit = async event => {
        event.preventDefault();
        await dbService.doc(`aweets/${aweetObj.id}`).update({
            text:newAweet
        })
        toggleEditing()
    }

    const onChange = event => {
        const {target: {value}} = event;
        setNewAweet(value);
    }

    return(
        
        <div>
            {editing 
                ? 
                <form onSubmit={onSubmit}>
                    <input
                    type="text"
                    placeholder={aweetObj.text} 
                    onChange={onChange}
                    value={newAweet} 
                    required 
                    />
                    <button onClick={toggleEditing}>Cancel</button> 
                    <input type="submit" value="Update Aweet" />
                </form> 
                : 
                <h4>
                    {aweetObj.text}
                    {isOwner && 
                        <>
                        <button onClick={onDeleteClick}>Delete Aweet</button>
                        <button onClick={toggleEditing}>Edit Aweet</button>
                        </>
                    }
                </h4>
            }
        </div>
    ) 
};

export default Aweet;