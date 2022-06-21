import React, { useState } from 'react';
import Input from '../../components/Input';
import * as C from './styles';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './style.css';
import { HiEye, HiEyeOff } from 'react-icons/hi';

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const handleLogin = () => {
    if (!email | !senha) {
      setError('Preencha todos os campos');
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate('/home');
  };

  return (
    <C.Container className="fadeIn">
      <C.Label>LOGIN</C.Label>
      <div
        aria-busy="true"
        aria-label="Loading"
        role="progressbar"
        class="container"
      >
        <div class="swing">
          <div class="swing-l"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div class="swing-r"></div>
        </div>
        <div class="shadow">
          <div class="shadow-l"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div class="shadow-r"></div>
        </div>
      </div>
      <C.Content>
        <Input
          type="email"
          placeholder="Nome ou E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError('')]}
        />
        <Input
          type={show ? 'text' : 'password'}
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError('')]}
        />
        <div className="login-eye">
          {show ? (
            <HiEye size={20} onClick={handleClick} />
          ) : (
            <HiEyeOff size={20} onClick={handleClick} />
          )}
        </div>
        <C.labelError>{error}</C.labelError>
        <button className="botao2" onClick={handleLogin}>
          ENTRAR
        </button>
        <C.Strong>
          <Link to="/signup">
            <button className="botao" onClick={handleLogin}>
              <svg
                className="btn"
                width="180px"
                height="60px"
                viewBox="0 0 180 60"
              >
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  class="bg-line"
                />
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  class="hl-line"
                />
              </svg>
              <h1 className="h1">CADASTRAR-SE</h1>
            </button>
          </Link>
        </C.Strong>
      </C.Content>
    </C.Container>
  );
};

export default Signin;
