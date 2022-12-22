import { ContentCutOutlined } from '@mui/icons-material';
import React from 'react';
import CustomButton from './CustomButton';




const MangelCard = ({ mangel: { id, type, status, username, usermail, description, image, location }, setCardMangel, cardMangel, setShowOneCard, showOneCard }) => {

    const editCard = () => {
        setCardMangel({ ...cardMangel, id: id, type: type, status: status, username: username, usermail: usermail, description: description, image: image, location: location })
        setShowOneCard(true)
    }

    return (
        <div className="mangelCard" key={id}>
            <div>
                <p> {type} </p>
            </div>

            <div>
            {/* /Users/lucaisaak/projectx/src/components/images/${image} */}
                <img src={require(`../media/reportImages/${image}`)} />

            </div>

            <div>
        
                <h3> {description}</h3>
                <h3> {type}</h3>
                <h3> {status}</h3>
                <CustomButton backgroundColor="#957DAD" color="#ffffff" buttonText="Bearbeiten" onClickFunction={editCard} > </CustomButton>
            </div>
        </div>
    );
}

export default MangelCard;
