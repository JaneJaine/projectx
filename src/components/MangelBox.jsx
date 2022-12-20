import React from 'react';
import CustomButton from './CustomButton';




const MangelBox = ({ mangel: { id, type, status, username, usermail, user, description, image, location }, onClickBearbeitenFunction, setCardMangel, cardMangel, setShowOnecard }) => {

const editCard = () => {setCardMangel({...cardMangel,id:id, type:type, status:status, username:username, usermail:usermail, user:user, decription:description, image:image, location:location})
console.log("EditCard läuft")
console.log(cardMangel)
}
    return (
        <div className="mangel" key={id}>
            <div>
                <p> {type} </p>
            </div>

            <div>
                {/* <img src={require('/Users/lucaisaak/projectx/src/components/images/Frankfurt_Default_Image.jpeg')} /> */}

            </div>

            <div>
                <span> Status: {status}</span>
                <h3> {description}</h3>
                <h3> {location}</h3>
                <CustomButton backgroundColor="#957DAD" color="#ffffff" buttonText="Bearbeiten" onClickFunction={editCard} > </CustomButton>
            </div>
        </div>
    );
}

export default MangelBox;
