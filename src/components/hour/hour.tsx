import React from "react";
import HourModel  from "../../models/hour";
import styled from 'styled-components';



const Styles = styled.div`
  padding: 1rem;

  form {
    max-width: 500px;
    margin: 0 auto;

    input {
      display: block;
      box-sizing: border-box;
      width: 100%;
      border-radius: 4px;
      border: 1px solid white;
      padding: 10px 15px;
      margin-bottom: 10px;
      font-size: 14px;
      background: #C9DFEC;
    }
  }
`


const Hour = () => {
  return (

  <Styles>  
  <div className="form">
      <form className="container" onSubmit={save}>
        <div className="input-container">
          <label>Description</label>
          <input type="text" name="descnName" required /> 
        </div>
        <div className="input-container">
          <label>Customer</label>
          <input type="text" name="cusName" required />
        </div>
        <div className="input-container">
          <label>Project</label>
          <input type="text" name="projName" required />
        </div>
        <div className="input-container">
          <label>Comment</label>
          <input type="text" name="commName" required />
        </div>
        <div className="input-container">
          <label>Date</label>
          <input type="text" name="date" required />
        </div>
        <div className="input-container">
          <label>Hours</label>
          <input type="text" name="hours" required />
        </div>

        <div >

        <button type="submit">Submit</button>
          
        </div>          
      </form>    
    </div>
   </Styles>

  );   
};

export default Hour;


const save = (event: any) => {
    // fetch values from form  
    // pass them to the new method 

    event.preventDefault();
    const desciption = event.target.descnName.value;
    const customer  = event.target.cusName.value;
    const projectName  = event.target.projName.value;
    const comment  = event.target.commName.value;
    const data  = event.target.date.value;
    const hours  = event.target.hours.value;

    
   const hour = new HourModel(desciption, customer, projectName, comment, data, hours);
   
   // call save on them 

   hour.save();
}