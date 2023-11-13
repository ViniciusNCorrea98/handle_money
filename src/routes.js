import { Routes, Route} from 'react-router-dom';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

function MainRoutes(){
    return (
        <Routes>
            <Route path='/' element={<SignIn/>} />
            <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
    );
}

export default MainRoutes;