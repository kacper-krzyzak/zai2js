import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import {FormControl, InputLabel, MenuItem, Modal, Select, TextField} from "@mui/material";
import {useRef} from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

let typeId = 3
let eventId = 5

export default function MyAppBar({events, setEvents, types, setTypes, setDisplayTimeline}) {
    const [openEvent, setOpenEvent] = React.useState(false);
    const [openType, setOpenType] = React.useState(false);
    const [type, setType] = React.useState(1);
    const typeNameRef = useRef(null);
    const colorRef = useRef(null);
    const nameRef = useRef(null);
    const beginRef = useRef(null);
    const endRef = useRef(null);
    const urlRef = useRef(null);
    const summaryRef = useRef(null);
    const descriptionRef = useRef(null);

    const changeDisplay = () => setDisplayTimeline(display => !display)

    const createType = () => {

        setTypes(arr => [...arr, {id: typeId, name: typeNameRef.current.value, color: colorRef.current.value}])
        typeId++
        handleCloseType()
    }

    const createEvent = () => {
        let foundType = types.find(obj => {return obj.id === type})
        let e =  {
            id: eventId,
            name: nameRef.current.value,
            begin: new Date(beginRef.current.value.split("-")),
            end: new Date(endRef.current.value.split("-")),
            type: foundType.name,
            summary: summaryRef.current.value,
            url: urlRef.current.value,
            description: descriptionRef.current.value,
            color: foundType.color}

        console.log(e)
        let sortedEvents = [...events, e].sort((a, b) => {
            return a.begin - b.begin
         })
        console.log(sortedEvents)
        setEvents(sortedEvents)
        eventId++
        handleCloseEvent()
    }

    const handleChange = (event) => {
        setType(event.target.value);
    };
    const handleOpenEvent = () => setOpenEvent(true);
    const handleOpenType = () => setOpenType(true);
    const handleCloseEvent = () => setOpenEvent(false);
    const handleCloseType = () => setOpenType(false);

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Button onClick={handleOpenEvent} variant="contained">Nowe wydarzenie</Button>
                    <Modal
                        open={openEvent}
                        onClose={handleCloseEvent}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <TextField fullWidth id="name" label="Nazwa" variant="outlined" margin="normal" inputRef={nameRef}/>
                            <FormControl fullWidth>
                                <InputLabel id="typesLabel">Typ</InputLabel>
                                <Select
                                    labelId="typesLabel"
                                    id="demo-simple-select"
                                    value={type}
                                    label="Typ"
                                    onChange={handleChange}
                                >
                                    {types.map(type => {
                                        return (<MenuItem value={type.id}>{type.name}</MenuItem>)
                                    })}
                                </Select>
                            </FormControl>
                            <TextField id="begin" label="Początek wydarzenia" variant="outlined" margin="normal"
                                       type="date"
                                       inputRef={beginRef}
                                       sx={{width: "50%"}}
                                       defaultValue="1950-01-01"
                                       InputLabelProps={{
                                           shrink: true,
                                       }}/>
                            <TextField id="end" label="Koniec wydarzenia" variant="outlined" margin="normal"
                                       inputRef={endRef}
                                       type="date"
                                       sx={{width: "50%"}}
                                       defaultValue="1950-01-01"
                                       InputLabelProps={{
                                           shrink: true,
                                       }}/>
                            <TextField fullWidth id="summary" label="Krótki opis" variant="outlined" margin="normal" inputRef={summaryRef}/>
                            <TextField fullWidth id="description" label="Opis" variant="outlined" margin="normal" inputRef={descriptionRef}/>
                            <TextField fullWidth id="url" label="URL ilustracji" variant="outlined" margin="normal" inputRef={urlRef}/>
                            <Button variant="contained" onClick={createEvent}>Dodaj</Button>
                        </Box>
                    </Modal>
                    <Button variant="contained" onClick={handleOpenType} >Nowy typ</Button>
                    <Modal
                        open={openType}
                        onClose={handleCloseType}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <TextField inputRef={typeNameRef} fullWidth id="typeName" label="Nazwa" variant="outlined" margin="normal"/>
                            <TextField inputRef={colorRef} fullWidth id="color" label="Kod RGB koloru" variant="outlined" margin="normal"/>
                            <Button variant="contained" onClick={createType}>Dodaj</Button>
                        </Box>
                    </Modal>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Wydarzenia XX wieku
                    </Typography>
                    <Button color="inherit" onClick={changeDisplay}><ChangeCircleIcon/></Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}