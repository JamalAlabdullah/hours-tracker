import HourModel  from "../../models/hour";
import { useForm, SubmitHandler } from "react-hook-form";



const Hour = () => {
  return (
    
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