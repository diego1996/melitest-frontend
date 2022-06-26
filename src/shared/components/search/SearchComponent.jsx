import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchComponent() {
    return (
        <Paper
            component="form"
            action="/items"
            sx={{p: '2px 4px', display: 'flex', alignItems: 'center'}}
        >
            <InputBase name="search"
                sx={{ml: 1, flex: 1}}
                placeholder="Nunca dejes de buscar"
                inputProps={{'aria-label': 'search google maps'}}
            />
            <IconButton style={{borderRadius: "0%"}} type="submit" aria-label="search">
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
}
