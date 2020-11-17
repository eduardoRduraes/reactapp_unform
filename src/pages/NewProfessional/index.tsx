import React, { FormEvent } from 'react';
import {Form} from '@unform/web';
import Input from '../../components/Input';
import Radio from '../../components/Input/Radio';
import './style.css';

// import { Container } from './styles';

const NewProfessional: React.FC = () => {
    async function handleSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log();
    }

  return (
      <>
        <Form onSubmit={handleSubmit}>
            <Input name="nome" label="Nome Completo" type="text"/>
            <Input name="email" label="E-mail" type="email"/>
            <Input name="endereco" label="Endereco" type="text"/>
            <Radio name="sexo"
                   options={[{id: "M", label: "Masculino"},{id:"F", label:"Feminino"}]}
            />
            <button type="submit">SALVAR</button>
        </Form>
      </>
  );
}

export default NewProfessional;