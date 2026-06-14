import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

type Props = {
    items: string[];
    checked: string[];
    onChange: (items: string[]) => void;
}

export default function CheckboxButtons({
    items,
    checked,
    onChange
}: Props) {

    const handleToggle = (value: string) => {
        const updatedChecked = checked.includes(value)
            ? checked.filter(x => x !== value)
            : [...checked, value];

        onChange(updatedChecked);
    }

    return (
        <FormGroup>
            {items.map(item => (
                <FormControlLabel
                    key={item}
                    control={
                        <Checkbox
                            checked={checked.includes(item)}
                            onChange={() => handleToggle(item)}
                            color="secondary"
                            sx={{ py: 0.7, fontSize: 40 }}
                        />
                    }
                    label={item}
                />
            ))}
        </FormGroup>
    );
}