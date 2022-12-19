import React, { useState } from "react";
import AdminFilter from '../components/AdminFilter';
import SearchBarAsynchronous from '../components/AsynchronousSerachBar';
import MangelCard from "./MangelCard";
import { Box, Stack } from "@mui/material";
import CustomButton from "./CustomButton";

export const AdminFilterPane = () => {

    const [filterState, setFilterState] = useState(false);
    const handleFilterTrue = () => searchAllDR;
    const handleFilterFalse = () => { setFilterState(false) };
    const [mangel, setMangel] = useState([]);
    const API_URL = "localhost:8080/api/v1/damageReport/getAllDamageReports";

    const searchAllDR = async () => {
        const response = await fetch('http://localhost:8080/api/v1/damageReport/getAllDamageReports');
        const data = await response.json();
        console.log(data)

        setMangel(data)
        console.log(mangel)
        console.log(mangel[0])
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


                            <AdminFilter filterItems={["Alle", "Defekt", "Verschmutzung", "Parkverstoß", "Anderes", "deineMum"]}
                                dropDownName="Mangelart"
                                defaultItem="1" />

                            <AdminFilter filterItems={["Nicht bearbeitet", "in Bearbeitung", "Fertig"]}
                                dropDownName="Status"
                                defaultItem="1" />

                            <SearchBarAsynchronous />


                        </Stack>

                        <Stack spacing={1}>
                            <CustomButton backgroundColor="#152238" color="#ffffff" buttonText="Filter" onClickFunction={searchAllDR} />
                            <CustomButton backgroundColor="#957DAD" color="#ffffff" buttonText="Rückgängig" onClickFunction={handleFilterFalse} />

                        </Stack>
                    </Stack>
                </Box >

                <Box sx=
                    {{
                        backgroundColor: "#E0BBE4",
                        minWidth: 200,
                        maxWidth: 1361,
                        width: 1361

                    }}>
                    {mangel?.length > 0 ? (
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

