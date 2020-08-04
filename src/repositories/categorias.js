import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {
  return fetch(URL_CATEGORIES)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possível carregar os dados.');// TODO retornar corretamente o erro da API
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possível carregar os dados.');// TODO retornar corretamente o erro da API
    });
}

function create(objetoDaCategoria) {
  return fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDaCategoria),
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possível cadastrar os dados.');// TODO retornar corretamente o erro da API
    });
}

function update(objetoDaCategoria) {
  return fetch(`${URL_CATEGORIES}/${objetoDaCategoria.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDaCategoria),
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possível cadastrar os dados.');// TODO retornar corretamente o erro da API
    });
}

function remove(idDaCategoria) {
  return fetch(`${URL_CATEGORIES}/${idDaCategoria}`, {
    method: 'DELETE',
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possível cadastrar os dados.');// TODO retornar corretamente o erro da API
    });
}

export default {
  getAllWithVideos,
  getAll,
  create,
  update,
  remove,
};
