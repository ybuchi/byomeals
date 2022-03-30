import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';


const FilterFridge = ({fridgeData, setSelectOption}) => {
    
    const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.item_name,
    });

    function handleOnChange(e, value) {
        setSelectOption(value)
    }

    return (
       
        <Autocomplete
        
        options={fridgeData}
        getOptionLabel={(option) => option.item_name}
        filterOptions={filterOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Select Item" />}
        onChange={handleOnChange}
        />
       
    );
}
    

export default FilterFridge