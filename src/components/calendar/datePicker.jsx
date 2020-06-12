import React, { useState } from 'react'
import "react-dates/initialize";
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import '../../assets/css/Style.css';


 function DatePicker() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);
    const handleDateChange = ({ startDate, endDate }) => {
        setStartDate(startDate);
        setEndDate(endDate);
    };
    return (
        <div>
            <DateRangePicker
                startDate={startDate}
                startDateId="tata-start-date"
                endDate={endDate}
                endDateId="tata-end-date"
                onDatesChange={handleDateChange}
                focusedInput={focusedInput}
                onFocusChange={focusedInput => setFocusedInput(focusedInput)}
                /> 
        </div>
    )
}
export default DatePicker;
