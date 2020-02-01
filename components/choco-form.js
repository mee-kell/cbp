import { useState } from 'react';
import {motion} from 'framer-motion';

const ChocoForm = () => {
  const [contact, setContact] = useState({
    name: '',
    subject: 'StaticForms - Choco Project Form',
    message: '',
    accessKey: '1c30c5ce-bc2d-4363-9118-95eb140f8798'
  });

  const [response, setResponse] = useState({
    type: '',
    message: ''
  });

  const handleChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' }
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: 'success',
          message: 'Thank you for contributing to the Choco Project.'
        });
      } else {
        setResponse({
          type: 'error',
          message: json.message
        });
      }
    } catch (e) {
      console.log('An error occurred', e);
      setResponse({
        type: 'error',
        message: 'An error occured while submitting the form.'
      });
    }
  };

  return (

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1.5 }}>

    <div className = "form">
    
    <div className='form-content'>
      <h2>Join the Choco Project</h2>

      <form action='https://api.staticforms.xyz/submit' method='post' onSubmit ={handleSubmit}>

        <div className='field'>
          <label className='label'>Enter the locker number of someone who needs cheering up.</label>
          <div className='control'>
            <input className='input' type='text' placeholder='Locker Number' name='name' onChange={handleChange} required/>
          </div>
        </div>

        <div className='field'>
          <label className='label'>Add your message!</label>
          <div className='control'>
            <textarea
              className='textarea'
              placeholder='Your Message'
              name='message'
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className='field'>
          <div className='control'>
            <button className='button' type='submit'>Submit</button>
          </div>
        </div>

      </form>

    </div>

    <div className={response.type === 'submitted' ? 'tile box notification is-primary' : 'is-hidden'}>
      <p id="notif">{response.message}</p>
    </div>

      <style jsx>{`

        .form {
          border-radius: 15px;
          padding: 20px;
          background: #2254ab;
          color: white;
          margin-bottom: 5vh;
        }

        #notif {
          font-size: 20px;
          color: whitesmoke;
        }

        .field {
          font-size: 15px;
          padding-bottom: 15px;
        }

        .control {
          margin-top: 10px;
        }

        input {
          border: none;
          border-radius: 5px;
          padding: 5px;
          font-size: 12px;
        }

        textarea {
          border: none;
          border-radius: 5px;
          width: 75vw;
          height: 15vh;
          padding: 5px;
          font-family: Avenir, sans-serif;
          font-size: 13px;
        }

        button {
          width: 20vw;
          height: 4vh;
          border: none;
          border-radius: 10px;
          background: black;
          color: white;
          font-size: 12px;
        }

      `}</style>

    </div>

    </motion.div>

  );
};

export default ChocoForm;