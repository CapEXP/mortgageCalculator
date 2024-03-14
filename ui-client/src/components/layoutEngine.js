import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import './dynamicForm.css'
const layoutEngine = (data) => {
    const { label, required, className, options, field_type, type, variant} = data
    const labelText = label +  (required ? ' *' : '')
    console.log(label)
    switch (field_type) {
        case 'TextField':
            return (
                <div className='aligned_form'>
                    <InputLabel style={{ width: "150px" }}>{labelText}</InputLabel>
                    <TextField className={className}></TextField>
                </div>
            )
        case 'Button':
            return (<Button className={className} variant={variant} style={{backgroundColor: "#cc0009", color: "#fff"}} type={type}>{labelText}</Button>)
        case 'Select':
            return (
                <div className='aligned_form'>
                    <InputLabel style={{ width: "150px" }}>{labelText}</InputLabel>
                    <Select className={className} style={{ height: "60px" }}>
                        {options?.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </div>
            )
        default:
            return null
    }
}

export { layoutEngine };
