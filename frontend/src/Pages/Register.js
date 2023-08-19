import React, {useState}from 'react'


const Register=() =>{
    const [firstname,setFirstname]= useState('')
    const [lastname,setLastname]= useState('')
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const [bio,setBio]= useState('')
    const [birthdate,setBirthdate]= useState('')
    const [picture,setPicture]= useState('')
    const register=(e)=> {
        e.preventDefault();
        console.log("form submited");
        console.log("form data" , firstname,lastname,email,password, bio, birthdate);
    }



    return(
        <div className='register'>
            <div className='register-cover'>

            </div>
            <div className='register-content'>
                <div>
                    <h1>Dark Space</h1>
                    <p>Dark Space Social Media Application</p>
                </div>
                <div>
                    <from onSubmit={register}>
                        <div className='form-group'>
                            <label> firstname </label>
                            <input type="text" 
                            value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label> lastname </label>
                            <input type="text"
                            value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label> email </label>
                            <input type="email"
                            value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label> password </label>
                            <input type="password"
                            value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label> bio </label>
                            <textarea value={bio} onChange={(e)=>setBio(e.target.value)}></textarea>
                        </div>
                        <div className='form-group'>
                            <label> picture </label>
                            <input type="file"/>
                        </div>
                        <div className='form-group'>
                            <label> birthdate </label>
                            <input type="date"
                            value={birthdate} onChange={(e)=>setBirthdate(e.target.value)}/>
                        </div>
                        <button className='btn signup' type='submit'>sign up</button>
                    </from>
                </div>

            </div>



        </div>
    )

}

export default Register;