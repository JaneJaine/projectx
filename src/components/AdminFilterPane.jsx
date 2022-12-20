import React, { useState } from "react";
import AdminFilter from '../components/AdminFilter';
import SearchBarAsynchronous from '../components/AsynchronousSerachBar';
import MangelCard from "./MangelCard";
import { Box, Stack } from "@mui/material";
import CustomButton from "./CustomButton";
import { useEffect } from "react";

export const AdminFilterPane = () => {

    useEffect(() => {searchAllDR();},[]);
    const [filterState, setFilterState] = useState(false);
    const handleFilterTrue = () => searchAllDR;
    const handleFilterFalse = () => { setFilterState(false) };
    const [mangel, setMangel] = useState([]);
    const API_URL = "localhost:8080/api/v1/damageReport/getAllDamageReports";
    const [selectedType, setSelectedType] = useState("Defekt");
    const [selectedStatus, setSelectedStatus] = useState();
    const [selectedPlz, setSelectedPlz] = useState();
    // && mangel.status.includes({selectedStatus})
    // && mangel.location.includes({selectedPlz})

    const changeType = (e) => {
      setSelectedType(e.target.value)
      console.log(e.target.value)
      console.log(mangel[0].type)
    };

    const useFilter = () => {setMangel(mangel.filter((mangel)=>mangel.type.includes({selectedType})))};
    // setMangel({
    //   mangel : useFilter
    // })


    //alle Daten werden beim Laden der Seite automatisch geladen
    

    const searchAllDR = async () => {
        const response = await fetch('http://localhost:8080/api/v1/damageReport/getAllDamageReports');
        const data = await response.json();
        console.log(data)

        setMangel(data)
        console.log(mangel)
        // console.log(mangel[0])
        // console.log(mangel[1])
        // console.log(mangel[2])
        console.log(mangel[0].type)
        console.log(mangel[0].id)

        
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


                            <AdminFilter filterItems={["Alle", "Defekt", "Verschmutzung", "Parkverstoß", "Anderes"]}
                                dropDownName="Mangelart"
                                defaultItem= {selectedType} 
                                onChangeFunction={changeType}
                                />
                            

                            <AdminFilter filterItems={["Nicht bearbeitet", "in Bearbeitung", "Fertig"]}
                                dropDownName="Status"
                                defaultItem="1" 
                                onChangeFunction={setSelectedStatus}/>

                            <SearchBarAsynchronous onChangeFunction={setSelectedPlz}/>


                        </Stack>

                        <Stack spacing={1}>
                            <CustomButton backgroundColor="#152238" color="#ffffff" buttonText="Filter" onClickFunction={useFilter} />
                            <CustomButton backgroundColor="#957DAD" color="#ffffff" buttonText="Rückgängig" onClickFunction={searchAllDR} />

                        </Stack>
                    </Stack>
                </Box >

                <Box sx=
                    {{
                        backgroundColor: "#152238",
                        minWidth: 200,
                        maxWidth: 1361,
                        width: 1361,
                        flexDirection : "row"
                    

                    }}>
                    {mangel.length > 0 ? (
                        <div className="container">
                            {mangel.map((iteration_mangel) => (
                                //dynamic looping
                                <MangelCard mangel={iteration_mangel} />
                                //each loop creates a MangelCard
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2> Keine Mängel gefunden</h2>
                        </div>
                    )}


                </Box>

            </Box>
        </React.Fragment>
    );
};

export default AdminFilterPane;

