import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'begin', headerName: 'Początek', type: 'date', editable: true },
    { field: 'end', headerName: 'Zakończenie', type: 'date', editable: true },
    { field: 'name', headerName: 'Nazwa', editable: true },
    { field: 'type', headerName: 'Typ', editable: true },
    { field: 'summary', headerName: 'Krótki opis', width: 600, editable: true },
    { field: 'url', headerName: 'Ilustracja', editable: true, width: 300},
    { field: 'description', headerName: 'Opis', width: 600, editable: true },
]


export default function CustomTable({events, setEvents}) {
    const save = (newRow, oldRow) => {
        const updated = [...events].map(e => {
            if (e.id === newRow.id) {
                return newRow
            }
            return e
        })
        setEvents(updated)
        return newRow
    }

    const handleError = (error) => {
        console.log(error)
    }

    return (
        <div style={{ height: '100vh', width: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
            <DataGrid
                getRowHeight={() => 'auto'}
                rows={events}
                columns={columns}
                processRowUpdate={save}
                onProcessRowUpdateError={handleError}
                pageSize={12}
                experimentalFeatures={{ newEditingApi: true }}
            />
        </div>
    );
}