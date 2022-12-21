import React, { useState } from "react";
import AdminFilter from '../components/AdminFilter';
import SearchBarAsynchronous from '../components/AsynchronousSerachBar';
import MangelCard from "./MangelCard";
import MangelBox from "./MangelBox";

import ChangeStatusPane from "./ChangeStatusPane";
import { Box, Stack } from "@mui/material";
import CustomButton from "./CustomButton";
import { useEffect } from "react";
import { CenterFocusStrong } from "@mui/icons-material";

export const AdminFilterPane = () => {

    const typeArray = ["Alle", "Defekt", "Verschmutzung", "Parkverstoß", "Anderes"];
    useEffect(() => { searchAllDR(); }, []);
    const[allTypeSelected, setAllTypeSelected] = useState(true)
    const[allStatusSelected, setAllStatusSelected] = useState(true)
    const [mangel, setMangel] = useState([]);
    const API_URL = "localhost:8080/api/v1/damageReport/getAllDamageReports";
    const [selectedType, setSelectedType] = useState();
    const [selectedStatus, setSelectedStatus] = useState();


    // && mangel.status.includes({selectedStatus})
    // && mangel.location.includes({selectedPlz})

    const [cardMangel, setCardMangel] = useState({ id: "", type: "", status: "", username: "", usermail: "", description: "", image: "", location: "" });
    const [showOneCard, setShowOneCard] = useState(false)





    const changeStatus = (e) => {
        console.log("Change status war hier")

        console.log(selectedStatus)

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

  

    // const setFilter = () => {
    //     console.log(selectedStatus + " useFilterFunction")
    //     setMangel(mangel.filter((mangel) => mangel.status === selectedStatus && mangel.type === selectedType))
    // };

    const changeType = (e) => {
        console.log("Change Type: Hey ich war hier")
        const readValue = e.target.value
        console.log(readValue.type + "type")
        console.log(e.target.value)
        console.log(setSelectedType)
        console.log(mangel)



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
            console.log(selectedType + " :selectedType")
        }

        if (e.target.value === "Parkverstoß") {

            setSelectedType("Parkverstoß")
            setAllTypeSelected(false)
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

    const setFilter = () => {
        console.log("Willkommen im SetFilter")
        if(allStatusSelected === true && allTypeSelected === true) {
            console.log("Hallo in der 1. If abfrage")
            searchAllDR()

        }

        else if (allStatusSelected !== true && allTypeSelected === true) {
            setMangel(mangel.filter((mangel) => mangel.status === selectedStatus))
            console.log("Hallo in der 2. If abfrage")

        }

        else if (allStatusSelected === true && allTypeSelected !== true) {
            setMangel(mangel.filter((mangel) => mangel.type === selectedType))
            console.log("Hallo in der 3. If abfrage")

        }
        else  {
            
            setMangel(mangel.filter((mangel) => mangel.status === selectedStatus && mangel.type === selectedType))
            console.log("Hallo in der 4. If abfrage")

        }
      
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
                                        mangel={cardMangel} setCardMangel={setCardMangel} cardMangel={cardMangel}
                                        setShowOneCard={setShowOneCard} showOneCard={showOneCard}
                                        selectedStatus={selectedStatus}
                                        changeStatus={changeStatus} resetFilter={resetFilter}
                                    />
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

