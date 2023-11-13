import './styles.css';
import logo from '../../Assets/icons8-logo-80.png' 
import {useNavigate} from 'react-router-dom'

function SignIn() {
  const navigate = useNavigate()

  return(
    <div className='conatiner-sign-in'>
      <img src={logo} alt='logo' className='logo'/>
      <h1 className='logo logo_name'>Handle Money</h1>
      <div className='content-sign-in'>
        <div className='left'>
          <h1> 
            Controle suas <span>finanças</span> sem planilha chata.
          </h1>
          <h3>
            Organizar as suas finanças nunca foi tão fácil, com o DINDIN, voce tem tudo num único lugar e em um clique de distância.
          </h3>
          <button className='btn-purple btn-big' onClick={() => navigate('/sign-up')}>Cadastre-se</button>
        </div>
        <div className='right'>
          <form>
            <h2>Login</h2>
            <div className='container-inputs'>
              <label htmlFor='email'>E-mail</label>
              <input type='text' name='email'/>
            </div>
            <div className='container-inputs'>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password'/>
            </div>
            <button className='btn-purple btn-big'>Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
