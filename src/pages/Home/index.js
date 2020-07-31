import React from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import { Container } from './style';


function Home() {
  return (
    <Container>
      <Menu/>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Quando o assunto é investimento em inovação, Israel só fica atrás da Suíça, segundo dados do Fórum Econômico Mundial. No universo ‘agritech’, o país do Oriente Médio é berço de startups com tecnologias que desenvolvem desde os mais modernos drones até o uso de inteligência artificial nas lavouras. Confira o quarto episódio da série Conexão Israel."}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />  

      <Footer/>    
    </Container>
  );
}

export default Home;
