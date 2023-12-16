import './App.css';
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';       

function App() {
  const [interest, setInterest]=useState({
    principal:"",
    rinterest:"",
    time:""
  });
  const [isPrincipal,setIsPrincipal] = useState(true);
  const [isInterest,setIsInterest] = useState(true);
  const [isYear,setIsYear] = useState(true);


  
  const submitForm = (e)=>{
    e.preventDefault(); 
    result = (interest.principal*interest.rinterest*interest.time)/100;
    console.log(result);
    setResult(result)
  }
  let [result, setResult]=useState(0);
  
  const handleReset = ()=>
  {
    // setInterest(0);
    interest.principal = 0;
    interest.rinterest = 0;
    interest.time = 0;
    setResult(0);
  }
const validate = (e)=>{
  const {name,value} = e.target;

  if(name === 'principalValue'){
    setInterest({...interest,principal:value})

    let res = (!!value.match(/^[0-9]+$/));

    if(res === true){
      setIsPrincipal(true);
    }
    else{
      setIsPrincipal(false);
    }
  }
  else if(name === 'interestValue'){
    setInterest({...interest,rinterest:value})

    let res = (!!value.match(/^[0-9]+$/));

    if(res === true){
      setIsInterest(true);
    }
    else{
      setIsInterest(false);
    }
  }
  else if(name === 'yearValue'){
    setInterest({...interest,time:value})

    let res = (!!value.match(/^[0-9]+$/));

    if(res === true){
      setIsYear(true);
    }
    else{
      setIsYear(false);
    }
  }

}

  return (

    <>
      <div className='d-flex justify-content-center align-items-center w-100 mt-4' style={{ height: "95vh" }}>
        <div className='bg-light p-3 rounded' style={{ width: "480px" }}>
          <h1 className='text-center'>Simple Interest</h1>
          <p className='text-center'>Calculate your simple interest easily</p>
          <div style={{ height: "135px", width:"400px" }} className='bg-warning rounded m-4 p-4 text-center'>
            <h2>&#8377;{result}</h2>
            <p>Total simple interest</p>
          </div>
          <div className='m-4 '>
            <form onSubmit={submitForm}>
              
              <TextField id="outlined-basic" value={interest.principal} label="Principal Amount" variant="outlined" style={{width:"400px", marginTop:"20px"}} 
              name='principalValue' onChange={(e)=>validate(e)}/>
              {
                !isPrincipal &&
                <div>
                  <p className='text-danger'>Invalid Input</p>
                </div>
              }
              
              <TextField id="outlined-basic" value={interest.rinterest} label="Rate of interest %" variant="outlined" style={{width:"400px", marginTop:"20px"}}  
                name='interestValue' onChange={(e)=>validate(e)}/>
              {
                !isInterest &&
                <div>
                  <p className='text-danger'>Invalid Input</p>
                </div>
              }
            
              
              <TextField id="outlined-basic" value={interest.time} label="Year" variant="outlined" style={{width:"400px", marginTop:"20px"}}
              name='yearValue' onChange={(e)=>validate(e)}/>
              {
                !isYear &&
                <div>
                  <p className='text-danger'>Invalid Input</p>
                </div>
              }
              
              <button disabled={isPrincipal && isInterest && isYear ? false:true} className='btn btn-warning mt-4 p-2 rounded' type='submit'>Calculate</button>
              
              <button className='mt-4 p-2 ms-5 rounded btn btn-secondary' onClick={handleReset}>Reset</button>
            </form>
          </div>

        </div>
      </div>
      
    </>
  );
}

export default App;
