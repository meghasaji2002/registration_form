import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {

   const [username,setUserName] = useState(0)
   const [isUsername,setIsUserName] = useState(true)

   const [email,setEmail] = useState(0)
   const [isEmail,setIsEmail] = useState(true)

   const [password,setPassword] = useState(0)
   const[isPassword,setIsPassword] = useState(true)

   const [confirmpassword,setConfirmPassword]= useState(0)
   const[isConfirmPassword,setIsConfirmPassword] = useState(true)

   const getvalidate = (e)=>{
     const{name,value} = e.target
    //  console.log(name,value);
    switch(name) {
      case 'username':
        // code block
        setUserName(value);
      if(!!value.match(/^[a-zA-Z_]\w*$/)){
      setIsUserName(true);
      } else{
      setIsUserName(false);
      }
        break;
      case 'email':
        // code block
        setEmail(value)
      if(!!value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ )){
        setIsEmail(true)
      }
      else{
         setIsEmail(false)
        }
        break;

        case 'password':
          // code block
          setPassword(value)
      if(!!value.match(/^[A-Za-z0-9]\w{7,15}$/)){
       setIsPassword(true)
      }
      else {
        setIsPassword(false)
      }
          break;

          case 'confirmpassword':
            // code block
            setConfirmPassword(value)
      if(!!value.match(/^[A-Za-z0-9]\w{7,15}$/)){
       setIsConfirmPassword(true)
      }
      else {
        setIsConfirmPassword(false)
      }
            break;
      default:
        // code block
    }

    // if(name==='username'){        
    //   setUserName(value);
    //   if(!!value.match(/^[a-zA-Z_]\w*$/)){
    //   setIsUserName(true);
    //   } else{
    //   setIsUserName(false);
    //   }
    //  }


    //  if(name==='email'){
    //   setEmail(value)
    //   if(!!value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ )){
    //     setIsEmail(true)
    //   }
    //   else{
    //      setIsEmail(false)
    //     }
    //    }
       
    

    //  if(name==='password'){
    //   setPassword(value)
    //   if(!!value.match(/^[A-Za-z0-9]\w{7,15}$/)){
    //    setIsPassword(true)
    //   }
    //   else {
    //     setIsPassword(false)
    //   }
    // }
    
    // if(name==='confirmpassword'){
    //   setConfirmPassword(value)
    //   if(!!value.match(/^[A-Za-z0-9]\w{7,15}$/)){
    //    setIsPassword(true)
    //   }
    //   else {
    //     setIsConfirmPassword(false)
    //   }
    // }
  }
    

  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100'>
     
      <div className=' p-5 rounded contentdiv' style={{width:'500px'}}> 
        <h1 className='text-center'>Registration form</h1>
        <form className='mt-5'>
          <div className='mb-3'>
            <TextField name='username' value={username || ""} onChange={(e)=>getvalidate(e)} className='w-100' id="standard-basic" label="UserName" variant="standard" />
          </div>
          { !isUsername &&
            <div><p className='text-danger'>Invalid Input</p></div>}


          <div className='mb-3'>
            <TextField name='email' value={email || ""} onChange={(e)=>getvalidate(e)} className='w-100' id="standard-basic" label="Email Id" variant="standard" />
          </div>
          { !isEmail &&
            <div><p className='text-danger'>Invalid Input</p></div>}


          <div className='mb-3'>
            <TextField name='password' value={password || ""} onChange={(e)=>getvalidate(e)} className='w-100' id="standard-basic" label="Password" variant="standard" />
          </div>
          { !isPassword &&
            <div><p className='text-danger'>Invalid Input</p></div>}


          <div className='mb-3'>
            <TextField name='confirmpassword' value={confirmpassword || ""} onChange={(e)=>getvalidate(e)} className='w-100' id="standard-basic" label="Confirm Password" variant="standard" />
          </div>
          { !isConfirmPassword &&
            <div><p className='text-danger'>Invalid Input</p></div>}


          <div className='mt-5 d-flex justify-content-center align-items-center'>
             <Button className='bg-success ' variant="contained">Submit</Button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default App;
