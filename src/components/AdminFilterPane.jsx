import React, { useState } from "react";
import AdminFilter from '../components/AdminFilter';
import MangelCard from "./MangelCard";
import MangelBox from "./MangelBox";

import { Box, Stack } from "@mui/material";
import CustomButton from "./CustomButton";
import { useEffect } from "react";

export const AdminFilterPane = ({ authData }) => {
    //array of available report types, which can be selscted in the filter
    const typeArray = ["Alle", "Defekt", "Verschmutzung", "Parkverstoß", "Anderes"];
    //list of all report objects loaded from backend
    const [mangel, setMangel] = useState([]);
    //checks if option "Alle" is selected for either Type or status
    const [allTypeSelected, setAllTypeSelected] = useState(true)
    const [allStatusSelected, setAllStatusSelected] = useState(true)
    //sets the selected filter for either tape or status
    const [selectedType, setSelectedType] = useState();
    const [selectedStatus, setSelectedStatus] = useState();
    //sets the object for the report selected for detail view
    const [cardMangel, setCardMangel] = useState({ id: "", type: "", status: "", username: "", usermail: "", description: "", image: "", location: "" });
    //checks if detail view is selected 
    const [showOneCard, setShowOneCard] = useState(false)

    //on load of the admin view, all damage report objects are loaded
    useEffect(() => { searchAllDR(); }, []);
    //sends the GET request to the backend and saves the list of Json objects into the mangel object
    const searchAllDR = async () => {
        const response = await fetch('http://localhost:8080/api/v1/damageReport/getAllDamageReports', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'sessiontoken': authData.token,
                'usermail': authData.usermail,
            }
        });
        const data = await response.json();
        setMangel(data)
    }
    //if all filters are reset, a new GET request is send to the backend
    const resetFilter = () => {
        searchAllDR()
    };
    //changes the status field of the filter options
    const changeStatus = (e) => {
        if (e.target.value === "Alle") {
            setAllStatusSelected(true)
            searchAllDR()
        }
        if (e.target.value === "Nicht bearbeitet") {
            setAllStatusSelected(false)
            setSelectedStatus("Nicht bearbeitet")
        }
        if (e.target.value === "Fertig") {
            setSelectedStatus("Fertig")
            setAllStatusSelected(false)
        }
        if (e.target.value === "In Bearbeitung") {
            setSelectedStatus("In Bearbeitung")
            setAllStatusSelected(false)
        }
    }
    //changes the type field of the filter options
    const changeType = (e) => {
        if (e.target.value === "Alle") {
            searchAllDR()
            setAllTypeSelected(true)
        }
        if (e.target.value === "Defekt") {
            searchAllDR()
            setSelectedType("Defekt")
            setAllTypeSelected(false)
        }
        if (e.currentTarget.value === "Verschmutzung") {
            setSelectedType("Verschmutzung")
            setAllTypeSelected(false)
        }
        if (e.target.value === "Parkverstoß") {
            setSelectedType("Parkverstoß")
            setAllTypeSelected(false)
        }
        if (e.target.value === "Anderes") {
            setSelectedType("Anderes")
        }
    };
    //checks for the filter set and filters the mangel object accordingly
    const setFilter = () => {
        if (allStatusSelected === true && allTypeSelected === true) {
            searchAllDR()
        }
        else if (allStatusSelected !== true && allTypeSelected === true) {
            setMangel(mangel.filter((mangel) => mangel.status === selectedStatus))
        }
        else if (allStatusSelected === true && allTypeSelected !== true) {
            setMangel(mangel.filter((mangel) => mangel.type === selectedType))
        }
        else {
            setMangel(mangel.filter((mangel) => mangel.status === selectedStatus && mangel.type === selectedType))
        }
    };
    return (
        <React.Fragment>
            <Box sx=
                {{
                    backgroundColor: "#a7bed3",
                    display: 'flex'
                }}>

                <Box sx={{
                    backgroundColor: "#abc4ff",
                    minHeight: "80vh",
                    maxWidth: 400,
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2.5rem",
                    flex: "2",
                    flexDirection: 'column',
                    width: 300,
                    marginTop: 0,
                    marginLeft: 0,
                    rowGap: 1,
                    p: 9,
                    m: 0,
                }}> <Stack spacing={7}>
                        <Stack spacing={5}>
                            <h1 >Admin View </h1>
                            <AdminFilter filterItems={typeArray}
                                dropDownName="Mangelart"
                                defaultItem={selectedType}
                                onChangeFunction={changeType}
                            />
                            <AdminFilter filterItems={["Alle", "Nicht bearbeitet", "In Bearbeitung", "Fertig"]}
                                dropDownName="Status"
                                defaultItem={selectedStatus}
                                onChangeFunction={changeStatus} />
                            {/* <SearchBarAsynchronous onChangeFunction={setSelectedPlz} /> */}
                        </Stack>
                        <Stack spacing={1}>
                            <CustomButton backgroundColor="#152238" color="#ffffff" buttonText="Filter" onClickFunction={setFilter} />
                            <CustomButton backgroundColor="#957DAD" color="#ffffff" buttonText="Rückgängig" onClickFunction={resetFilter} />
                        </Stack>

                    </Stack>
                    <CustomButton backgroundColor="#957DAD" color="#ffffff" buttonText="Neu Laden" onClickFunction={resetFilter} width="130px" marginLeft="130px" marginTop="20px" />
                </Box >
                <Box sx=
                    {{
                        backgroundColor: "#152238",
                        minWidth: 200,
                        maxWidth: 1361,
                        width: 1361,
                        flexDirection: "row"
                    }}>
                    {(showOneCard === false) ? (
                        <div>
                            {
                                mangel.length > 0 ? (
                                    <div className="containerCard">
                                        {mangel.map((iteration_mangel) => (
                                            //dynamic
                                            <MangelCard mangel={iteration_mangel} setCardMangel={setCardMangel} cardMangel={cardMangel} setShowOneCard={setShowOneCard} showOneCard={showOneCard} />
                                            //each loop creates a MangelCard
                                        ))}
                                    </div>
                                ) : (
                                    <div className="empty">
                                        <h2> Keine Mängel gefunden</h2>
                                    </div>
                                )
                            }
                        </div>
                    ) : (
                        <div>
                            <div className="containerCard">
                                <div>
                                    <MangelBox
                                        mangel={cardMangel}
                                        setShowOneCard={setShowOneCard}
                                        selectedStatus={selectedStatus}
                                        changeStatus={changeStatus}
                                        authData={authData}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </Box>
            </Box>
        </React.Fragment >
    );
};
export default AdminFilterPane;

