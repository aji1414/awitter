import { dbService, storageService } from "fbase";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Aweet = ({aweetObj, isOwner}) => {

    const [editing, setEditing] = useState(false);
    const [newAweet, setNewAweet] = useState(aweetObj.text);

    const onDeleteClick = async() => {
        const ok = window.confirm("Are you sure you want to delete this aweet?");
        if(ok){
            // delete aweet
            await dbService.doc(`aweets/${aweetObj.id}`).delete();
            await storageService.refFromURL(aweetObj.attachmentUrl).delete();
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
        
        <div className="nweet">
            {editing 
                ? 
                <form onSubmit={onSubmit} className="container nweetEdit">
                    <input
                    type="text"
                    placeholder={aweetObj.text} 
                    onChange={onChange}
                    autoFocus
                    value={newAweet}
                    className="formInput" 
                    required 
                    />
                    <span onClick={toggleEditing} className="formBtn cancelBtn">
                        Cancel
                    </span> 
                    <input type="submit" value="Update Aweet" className="formBtn" />
                </form> 
                : 
                <>
                <h4>{aweetObj.text}</h4>
                    {aweetObj.attachmentUrl && <img src={aweetObj.attachmentUrl} />}
                    {isOwner && 
                        <>
                        <div class="nweet__actions">
                            <span onClick={onDeleteClick}>
                                <FontAwesomeIcon icon={faTrash} />
                            </span>
                            <span onClick={toggleEditing}>
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </span>
                        </div>
                        </>
                    }
                </>
            }
        </div>
    ) 
};

export default Aweet;