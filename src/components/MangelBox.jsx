import React from 'react';
import CustomButton from './CustomButton';




const MangelBox = ({ mangel: { id, type, status, username, usermail, user, description, image, location }, onClickBearbeitenFunction, setCardMangel, cardMangel, setShowOneCard }) => {

    const showOneMangelFalse = () => {
        setShowOneCard(false)
        console.log("showOneMangelFalse läuft")
        console.log(cardMangel)
    }
    return (
        <div className='containerCard'>
            <div className="mangelBox" key={id}>
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
                </div>
            </div>
            <div>
                <CustomButton backgroundColor="#957DAD" color="#ffffff" buttonText="Zurück" onClickFunction={showOneMangelFalse} > </CustomButton>
            </div>
        </div>
    );
}

export default MangelBox;
