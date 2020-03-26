import React, { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { Link,useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';
import api from '../../services/api';

export default function Register(){
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [whatsapp,setWhatsapp] = useState();
    const [cidade,setCidade] = useState();
    const [uf,setUf] = useState();

    const history = useHistory();

    async function handlerRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            cidade,
            uf
        };

        try{
            const response = await api.post('ongs',data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        }catch(error){
            alert('Ocorreu um erro. Por favor, tente novamente.');
        }
    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tem cadastro
                    </Link>
                </section>
                <form onSubmit={handlerRegister}>
                    <input 
                        placeholder="Nome da ONG" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="WhatsApp" 
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade"   
                            value={cidade}
                            onChange={e => setCidade(e.target.value)}
                        />
                        <input 
                            placeholder="UF" 
                            style={{ width:80 }} 
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>

        </div>

    );
}