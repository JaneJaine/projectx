import React from 'react';
import CustomButton from './CustomButton';




const MangelCard = ({ mangel: { id, type, status, username, usermail, user, description, image, location }, onClickBearbeitenFunction }) => {


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
                <CustomButton backgroundColor="#957DAD" color="#ffffff" buttonText="Bearbeiten" onClickFunction={onClickBearbeitenFunction}> </CustomButton>
            </div>
        </div>
    );
}

export default MangelCard;
