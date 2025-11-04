import { useState, useEffect } from "react";
import "./App.css";
import GalleryCarousel from "./GalleryCarousel";
import Carousel from "./Carousel";

function App() {
  const galeriaImages = [
    {
      url: "/src/assets/img/img_2.png",
    },
    {
      url: "/src/assets/img/image.png",
    },
    {
      url: "/src/assets/img/img_1.png",
    },
  ];

  const slides = [
    "/src/assets/img/img_2.png",
    "/src/assets/img/img_2.png",
    "/src/assets/img/img_2.png",
    "/src/assets/img/img_2.png",
  ];

  return (
    <>
      {/* navbar */}
      <div className="header" id="header">
        <nav className="navbar" id="navbar">
          <ul id="nav_list">
            <li class="nav-item active">
              <a href="#inicio">Início</a>
            </li>
            <li class="nav-item">
              <a href="#Apresentacao">Apresentação</a>
            </li>
          </ul>

          <img className="header-img" src="\src\assets\img\logo.png" alt="" />

          <ul id="nav_list">
            <li class="nav-item">
              <a href="#Preparo">Preparo</a>
            </li>
            <li class="nav-item">
              <a href="#Montagem">Montagem</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* hero-section */}

      <section className="hero-section" id="section-1-hero">
        <div className="overlay-content">
          <h1>“Doce união entre sabores e olhares.”</h1>
          <p>Fotos capturadas pelos alunos de Desenvolvimento de Sistemas</p>
        </div>

        <img className="img_1" src="\src\assets\img\img_2.png" alt="" />
        <img className="img_2" src="\src\assets\img\img_1.png" alt="" />

        <img className="wave" src="src\assets\wave.svg" alt="" />
      </section>

      {/* Apresentação */}
      <section className="apresentacao">
        <div className="container">
          <div className="imagem">
            <img src="\src\assets\img\img_2.png" alt="Evento" />
          </div>

          <div className="texto">
            <h2>Apresentação do Projeto</h2>
            <p>
              Nosso evento marcou o início de um novo ciclo de inovação. Confira
              como tudo aconteceu e conheça os objetivos do nosso projeto.
            </p>
            <button className="button-saibaMais">Saiba mais</button>
          </div>
        </div>
      </section>

      {/* Carrosel de fotos - Apresentaçã */}

      <main className="App py-10 bg-[#fffaf9] flex flex-col items-center">
  <h2 className="text-2xl font-semibold mb-6 text-gray-800">
    Galeria de Fotos do Evento
  </h2>

  <Carousel>
    {slides.map((s, i) => (
      <img
        key={i}
        src={s}
        alt={`Foto ${i + 1}`}
        className="w-full max-w-4xl h-[450px] object-cover rounded-2xl"
      />
    ))}
  </Carousel>

  {/* Área de vídeo */}
  <div className="mt-10 text-center">
    <h3 className="text-xl font-medium mb-4 text-gray-700">
      Veja um pouco mais do nosso evento 🎥
    </h3>
    <div className="flex justify-center">
      <video
        className="rounded-2xl shadow-lg border border-gray-200 w-[720px] max-w-full"
        controls
      >
        <source src="/src/assets/videos/video_evento.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</main>

      {/* Montagem */}

      {/* ======================================================= */}
      {/* 📍 SUA SEÇÃO: MONTAGEM COMPACTA (Foco nos Círculos)  */}
      {/* ======================================================= */}
      <section className="secao-montagem" id="Montagem">
        <div className="container-montagem">
          {/* Título Principal */}
          <h2 className="titulo-secao">
            🍽️ A Arte Culinária: Qualidade e Apresentação
          </h2>

          {/* Introdução sobre a filosofia de apresentação */}
          <p className="filosofia-apresentacao">
            Nosso compromisso vai além do sabor. Detalhes minuciosos no preparo
            e na montagem são a nossa garantia de que cada momento do seu evento
            será inesquecível.
          </p>

          {/* BLOCO CENTRAL: IMAGENS CIRCULARES COM INFORMAÇÕES DE QUALIDADE */}
          <div className="compromisso-qualidade">
            <h3 className="subtitulo-compromisso">
              Os Pilares da Nossa Excelência
            </h3>
            <div className="blocos-qualidade">
              <div className="bloco-item">
                {/* ATUALIZE O CAMINHO DA IMAGEM */}
                <img
                  src="/src/assets/img/ingredientes-selecionados.jpg"
                  alt="Seleção de Ingredientes Frescos"
                  className="img-circular"
                />
                <h5>1. Seleção Criteriosa</h5>
                <p>
                  A base de tudo: ingredientes frescos, sazonais e de
                  fornecedores locais. A qualidade da matéria-prima é o primeiro
                  passo para um prato perfeito.
                </p>
              </div>
              <div className="bloco-item">
                {/* ATUALIZE O CAMINHO DA IMAGEM */}
                <img
                  src="/src/assets/img/equipe-preparo.jpg"
                  alt="Chef cozinhando com paixão"
                  className="img-circular"
                />
                <h5>2. Técnica e Rigor</h5>
                <p>
                  Nossa equipe aplica técnicas culinárias de alta gastronomia,
                  garantindo a execução impecável de cada preparo, da cocção à
                  finalização.
                </p>
              </div>
              <div className="bloco-item">
                {/* ATUALIZE O CAMINHO DA IMAGEM */}
                <img
                  src="/src/assets/img/higiene-cozinha.jpg"
                  alt="Cozinha limpa e organizada"
                  className="img-circular"
                />
                <h5>3. Higiene e Confiança</h5>
                <p>
                  Cozinhas impecáveis e processos padronizados garantem a
                  segurança alimentar e a tranquilidade para você e seus
                  convidados.
                </p>
              </div>
            </div>
          </div>
          {/* FIM DO BLOCO CENTRAL */}

          {/* CONCLUSÃO CURTA */}
          <div className="conclusao-montagem">
            <p>
              É essa dedicação em cada etapa, desde a escolha do produto até o
              empratamento final, que transforma um simples buffet em uma
              **experiência gastronômica de luxo**.
            </p>
          </div>
        </div>
      </section>
      {/* Fim da sua seção compacta */}

      {/*preparo*/}
      <section className="preparo">
        <div className="preparo-field">
          <div className="left-content">
            <h1>Preparo</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium ab consequatur perspiciatis, quasi, assumenda in
              facilis odio dolorum error eius quas illo eos, iure sint nihil
              suscipit similique nobis nesciunt?
            </p>
          </div>

          <div className="rigth-content">
            <h2>lorem ipsum lorem lorem</h2>
            <div className="preparo-items">
              <GalleryCarousel images={galeriaImages} title="Com muito amor, o preparo dos alimentos!" />
            </div>
          </div>
        </div>
      </section>

      <section className="test">
        <div>oi</div>
        <div>oi</div>
        <div>oi</div>
        <div>oi</div>
        <div>oi</div>
        <div>oi</div>
        <div>oi</div>
        <div>oi</div>
        <div>oi</div>
        <div>oi</div>
        <div>oi</div>
        <div>oi</div>
        <div>oi</div>
        <div>oi</div>
        <div>oi</div>
        <div>oi</div>
        <div>oi</div>
        <div>oi</div>
        <div>oi</div>
        <div>oi</div>
        <div>oi</div>
        <div>oi</div>
        <div>oi</div>
        <div>oi</div>
        <div>oi</div>
        <div>oi</div>
      </section>
    </>
  );
}

export default App;
