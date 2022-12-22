import React from 'react';
import CustomButton from './CustomButton';
import { Typography } from '@mui/material';




const MangelCard = ({ mangel: { id, type, status, username, usermail, description, image, location }, setCardMangel, cardMangel, setShowOneCard, showOneCard }) => {
    //called when the user wants to edit the report
    //sets the report object to the one of the card that was clicked
    //sets the boolean varibale for the detail view true
    const editCard = () => {
        setCardMangel({ ...cardMangel, id: id, type: type, status: status, username: username, usermail: usermail, description: description, image: image, location: location })
        setShowOneCard(true)
    }
    return (
        <div className="mangelCard" key={id}>
            <div>
                <Typography variant='body1'> {type} </Typography>
            </div>
            <div>
                {/* /Users/lucaisaak/projectx/src/components/images/${image} */}
                <img src={require(`../media/reportImages/${image}`)} />
            </div>
            <div>
                <Typography variant='heading3'> {description}</Typography>
                <Typography variant='heading3'> {type}</Typography>
                <Typography variant='heading3'> {status}</Typography>
                <CustomButton backgroundColor="#957DAD" color="#ffffff" buttonText="Bearbeiten" onClickFunction={editCard} > </CustomButton>
            </div>
        </div>
    );
}

export default MangelCard;
