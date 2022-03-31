import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';



const FilterFridge = ({fridgeData, selectOption, setSelectOption}) => {
    
    const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.item_name,
    });

    function handleOnChange(e, value) {
       setSelectOption(value)
    }

    return (
       
        <Autocomplete
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        options={fridgeData}
        getOptionLabel={(option) => option.item_name}
        filterOptions={filterOptions}
        sx={{ width: '500px' }}
        renderInput={(params) => <TextField {...params} label="Make Your Selection" placeholder="Select Item" />}
        onChange={handleOnChange}
        />
       
    );
}
    

export default FilterFridge