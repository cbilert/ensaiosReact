import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import CadastroVideo from './pages/cadastro/Video';
import Pagina404 from './pages/pag404';
import Home from './pages/Home';
import CadastroCategoria from './pages/cadastro/Categoria';
import EditaCategoria from './pages/cadastro/Categoria/edit';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/Video" component={CadastroVideo} />
      <Route path="/cadastro/Categoria" component={CadastroCategoria} />
      <Route path="/edita/categoria/:id" component={EditaCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
