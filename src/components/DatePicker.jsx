    import React from 'react'
    import { addDays } from 'date-fns';
    import { useState } from 'react';
    import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
    import dayjs from 'dayjs';
    import TextField from '@mui/material/TextField';
    import Stack from '@mui/material/Stack';
    import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
    import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
    import { DatePicker } from '@mui/x-date-pickers/DatePicker';
    export default function DatePick() {
        const [value, setValue] = React.useState(dayjs());
    return (
        <div className="date-range md-left max-w-screen-2xl def justify-evenly">
            Please select checkIn checkOut dates from below :
            <br/><br/>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* <Stack spacing={3}> */}
                
                    <DesktopDatePicker
                    label="checkIn"
                    value={value}
                    minDate={dayjs('2017-01-01')}
                    onChange={(newValue) => {
                    setValue(newValue);
            }}
                    renderInput={(params) => <TextField {...params} />}
            /> 
             <DesktopDatePicker
                    label="checkOut"
                    value={value}
                    minDate={dayjs('2017-01-01')}
                    onChange={(newValue) => {
                    setValue(newValue);
            }}
                    renderInput={(params) => <TextField {...params} />}
            />  &nbsp;
            <label htmlFor="src" className="db" >FROM</label> &nbsp; &nbsp;
            <input type="text" id="src" className="db aaa" data-message="Please enter a source city" 
               tabIndex="1" autoComplete="on" onClick="selectText('src')" 
               />
            
                {/* </Stack> */}
            </LocalizationProvider>
        </div>                             
    )
    }

  