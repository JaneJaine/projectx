import React from 'react';
import CustomButton from './CustomButton';




const MangelCard = ({ mangel: { id, type, status, username, usermail, user, description, image, location }, onClickBearbeitenFunction, setCardMangel, cardMangel, setShowOneCard , showOneCard}) => {

const editCard = () => {setCardMangel({...cardMangel,id:id, type:type, status:status, username:username, usermail:usermail, user:user, decription:description, image:image, location:location})
setShowOneCard(true)
console.log("EditCard läuft")
console.log(cardMangel)
console.log(showOneCard)
}
    return (
        <div className="mangelCard" key={id}>
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

export default MangelCard;
