import { DateTimePicker, LocalizationProvider } from '@mui/lab'
import { Checkbox, Dialog, DialogContent, DialogContentText, DialogTitle, FormControlLabel, TextField } from '@mui/material'
import { Box } from '@mui/system'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import React from 'react'

const modify = ({ devices }) => {
    return (
        <Dialog open={true}>
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

                        value={devices[0].FullName}
                        style={{
                            flexBasis: "45%"
                        }}
                    />
                    <TextField


                        margin="dense"
                        name="City"
                        label="Paikkakunta"
                        variant="standard"
                        value={devices[0].City}
                        style={{
                            flexBasis: "45%"
                        }}
                    />
                    <TextField


                        margin="dense"
                        name="Address"
                        label="Osoite"
                        variant="standard"
                        value={devices[0].Address}
                        style={{
                            flexBasis: "45%"
                        }}
                    />
                    <TextField

                        margin="dense"
                        name="fabricator"
                        label="Laitevalmistaja"
                        variant="standard"
                        value={devices[0].fabricator}

                        style={{
                            flexBasis: "45%"
                        }}
                    />
                    <TextField

                        margin="dense"
                        name="model"
                        value={devices[0].model}

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
                        value={devices[0].SerialNumber}

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
                            value={devices[0].TimeOfHandOut}

                        />
                    </LocalizationProvider>
                    <FormControlLabel

                        name="FilledForm"
                        control={<Checkbox
                            checked={devices[0]?.FilledForm} />}
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

export default modify