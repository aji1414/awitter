import React, { useState } from "react";
import {storageService, dbService} from "fbase";
import {v4 as uuidv4} from "uuid";

const AweetStore = ({userObj}) => {

    const [aweet, setAweet] = useState("");
    const [attachment, setAttachment] = useState("");


    const onSubmit = async event => {
        event.preventDefault();

        let attachmentUrl = "";
        
        if(attachment !== ""){
            const attachmentRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
            const response = await attachmentRef.putString(attachment, "data_url")
            attachmentUrl = await response.ref.getDownloadURL();
        };

        const aweetObj = {
            text:aweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            attachmentUrl
        };

        await dbService.collection("aweets").add(aweetObj);
        setAweet("");
        setAttachment("");
    };

    const onChange = event => {
        const{target:{value}} = event;

        setAweet(value);
    }

    const onFileChange = event => {
        const {target:{files}} = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {currentTarget:{result}} = finishedEvent;
            setAttachment(result)
        }
        reader.readAsDataURL(theFile);
    }

    const onClearAttachmentClick = () => setAttachment(null) 

    return(
        <form onSubmit={onSubmit}>
            <input 
            type="text" 
            value={aweet}
            onChange={onChange}
            placeholder="What's on your mind"
            max={120}
            />
            <input type="file" accept="image/*" onChange={onFileChange} />
            <input type="submit" value="Aweet" />
            {attachment && 
                <div>
                    <img src={attachment} width="200px" height="200px" />
                    <button onClick={onClearAttachmentClick}>Clear</button>
                </div>
            }       
        </form>
    )
};

export default AweetStore;