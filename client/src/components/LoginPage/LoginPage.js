import React, {useState, useContext} from "react"
import { useNavigate } from 'react-router-dom'; 
import { UserContext } from '../../contexts/UserContext';


function LoginPage(){
    const {setUser} = useContext(UserContext);

    const defaultForm = {    
        email:"",
        password:""
      }
    const [formData, setFormData]=useState(defaultForm)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();


    function handleChange(e){
        const key = e.target.name
        setFormData({
          ...formData,
          [key]:e.target.value
        })
    }
  
    const handleSubmit = async e => {
        e.preventDefault();
        const r = await fetch('/login',{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify(formData)
        })

        if(r.ok)
            {r.json().then((user)=>{
              setUser(user)
              if(user.is_admin === true){
                navigate("/admindashboard")
              } else {
                navigate("/mytrainings"); /*Maybe will have to remove push*/
              }
              localStorage.setItem('user', JSON.stringify(user))
              setFormData(defaultForm)  
            })}

        else
            {r.json().then((e)=>setErrors(e.errors))}

 
        
    }
  
    return (
      <div>
        <form className="Login" onSubmit={handleSubmit}>
          <h1>ImprovE Training</h1>
          <h3>Log in to your account</h3>
          <label>email:</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange}/>
          <br/>
          <label>password:</label>
          <input type="text" name="password" value={formData.password} onChange={handleChange}/>
          <br/>
          <button type="submit">Submit</button>
        </form>
        {errors.map((err) => (
          <p key={err}>{err}</p>
        ))}
      </div>
    );
}
export default LoginPage;