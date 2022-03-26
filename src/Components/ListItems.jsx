import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert, Box, Button, Container, Snackbar } from '@mui/material';
import { format } from 'date-fns';
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';

const ListItems = ({ devices, setOpen, addSuccessful }) => {

    const columns = [
        {
            field: "SerialNumber",
            headerName: "Sarjanumero",
            width: 125
        },
        {
            field: "FullName",
            headerName: "Kokonimi",
            width: 125
        },
        {
            field: "model",
            headerName: "Malli",
            width: 125
        },
        {
            field: "City",
            headerName: "Paikkakunta",
            width: 125
        },
        {
            field: "TimeOfHandOut",
            headerName: "Luovutettu",
            width: 200
        },
        {
            field: "modify",
            headerName:
                <Button
                    onClick={() => setOpen(true)}
                    variant="contained"
                    color="success"
                    component={Link}
                    to="/add">
                    Lisää laite!
                </Button>, width: 150,
            disableColumnMenu: true, sortable: false
        }
    ]

    return (
        <Container style={{ height: 300, width: '900px' }}>
            <Snackbar
                component="div"
                open={addSuccessful}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    Kirjaus lisätty onnistuneesti!
                </Alert>
            </Snackbar>
            <DataGrid
                columns={columns}
                rows={devices}
                autoHeight
            />
        </Container>

    );
}

export default ListItems