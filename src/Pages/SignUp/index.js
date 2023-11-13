import './styles.css';
import logo from '../../Assets/icons8-logo-80.png' 
import { Link } from 'react-router-dom'; 

function SignUp() {
  return(
    <div className='conatiner-sign-in'>
      <img src={logo} alt='logo' className='logo'/>
      <h1 className='logo logo_name'>Handle Money</h1>
      <div className='content-sign-in'>
        
        <div className='right'>
          <form>
            <h2>Cadastre-se</h2>
            <div className='container-inputs'>
              <label htmlFor='nome'>Nome</label>
              <input type='text' name='nome'/>
            </div>
            <div className='container-inputs'>
              <label htmlFor='email'>E-mail</label>
              <input type='text' name='email'/>
            </div>
            <div className='container-inputs'>
              <label htmlFor='password'>Senha</label>
              <input type='password' name='password'/>
            </div>
            <div className='container-inputs'>
              <label htmlFor='confirm-password'>Confirme sua senha</label>
              <input type='text' name='confirm-password'/>
            </div>
            <button className='btn-purple btn-big'>Cadastrar</button>
            <Link to="/">Já tem cadastro? Clique aqui!</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
