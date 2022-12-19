import { Box } from "@mui/system";
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import React, { useState } from 'react';
import { NativeSelect } from '@mui/material';
import DropdownList from "react-widgets/DropdownList";

export default function AdminFilter({ filterItems, dropDownName, defaultItem, onChangeFunction }) {

    const [idCount, setIdCount] = useState(0);
    const addIdCount = () => { setIdCount(idCount = idCount + 1) };
    // const getValues = () => value;
   
    


    return (
        <FormControl style={{ maxWidth: 300 }} >
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                {dropDownName}
            </InputLabel>
            <NativeSelect
                // onChange={e=>setSelected(e.target.value)}
                onChange={onChangeFunction}
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
