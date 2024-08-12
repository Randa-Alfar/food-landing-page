import React, { useState } from 'react'
import './SignForm.css'
import {Link} from 'react-router-dom'

const SignForm = () => {

    const url='http://localhost:8888/user';
    const [data,setdata]=useState({
        firstName:'',
        lastName:'',
        Email:'',
        Password:''
    });
    const [SignUpData,setsignUpData]=useState();

    function handle(e){
        const newdata = {...data};
        newdata[e.target.id] = e.target.value;
        setdata(newdata)
        console.log(newdata);
    }
    const formSubmit = async (e)=>{
        e.preventDefault();
        postdata(url,data);
    };

    const postdata = async(url, user={})=>{
        try{
            const mydata =await fetch(url,{
                method: 'post',
                mode:'cors',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(user)
            });
            const fulldata = await mydata.json();
            console.log(fulldata);
            setsignUpData(fulldata);
        }catch(err){
            console.log(err)
        }

    }

  return (
    <form  onSubmit={(e)=>formSubmit(e)} method='POST'>

            <span>
                <label>First Name</label>
                <input onChange={(e)=>handle(e)} id='firstName' value={data.firstName} type='text' placeholder='Frist Name'  required />
            </span>

            <span>
                <label>Last Name</label>
                <input onChange={(e)=>handle(e)} id='lastName' value={data.lastName} type='text' placeholder='Last Name'  required />
            </span>

            <span>
                <label>E-Mail Adress</label>
                <input onChange={(e)=>handle(e)} id='Email' value={data.Email} type="email" placeholder='E-Mail'  required />
            </span>

            <span>
                <label>Password</label>
                <input onChange={(e)=>handle(e)} id='Password' value={data.Password} type='password' placeholder='Password'  required />
            </span>

            {/* <span>
                <label>Confirm Your Password</label>
                <input type='password' placeholder='Confirm YourPassword' name='ConfirmPassowrd' required />
            </span> */}

            <button type='submit'>SIGN UP</button>

            <div className='login-container'>
                <span>Already have an account?</span>
                <Link className='text-link' to="/LogIn" > Log In</Link>
            </div>

            </form>
  )
}

export default SignForm
