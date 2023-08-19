import { useState } from "react";


const Login = ({setIsLogin}) => {
   
    const [name, setUsername] = useState("");
    const [pass, setPassword] = useState("");
    const [error,setError] = useState();

    async function getData() {
        if(!name){
            setError("Username is Empty !")
            return;
        }else if(!pass){
            setError("Password is Empty !")
            return;
        }
        let username = name.trim();
        let password = pass.trim();
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password,
            })
        });
        const data = await response.json();

        if(response.status===200){
            setError("");
            setIsLogin(true);
            localStorage.setItem("user",JSON.stringify(data));
        }else{
            setError(data.message);
            setIsLogin(false);
        }
            
    }


    return (
        <>
        <div className="login-container">
            <div>
                <img src="/i1.jpg" alt="welcome" />
                <h1>Sign in to your account</h1>
            </div>
            <div>
            {
                error && <p style={{color:"red"}}>{error}</p>
            }
            </div>
            <label htmlFor="mail">Username</label>
            <input type="text" value={name} id="mail" onChange={(e) => setUsername(e.target.value)} />

            <label htmlFor="pass">Password</label>
            <input type="password" id="pass" value={pass} onChange={(e) => setPassword(e.target.value)} />

            <button id="login" onClick={getData}>CONTINUE</button>
            <a>Forget your password?</a>
           
        </div>
        <div id='para'>Don’t have an account? <a>Sign up</a></div>
        </>
    )
}

export default Login;
