import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function BasicDatePicker() {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker  disablePast />
      </LocalizationProvider>
    );
  }