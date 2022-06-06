import React from 'react';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Stack from '@mui/material/Stack';
export const DateComponent = () => {
  const [date, setDate] = React.useState(new Date());
  const [daysLife, setDaysLife] = React.useState('');

  function handleDateChange(newDate) {
    setDate(newDate);
    const differenceInTime = (new Date()).getTime() - newDate.getTime();
      
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24)).toString();
    setDaysLife(differenceInDays);
  }

  return (
    <>
    <div>
      <div style={{ width: '200px' }}>
        <Stack spacing={3}>
          <DatePicker
              disableFuture
              label="My birthday"
              openTo="year"
              views={['year', 'month', 'day']}
              value={date}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
        </Stack>
      </div>
      {
        daysLife && (
          <div>
            <p>
              You have lived for <strong>{daysLife}</strong> days
            </p>
          </div>
        )
      }
      
    </div>
    </>
  )
}

export default DateComponent;