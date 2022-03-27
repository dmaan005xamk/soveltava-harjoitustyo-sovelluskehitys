import * as React from 'react';
import { Alert, Box, Button, Container, Snackbar } from '@mui/material';
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';

const ListItems = ({ devices, setOpen, open }) => {

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
                    onClick={() => setOpen({...open, add: true})}
                    variant="contained"
                    color="success"
                    component={Link}
                    to="/add">
                    Lisää laite!
                </Button>, width: 150,
            disableColumnMenu: true, 
            sortable: false,
            renderCell: (params) => {
                console.log(params, params.id)
               return (
               <Button 
                variant="contained" 
                component={Link}
                onClick={() => setOpen({...open, FullInfo: true})}
                to={`/info/${params.id}`}>
                    Info
                </Button>)
            }, align: "center"
        }
    ]
    return (
        <Container style={{ height: 300, width: '900px' }}>
            <Snackbar
                component="div"
                open={open.addSuccessful}
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