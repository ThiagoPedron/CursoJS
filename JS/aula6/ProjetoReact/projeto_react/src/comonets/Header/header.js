import React from 'react';
import { FaHome, FaUserAlt, FaSignOutAlt } from 'react-icons/fa';
import { Nav } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import * as usuarioLogado from '../../store/modules/usuarioLogado/actions'
export default function Header() {
    const logado = useSelector(state => state.usuarioLogadoReducer.logado);

    const dispath = useDispatch();

    function handleLogin(e) {
        e.preventDefault(); // Desativamos as funções normais do botão para que a pagina não seja atualizada


        dispath(usuarioLogado.login_request())
    }

    function handleLogout(e) {
        e.preventDefault();

        dispath(usuarioLogado.logout_request())
    }
    return (<Nav>
        {logado ? 'Logado' : 'Não Logado'}
        <a href='/'>
            <FaHome size={24} />
        </a>
        <a href='login' onClick={handleLogin}>
            <FaUserAlt size={24} />
        </a>
        <a href='logout'>
            <FaSignOutAlt size={24} onClick={handleLogout} />
        </a>
    </Nav>
    );
}