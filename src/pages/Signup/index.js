import React, { useState } from 'react';
import Input from '../../components/Input';
import * as C from './styles';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './style.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConf, setSenhaConf] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !senha | !senhaConf) {
      setError('Preencha todos os campos');
      return;
    } else if (senha !== senhaConf) {
      setError('As senhas não são iguais');
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert('Usuário cadatrado com sucesso!');
    navigate('/');
  };

  return (
    <C.Container className="fadeIn">
      <div class="swing">
        <div class="swing-l"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div class="swing-r"></div>
      </div>
      <C.Label>CADASTRAR-SE</C.Label>
      <div class="shadow">
        <div class="shadow-l"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div class="shadow-r"></div>
      </div>
      <C.Content>
        <Input
          type="email"
          placeholder="Nome ou Email"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError('')]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError('')]}
        />
        <Input
          type="password"
          placeholder="Confirme sua senha"
          value={senhaConf}
          onChange={(e) => [setSenhaConf(e.target.value), setError('')]}
        />
        <C.labelError>{error}</C.labelError>
        <button class="botao2" onClick={handleSignup}>
          SALVAR
        </button>
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
