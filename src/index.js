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

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/Video" component={CadastroVideo} />
      <Route path="/cadastro/Categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
