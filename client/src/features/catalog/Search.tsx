import { debounce, TextField } from "@mui/material";
import { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/store";
import { setSearchTerm } from "./catalogSlice";

export default function Search() {

    const { searchTerm } = useAppSelector(state => state.catalog);

    const dispatch = useAppDispatch();

    const [editedValue, setEditedValue] = useState<string | null>(null);

    const value = editedValue ?? searchTerm;

    const debouncedSearch = useMemo(
        () =>
            debounce((value: string) => {
                dispatch(setSearchTerm(value));
            }, 500),
        [dispatch]
    );

    return (
        <TextField
            label="Search products"
            variant="outlined"
            fullWidth
            type="search"
            value={value}
            onChange={(e) => {
                setEditedValue(e.target.value);
                debouncedSearch(e.target.value);
            }}
        />
    );
}