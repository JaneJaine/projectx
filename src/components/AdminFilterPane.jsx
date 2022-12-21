import React, { useState } from "react";
import AdminFilter from '../components/AdminFilter';
import SearchBarAsynchronous from '../components/AsynchronousSerachBar';
import MangelCard from "./MangelCard";
import MangelBox from "./MangelBox";
import ChangeStatusPane from "./ChangeStatusPane";
import { Box, Stack } from "@mui/material";
import CustomButton from "./CustomButton";
import CustomButton1 from "./CustomButton1";
import { useEffect } from "react";
import { CenterFocusStrong } from "@mui/icons-material";

export const AdminFilterPane = () => {

    const typeArray = ["Alle", "Defekt", "Verschmutzung", "Parkverstoß", "Anderes"];
    useEffect(() => { searchAllDR(); }, []);
    const [filterState, setFilterState] = useState(false);
    const handleFilterTrue = () => searchAllDR;
    const handleFilterFalse = () => { setFilterState(false) };
    const [mangel, setMangel] = useState([]);
    const API_URL = "localhost:8080/api/v1/damageReport/getAllDamageReports";
    const [selectedType, setSelectedType] = useState();
    const [selectedStatus, setSelectedStatus] = useState();
  

    // && mangel.status.includes({selectedStatus})
    // && mangel.location.includes({selectedPlz})

    const [cardMangel, setCardMangel] = useState({ id: "", type: "", status: "", username: "", usermail: "", user: "", description: "", image: "", location: "" });
    const [showOneCard, setShowOneCard] = useState(false)



    const changeStatusBackend = () => {
    
        console.log("changeStatusBackend war hier")
        console.log(selectedStatus)
    };

    const changeStatus = (e) => {
        console.log("Change status war hier")

        console.log(selectedStatus)

        if (e.target.value === "Alle") {
            setSelectedStatus("Alle")
            searchAllDR()
            console.log(e.target.value)
            console.log("Inside Alle Abfrage")
            console.log(selectedStatus)
        }

        if (e.target.value === "Nicht bearbeitet") {
            setSelectedStatus("Nicht bearbeitet")
            console.log(e.target.value)
            console.log("Inside in Nicht bearbeitet Abfrage")
            console.log(selectedStatus)
        }

        if (e.target.value === "Fertig") {
            setSelectedStatus("Fertig")
            console.log(e.target.value)
            console.log("Inside Fertig Abfrage")
            console.log(selectedStatus)
        }

        if (e.target.value === "In Bearbeitung") {
            setSelectedStatus("In Bearbeitung")
            console.log(e.target.value)
            console.log("Inside in Bearbeitung Abfrage")
            console.log(selectedStatus)
        }

    }

    const setFilter = () => {
        console.log(selectedStatus + " useFilterFunction")
        setMangel(mangel.filter((mangel) => mangel.status === selectedStatus))
    };


    const changeType = (e) => {
        console.log("Change Type: Hey ich war hier")
        const readValue = e.target.value
        console.log(readValue.type + "type")
        console.log(e.target.value)
        console.log(setSelectedType)
        console.log(mangel)



        if (e.target.value === "Alle") {

            searchAllDR()

        }

        if (e.target.value === "Defekt") {
            searchAllDR()
            setSelectedType("Defekt")
            setFilter()
            console.log(selectedType + " :selectedType")

        }


        if (e.currentTarget.value === "Verschmutzung") {

            setSelectedType("Verschmutzung")
            console.log(selectedType + " :selectedType")
        }

        if (e.target.value === "Parkverstoß") {

            setSelectedType("Parkverstoß")
            console.log(selectedType + " :selectedType")

        }

        if (e.target.value === "Anderes") {

            setSelectedType("Anderes")
            console.log(selectedType + "4")

        }

    };



    const resetFilter = () => {
        searchAllDR()
    };




    const searchAllDR = async () => {
        const response = await fetch('http://localhost:8080/api/v1/damageReport/getAllDamageReports');
        const data = await response.json();
        console.log(data)

        setMangel(data)

    }

    return (
        <React.Fragment>
            <Box sx=
                {{
                    backgroundColor: "#a7bed3",
                    // flexDirection: 'row',
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
                                    <MangelBox mangel={cardMangel} setCardMangel={setCardMangel} cardMangel={cardMangel} setShowOneCard={setShowOneCard} showOneCard={showOneCard} />
                                </div>
                                <div>

                                    <Box
                                        sx={{
                                            width: 150,
                                            height: 160,
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
                                            defaultItem={selectedStatus}
                                            onChangeFunction={changeStatus} />

                                        <CustomButton backgroundColor="#957DAD" color="#ffffff" marginTop="75px"
                                            buttonText="Status setzen" onClickFunction={changeStatusBackend} />
                                    </Box>




                                </div>

                            </div>

                        </div>





                    )
                    }

                </Box>

            </Box>
        </React.Fragment >
    );
};

export default AdminFilterPane;

