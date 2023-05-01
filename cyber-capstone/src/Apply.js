import React, { useRef, useState } from "react";
import emailjs from 'emailjs-com';


emailjs.init('service_7go3hbs')


const Apply = () => {
  const [name, setName] = useState("");
  //const [email, setEmail] = useState("");
  
 const email = 'recruiterman69420@gmail.com'
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(`Name: ${name}, Email: ${email}`);

    emailjs.sendForm('service_7go3hbs', 'template_oqvwaih', e.target, 'gbbEG0QHkBay7ARtI')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  
  return (
    <div className="applyDiv">
      <h1>Apply for the Job</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label htmlFor="link">Link:</label>
        <input type="text" name="link" />
        <br />
        <label>
          To be sent to: 
            {email}
        </label>
        <br/>
        <button type="submit">Submit</button>

      </form>
    </div>
  );
};

export default Apply;
