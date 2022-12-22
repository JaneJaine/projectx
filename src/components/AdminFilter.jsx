
import { FormControl, InputLabel, NativeSelect } from '@mui/material';

export default function AdminFilter({ filterItems, dropDownName, defaultItem, onChangeFunction, marginLeft }) {
    return (
        <FormControl style={{ maxWidth: 300, marginLeft: marginLeft }} >
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                {dropDownName}
            </InputLabel>
            <NativeSelect
                defaultValue={defaultItem}
                onChange={onChangeFunction}
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
