import React from 'react';
import CustomButton from './CustomButton';
import { Box } from "@mui/material";
import AdminFilter from './AdminFilter';




const MangelBox = ({
    mangel: { id, type, status, username, usermail, description, image, location },
    onClickBearbeitenFunction, setCardMangel, cardMangel, setShowOneCard, selectedStatus,
    changeStatus }) => {

    const data = {
        id: id,
        type: type,
        status: selectedStatus,
        username: username,
        usermail: usermail,
        description: description,
        image: image,
        location: location
    }

    const changeStatusCall = (e) => {
        changeStatus(e)
    }

    const changeStatusBackend = () => {
        
        fetch(`http://localhost:8080/api/v1/damageReport/updateDamageReport/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error)
            })

        console.log('Description: '+description)
        console.log('usermail: ' +usermail)
    
    };
    const showOneMangelFalse = () => {
        setShowOneCard(false)
        console.log("showOneMangelFalse läuft")
        console.log(cardMangel)
        
    }
    return (

        <div className='containerCard'>
            <div className='container'>
                <div className="mangelBox" key={id}>
                    <div>
                        <p> {type} </p>
                    </div>

                <div>
                <img src={require(`../media/images/${image}`)}/>
                    {/* <img src={require('/Users/lucaisaak/projectx/src/components/images/Frankfurt_Default_Image.jpeg')} /> */}

                    </div>

                    <div>
                        <span> Status: {status}</span>
                        <h3> Description: {description}</h3>
                        <h3> {location}</h3>
                        <h3>{status}</h3>
                    </div>
                </div>
                <div>
                    <CustomButton backgroundColor="#957DAD"
                        color="#ffffff" buttonText="Zurück" onClickFunction={showOneMangelFalse} marginLeft="400px" marginTop="90px"> </CustomButton>
                </div>
            </div>
            <div>
            

                <Box
                    sx={{
                        borderRadius: "9px",
                        width: 180,
                        height: 170,
                        backgroundColor: '#BFD9F4',
                        p: 3,
                        m: 3,
                        alignItems: "center",
                        justifyContent: "center",
                        '&:hover': {
                            backgroundColor: '#D3E4F6',


                        },
                    }}
                >
                    <AdminFilter filterItems={["Nicht bearbeitet", "In Bearbeitung", "Fertig"]}
                        dropDownName="Status Ändern"
                        defaultItem={status}
                        onChangeFunction={changeStatusCall} 
                        marginLeft="20px"/>

                    <CustomButton backgroundColor="#957DAD" color="#ffffff" marginTop="25px"
                        buttonText="Status setzen" onClickFunction={changeStatusBackend} minWidth={170} marginLeft="4px"/>

                    <CustomButton backgroundColor="#957DAD" color="#ffffff" marginTop="5px"
                        buttonText="Meldung Löschen" onClickFunction={changeStatusBackend}minWidth={170} marginLeft="4px"/>
                </Box>
                




            </div>
        </div>

    );
}

export default MangelBox;
