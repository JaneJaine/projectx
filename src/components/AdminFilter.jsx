import { Box } from "@mui/system";
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import React, { useState } from 'react';
import { NativeSelect } from '@mui/material';
import DropdownList from "react-widgets/DropdownList";

export default function AdminFilter({ filterItems, dropDownName, defaultItem }) {

    const [idCount, setIdCount] = useState(0);
    const addIdCount = () => { setIdCount(idCount = idCount + 1) };


    return (
        <FormControl style={{ maxWidth: 300 }} >
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                {dropDownName}
            </InputLabel>
            <NativeSelect
                defaultValue={defaultItem}
                inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                }}
            >
                
                    {
                        filterItems.map((item) => (
                            <option value = {idCount}> {item} </option>
                        ))
                    }
                
            </NativeSelect>
        </FormControl>
    );

};
