import { Box } from "@mui/system";
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import React, { useState } from 'react';
import { NativeSelect } from '@mui/material';
import DropdownList from "react-widgets/DropdownList"; 

export default function AdminFilter({ filterItems, dropDownName, defaultItem, onChangeFunction, marginLeft }) {

    const [idCount, setIdCount] = useState(0);

    const [selects, setSelected] =useState();
    // const getValues = () => value;
    const [type, setType] = useState();
    const showType =() => {}
  
   
    


    return (
        <FormControl style={{ maxWidth: 300, marginLeft: marginLeft }} >
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                {dropDownName}
            </InputLabel>
            <NativeSelect
            defaultValue={defaultItem}
               onChange = {onChangeFunction}
            
            >
                    {
                        filterItems.map((item) => (
                            <option> {item} </option>
                            
                        ))
                    }
                
            </NativeSelect>
        </FormControl>
    );

};
