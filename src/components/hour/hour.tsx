import React from "react";
import HourModel  from "../../models/hour";



const Hour = () => {
  return (
    
<div className="form">
     <form className="container" onSubmit={save}>
       <div className="input-container">
         <label>Description</label>
         <input type="text" name="name" required /> 
       </div>
       <div className="input-container">
         <label>Customer</label>
         <input type="text" name="name1" required />
       </div>
       <div className="input-container">
         <label>Project</label>
         <input type="text" name="name2" required />
       </div>
       <div className="input-container">
         <label>Comment</label>
         <input type="text" name="name3" required />
       </div>
       <div className="input-container">
         <label>Date</label>
         <input type="text" name="name4" required />
       </div>
       <div className="input-container">
         <label>Hours</label>
         <input type="text" name="name5" required />
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
    const desciption = event.target.name.value;
    
   const hour = new HourModel(desciption, "bar", "tar", "a comment", new Date(), 12);
   
   // call save on them 

   hour.save();
}