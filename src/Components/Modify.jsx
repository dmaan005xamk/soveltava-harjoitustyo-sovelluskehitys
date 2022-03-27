import { DateTimePicker, LocalizationProvider } from '@mui/lab'
import { Checkbox, Dialog, DialogContent, DialogContentText, DialogTitle, FormControlLabel, TextField } from '@mui/material'
import { Box } from '@mui/system'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import React from 'react'
import {useParams} from 'react-router-dom'

const Modify = ({ devices, open }) => {

    const {id} = useParams()

    const activeDevice = devices.filter((device) => {
        return (device.id === id);
    })[0];

    return (
        <Dialog open={open.modify}>
            <DialogTitle>Muokkaa</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Tässä näkymässä voit muokata vapaasti tämän lainaan tiedot
                </DialogContentText>
                <Box
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-evenly"
                    }}>
                    <TextField
                        margin="dense"
                        name="FullName"
                        label="Käyttäjän nimi"
                        variant="standard"
                        value={activeDevice.FullName}
                        style={{
                            flexBasis: "45%"
                        }}
                    />
                    <TextField
                        margin="dense"
                        name="City"
                        label="Paikkakunta"
                        variant="standard"
                        value={activeDevice.City}
                        style={{
                            flexBasis: "45%"
                        }}
                    />
                    <TextField
                        margin="dense"
                        name="Address"
                        label="Osoite"
                        variant="standard"
                        value={activeDevice.Address}
                        style={{
                            flexBasis: "45%"
                        }}
                    />
                    <TextField
                        margin="dense"
                        name="fabricator"
                        label="Laitevalmistaja"
                        variant="standard"
                        value={activeDevice.fabricator}
                        style={{
                            flexBasis: "45%"
                        }}
                    />
                    <TextField

                        margin="dense"
                        name="model"
                        value={activeDevice.model}
                        label="Laitemalli"
                        variant="standard"
                        style={{
                            flexBasis: "45%"
                        }}
                    />
                    <TextField
                        margin="dense"
                        name="SerialNumber"
                        label="Sarjanumero"
                        variant="standard"
                        value={activeDevice.SerialNumber}
                        style={{
                            flexBasis: "45%"
                        }}
                    />
                    <LocalizationProvider
                        dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            renderInput={(props) => <TextField
                                style={{
                                    flexBasis: "45%",
                                    marginTop: "24px"
                                }} variant="standard"
                                {...props} />}
                            value={activeDevice.TimeOfHandOut}

                        />
                    </LocalizationProvider>
                    <FormControlLabel

                        name="FilledForm"
                        control={<Checkbox
                        checked={activeDevice?.FilledForm} />}
                        label="Luovutuslomake täytetty"
                        style={{
                            flexBasis: "45%",
                            justifyContent: "center"
                        }}
                    />
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Modify