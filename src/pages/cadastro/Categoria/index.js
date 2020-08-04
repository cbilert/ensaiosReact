import React, { useState, useEffect } from 'react';
import {
  Link, useHistory, useRouteMatch,
} from 'react-router-dom';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';
import Table from '../../../components/Table';
import '../../../components/Menu/Menu.css';

function CadastroCategoria() {
  const path = useRouteMatch();
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000000',
  };
  const { clearForm, handleChange, values } = useForm(valoresIniciais);
  const Divider = styled.div`
    padding-top: 50px;
  `;

  function handleDelete(categoria) {
    categoriasRepository.remove(categoria.id)
      .then(() => {
        const index = categorias.indexOf(categoria);
        if (index !== -1) {
          categorias.splice(index, 1);
          setCategorias([
            ...categorias,
          ]);
        }
      });

    clearForm(valoresIniciais);
  }

  useEffect(() => {
    const URL = window.location.href.includes('localhost') ? 'http://localhost:8080/categorias' : 'https://agroflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias([
            ...resposta,
          ]);
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

        setCategorias([
          ...categorias,
          values,
        ]);
        categoriasRepository.create({
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

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}
      <Divider />
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Cor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <tr key={`tr_${categoria.id}_${categoria.titulo}`}>
              <td>{categoria.id}</td>
              <td>{categoria.titulo}</td>
              <td>{categoria.descricao}</td>
              <td style={{ textAlign: 'center', backgroundColor: categoria.cor }}>{categoria.cor}</td>
              <td style={{ textAlign: 'center' }}>
                <Link className="ActionButtonEdit" to={`/edita/categoria/${categoria.id}`}>Editar</Link>
                <Link className="ActionButtonExcluir" to={path.url} onClick={() => handleDelete(categoria)}>Excluir</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
