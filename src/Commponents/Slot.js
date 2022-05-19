import React,{useState} from "react";
import { withRouter } from "react-router-dom";
import Select from 'react-select';
import {bookSlot} from "../utils/interact"

function Slot() {
  const[slot,setSlot] = useState(null);
  const[date,setDate] = useState(null);
  const[status, setStatus] = useState(null);

  const options = [
    { value: 'Covaxin', label: 'Covaxin' },
    { value: 'Novavax', label: 'Novavax' },
    { value: 'Zydus Cadila', label: 'VZydus Cadila' },
    { value: 'Hepatitis B', label: 'Hepatitis B' }
  ]

  const handleClick = async() =>{
      const { success, status } = await bookSlot(slot, date);
      if(success){
          setStatus(status);
      }
  }

  return (
    <div className="forms">
      <form>
        <h2>Vaccine Type</h2>
        <Select options={options} onChange={(options)=>{setSlot(options.value)}}/>
        <h2>Vaccine Slot</h2>
        <input
          type="date"
          id="start"
          required
          pattern="\d{4}\d{2}\d{2}"
          min="2022-05-19"
          max="2029-12-31"
          onChange={(e)=>{setDate(e.target.value)}}
        />
      </form>
      <button id="FormsButton" onClick={handleClick}>Book</button>
      <div>{status}</div>
    </div>
  );
}

export default withRouter(Slot);
