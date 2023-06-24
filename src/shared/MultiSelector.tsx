import { MenuItem, Box, Chip, InputLabel, Select, FormControl, OutlinedInput, SelectChangeEvent } from '@mui/material';
import {Dispatch, SetStateAction} from 'react'
import { UseFormSetValue, FieldValues } from 'react-hook-form';

interface IMultiSelectorProps {
    label: string
    name: string
    data: string[]
    value: string[]
    setValue: Dispatch<SetStateAction<string[]>>
    setValueRegister: UseFormSetValue<FieldValues>
}

const MultiSelector = ({data, setValue, value, label, name, setValueRegister}: IMultiSelectorProps) => {
    
    const selectorHandle = (event: SelectChangeEvent<typeof data>) => {
		const {
			target: { value },
		} = event;
		setValue((prev) => {
			if (prev.includes(value as string)) {
				setValueRegister(name, prev);
				return prev;
			}
			prev.push(value as string);
			setValueRegister(name, prev);
			return prev;
		});
	};
    
    return (
        <FormControl>
            <InputLabel id={name + "-input"}>{label}</InputLabel>
            <Select
                fullWidth
                labelId={name}
                id={name}
                label={label}
                value={value}
                multiline
                onChange={selectorHandle}
                input={<OutlinedInput id={name + "-input"} label={label} />}
                renderValue={(selected: string[]) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                    </Box>
                )}
            >
                {data.map((dataItem) => (
                    <MenuItem key={dataItem} value={dataItem}>
                        {dataItem}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default MultiSelector