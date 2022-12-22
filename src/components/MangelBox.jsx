import React from 'react';
import CustomButton from './CustomButton';
import { Box, Typography } from "@mui/material";
import AdminFilter from './AdminFilter';
const MangelBox = ({
    mangel: { id, type, status, username, usermail, description, image, location }, setShowOneCard, selectedStatus,
    changeStatus, searchAllDR, authData }) => {
    //objects to save the new object, which is then send to the backend in the PUT request
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
    //sets the selected status
    const changeStatusCall = (e) => {
        changeStatus(e)
    }
    //sends the report object with the changed status to the backend
    const changeStatusBackend = () => {
        fetch(`http://localhost:8080/api/v1/damageReport/updateDamageReport/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'sessiontoken': authData.token,
                'usermail': authData.usermail
            },
            body: JSON.stringify(data)
        })
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error)
            })
        searchAllDR()
    };
    //sends the delete request to the backend
    const deleteReportById = () => {
        fetch(`http://localhost:8080/api/v1/damageReport/deleteDamageReportById/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'sessiontoken': authData.token,
                'usermail': authData.usermail,
            },
            body: JSON.stringify(data)
        })
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error)
            })
        searchAllDR()
    };
    //closes the single view
    const showOneMangelFalse = () => {
        setShowOneCard(false)
    }
    return (
        <div className='containerCard'>
            <div className='container'>
                <div className="mangelBox" key={id}>
                    <div>
                        <Typography variant='body1'> {type} </Typography>
                    </div>
                    <div>
                        <img src={require(`../media/reportImages/${image}`)} />
                    </div>
                    <div>
                        <span> Status: {status}</span>
                        <Typography variant='heading3'> Description: {description}</Typography>
                        <Typography variant='heading3'> {location}</Typography>
                        <Typography variant='heading3'>{status}</Typography>
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
                        height: 1,
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
                        marginLeft="20px" />

                    <CustomButton backgroundColor="#957DAD" color="#ffffff" marginTop="25px"
                        buttonText="Status ändern" onClickFunction={changeStatusBackend} minWidth={170} marginLeft="4px" />

                    <CustomButton backgroundColor="#957DAD" color="#ffffff" marginTop="5px"
                        buttonText="Meldung Löschen" onClickFunction={deleteReportById} minWidth={170} marginLeft="4px" />
                </Box>
            </div>
        </div>

    );
}

export default MangelBox;
