import React from 'react';
import CustomButton from './CustomButton';
import { Box, Stack } from "@mui/material";
import AdminFilter from '../components/AdminFilter';




const MangelBox = ({
    mangel: { id, type, status, username, usermail, user, description, image, location },
    onClickBearbeitenFunction, setCardMangel, cardMangel, setShowOneCard, selectedStatus,
    changeStatus }) => {

    const data = {}


    const changeStatusCall = () => {
        changeStatus()
    }

    const changeStatusBackend = () => {
        fetch(`localhost:8080/api/v1/damageReport/updateDamageReport/${id}`, {
            method: 'Put',
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

        console.log("changeStatusBackend war hier")
        console.log(selectedStatus)
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
                        <img src={require(`/Users/lucaisaak/projectx/src/components/images/${image}`)} />
                        {/* <img src={require('/Users/lucaisaak/projectx/src/components/images/Frankfurt_Default_Image.jpeg')} /> */}

                    </div>

                    <div>
                        <span> Status: {status}</span>
                        <h3> {description}</h3>
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
                        width: 150,
                        height: 220,
                        backgroundColor: '#BFD9F4',
                        p: 3,
                        m: 4,
                        alignItems: "center",
                        justifyContent: "center",
                        '&:hover': {
                            backgroundColor: '#D3E4F6',


                        },
                    }}
                >
                    <AdminFilter filterItems={["Alle", "Nicht bearbeitet", "In Bearbeitung", "Fertig"]}
                        dropDownName="Status Ändern"
                        defaultItem={status}
                        onChangeFunction={changeStatusCall} />

                    <CustomButton backgroundColor="#957DAD" color="#ffffff" marginTop="75px"
                        buttonText="Status setzen" onClickFunction={changeStatusBackend} />

                    <CustomButton backgroundColor="#957DAD" color="#ffffff" marginTop="5px"
                        buttonText="Meldung Löschen" onClickFunction={changeStatusBackend} />
                </Box>




            </div>
        </div>

    );
}

export default MangelBox;
