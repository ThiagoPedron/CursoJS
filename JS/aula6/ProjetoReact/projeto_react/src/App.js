import Header from './comonets/Header/header';
// import Login from './pages/Login';
import GlobalStyles from './styles/GlobalStyles';
import Footer from './comonets/Footer/footer'
import { BrowserRouter} from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import  Urls  from './routes';

import store from './store';
import { Provider } from 'react-redux';

function App() {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <Header/>
                <Urls />
                <GlobalStyles/>
                <ToastContainer autoClose={3000} //Define quanto tempo o alerta vai ficar na tela
                />

            <Footer/>
        </BrowserRouter>
        </Provider>
    );
};
export default App;