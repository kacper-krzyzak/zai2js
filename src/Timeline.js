import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useState} from "react";
import Button from "@mui/material/Button";

function TimelineBox({event}) {
    const [opened, setOpened] = useState(false)

    const handleClick = () => setOpened(!opened)
    return (
        <Box sx={{border: "solid 3px", borderRadius: '16px', borderColor: event.color, display: 'block', padding: '10px' }} >
            <Typography>
                {event.begin === event.end ?
                    event.begin.toLocaleString().split(',')[0] : event.begin.toLocaleString().split(',')[0] + ' - ' + event.end.toLocaleString().split(',')[0]
                }
            </Typography>
            <Typography variant="h6">
                {event.name}
            </Typography>
            <Typography align="justify">
                {event.summary}
            </Typography>
            {opened ? (
                <Box>
                    <img src={event.url} alt="Nie można wczytać obrazka"/>
                    <Typography>
                        {event.description}
                    </Typography>
                </Box>) : null
            }
            <Button sx={{backgroundColor: event.color}} variant="contained" onClick={handleClick}>{opened ? "Pokaż mniej" : "Pokaż więcej" }</Button>
        </Box>
    )
}

export default function ColorsTimeline({events}) {
    return (
        <Timeline position="alternate" sx={{paddingX: '10%'}}>
            {events.map(e => {
                return (
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot sx={{backgroundColor: e.color}}/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <TimelineBox event={e}/>
                        </TimelineContent>
                    </TimelineItem>
                )
            })}
        </Timeline>
    );
}