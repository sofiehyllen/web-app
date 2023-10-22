import React, { useState } from 'react';

const UserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [sleepHours, setSleepHours] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSleepHoursChange = (event) => {
    setSleepHours(event.target.value);
  };

  return (
    <section>
        <div className='flex'>
            <label>
                First Name: <br></br>
                <input type="text" value={firstName} onChange={handleFirstNameChange} />
            </label>
        
            <label>
                Last Name: <br></br>
                <input type="text" value={lastName} onChange={handleLastNameChange} />
            </label>
        </div>

        <div>
            <br />
            <label>
                Email: <br></br>
                <input type="text" value={email} onChange={handleEmailChange} />
            </label>
            <br />
        </div>
        
        <div className='center'>
            <h2> Expected hours of sleep </h2>
            <p className='heading heading-small'>
                To assist us in tracking your sleep pattern, kindly let us 
                know the number of hours you prefer to sleep per night. Please 
                type your response below.
            </p>
            <label>
                Sleep Hours: <br></br>
                <input type="number" value={sleepHours} onChange={handleSleepHoursChange} />
            </label>
        </div>
    </section>
  );
};

export default UserForm;
