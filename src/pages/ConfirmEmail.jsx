import FormHeader from '../components/FormHeader';
import {useNavigate} from 'react-router-dom';
import './form.css';

function ConfirmEmail() {
  const navigate = useNavigate();
  return(
    <>
      <FormHeader />
      <div className='confirmation-container'>
        <h1 className='success'>Account Created Successfully</h1>
        <p>Your account has been created successfully, please log in and fill in your required details for the onboarding now.</p>
        <button onClick={()=> navigate('/login')}>Login</button>
      </div>
    </>
  )
}

export default ConfirmEmail;