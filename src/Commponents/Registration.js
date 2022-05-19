import React,{useState} from "react";
import { withRouter } from "react-router-dom";
import {registerPatient} from "../utils/interact"

function Registration(props) {
  const[name, setName] = useState(null);
  const[allergy, setAllergy] = useState(null);
  const[dob, setDOB] = useState(null);
  const[gender, setGender] = useState(null);
  const [status, setStatus] = useState("");
 


  const handleSubmit = async() =>{
      const { success, status } = await registerPatient(name, allergy, dob, gender);
      if(success){
          setStatus(status);
          props.history.push('/Slot');
      }

  }


  return (
    <div className="forms">
      <form>
          <h2>PatientDetials</h2>
        <h2>Name: </h2>
        <input type="text" placeholder="Hardik" onChange={(e)=>setName(e.target.value)}/>
        <h2>Allergy</h2>
        <input type="text" placeholder="Enter the Allergy ;)" onChange={(e)=>setAllergy(e.target.value)}/>
        <h2>Date Of Birth</h2>
        <input
          type="date"
          id="start"
          required
          pattern="\d{4}\d{2}\d{2}"
          min="1970-01-01"
          max="2019-12-31"
          onChange={(e)=> setDOB(e.target.value)}
        />
        <h2>Gender</h2>
        <div onChange={(e)=>setGender(e.target.value)}>
          <input type="radio" value="Male" name="gender" /> Male
          <input type="radio" value="Female" name="gender" /> Female
          <input type="radio" value="Other" name="gender" /> Other
        </div>
      </form>
      <button id="FormsButton" onClick={handleSubmit}>Submit</button>
      {status}
    </div>
  );
}

export default withRouter(Registration);
