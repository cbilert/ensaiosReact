import React, { useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../../components/Button';
import Table from '../../../components/Table';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function EditaCategoria() {
  const { id } = useParams();
  const history = useHistory();
  const valoresIniciais = {
    id: 0,
    titulo: '',
    descricao: '',
    cor: '#000000',
  };
  const {
    clearForm, handleChange, values, setValues,
  } = useForm(valoresIniciais);

  useEffect(() => {
    const URL = window.location.href.includes('localhost') ? `http://localhost:8080/categorias/${id}` : `https://agroflix.herokuapp.com/categorias/${id}`;
    fetch(URL)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setValues({
            ...resposta,
          });
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        categoriasRepository.update({
          id: values.id,
          titulo: values.titulo,
          descricao: values.descricao,
          cor: values.cor,
        })
          .then(() => {
            history.push('/');
          });

        clearForm(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        <Button>
          Salvar
        </Button>
      </form>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default EditaCategoria;
