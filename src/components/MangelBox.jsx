import React from 'react';
import CustomButton from './CustomButton';
import { Box } from "@mui/material";
import AdminFilter from './AdminFilter';




const MangelBox = ({
    mangel: { id, type, status, username, usermail, description, image, location },
    onClickBearbeitenFunction, setCardMangel, cardMangel, setShowOneCard, selectedStatus, resetFilter,
    changeStatus, searchAllDR }) => {

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
        searchAllDR()

        console.log('Description: ' + description)
        console.log('usermail: ' + usermail)

    };

    const zurueckButton =()=> {
        showOneMangelFalse()
        resetFilter()
    }

    const idDelete = "8fa212bb-1815-41c1-8a07-af47afbea1cc"

    const deleteReportById = () => {

        fetch(`http://localhost:8080/api/v1/damageReport/deleteDamageReportById/${id}`, {
            method: 'DELETE',
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
        searchAllDR()

        console.log('Description: ' + description)
        console.log('usermail: ' + usermail)

    };

    
    const showOneMangelFalse = () => {
        setShowOneCard(false)
        console.log("showOneMangelFalse l??uft")
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
                        color="#ffffff" buttonText="Zur??ck" onClickFunction={zurueckButton} marginLeft="400px" marginTop="90px"> </CustomButton>
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
                        dropDownName="Status ??ndern"
                        defaultItem={status}
                        onChangeFunction={changeStatusCall}
                        marginLeft="20px" />

                    <CustomButton backgroundColor="#957DAD" color="#ffffff" marginTop="25px"
                        buttonText="Status ??ndern" onClickFunction={changeStatusBackend} minWidth={170} marginLeft="4px" />

                    <CustomButton backgroundColor="#957DAD" color="#ffffff" marginTop="5px"
                        buttonText="Meldung L??schen" onClickFunction={deleteReportById} minWidth={170} marginLeft="4px" />
                </Box>





            </div>
        </div>

    );
}

export default MangelBox;
