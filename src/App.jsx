import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import "./App.css";
import GalleryCarousel from "./GalleryCarousel";
import Carousel from "./Carousel.jsx";
import foto1 from "./assets/img/foto1Ap.jpg";
import foto2 from "./assets/img/foto2Ap.jpg";
import foto3 from "./assets/img/foto3Ap.jpg";
import foto4 from "./assets/img/foto4AP.jpg";

function App() {
  const galeriaImages = [
    {
      url: "/src/assets/img/preparo1.png",
    },
    {
      url: "/src/assets/img/preparo2.png",
    },
    {
      url: "/src/assets/img/preparo3.png",
    },
    {
      url: "/src/assets/img/preparo4.png",
    },
    {
      url: "/src/assets/img/preparo5.png",
    },
    {
      url: "/src/assets/img/preparo6.png",
    },
    {
      url: "/src/assets/img/preparo7.png",
    },
  ];

  const slides = [foto1, foto2, foto3, foto4];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

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
        <div className="overlay-content" data-aos="zoom-in">
          <h1>“Doce união entre sabores e olhares.”</h1>
          <p>Fotos capturadas pelos alunos de Desenvolvimento de Sistemas</p>
        </div>
<<<<<<< HEAD
        <div className="back-imgs">
          <img className="img_1" src="\src\assets\img\img_2.png" alt="" />
          <img className="img_2" src="\src\assets\img\img_1.png" alt="" />
        </div>
        
=======

        <img
          className="img_1"
          src="\src\assets\img\img_2.png"
          alt=""
          data-aos="zoom-in-down"
        />
        <img className="img_2" src="\src\assets\img\img_1.png" alt="" />
>>>>>>> 7268abb42ad8699b1d83e9fc5b18720650a51870

        <img className="wave" src="src\assets\wave.svg" alt="" />
      </section>

      {/* Apresentação */}
      <section className="apresentacao" data-aos="fade-right" id="Apresentacao">
        <div className="container">
          <div className="imagem" data-aos="zoom-in">
            <img src="\src\assets\img\img_2.png" alt="Evento" />
          </div>

          <div className="texto" data-aos="fade-left">
            <h2>Apresentação do Projeto</h2>
            <p>
              Nosso evento marcou o início de um novo ciclo de inovação. Confira
              como tudo aconteceu e conheça os objetivos do nosso projeto.
            </p>
            <button className="button-saibaMais" data-aos="flip-up">
              Saiba mais
            </button>
          </div>
        </div>
      </section>

      {/* Carrosel de fotos - Apresentaçã */}

      <main
        className="App py-10 bg-[#fffaf9] flex flex-col items-center"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Galeria de Fotos do Evento
        </h2>

        <Carousel data-aos="zoom-in">
          {slides.map((s, i) => (
            <img
              key={i}
              src={s}
              alt={`Foto ${i + 1}`}
              className="w-full h-[450px] object-cover rounded-2xl"
            />
          ))}
        </Carousel>

        {/* Área de vídeo */}
        <div className="mt-10 text-center" data-aos="fade-up">
          <h3 className="text-xl font-medium mb-4 text-gray-700">
            Veja um pouco mais do nosso evento 🎥
          </h3>
          <div className="flex justify-center">
            <video
              className="rounded-2xl shadow-lg border border-gray-200 w-[720px] max-w-90 max-wd-full"
              controls
              data-aos="zoom-in"
            >
              <source src="src\assets\vids\videoeditado.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </main>

      {/*preparo*/}
      <section className="preparo" data-aos="fade-up" id="Preparo">
        <div className="faixa-back"></div>
        <div className="preparo-field">
          <div className="left-content">
            <h1>Preparo</h1>
            <p>
              Cada prato começa com um gesto simples — o corte, o cheiro, o som
              da panela. Aqui, cada ingrediente ganha significado nas mãos de
              quem prepara com amor. O preparo é mais do que técnica: é cuidado,
              é partilha, é aprendizado.
              <br></br>
              <br></br>
              Entre risadas e conversas, o tempo parece desacelerar. O vapor, o
              aroma e as cores se misturam, criando memórias que vão muito além
              do sabor. É nesse instante que a cozinha deixa de ser apenas um
              espaço físico e se transforma em um lugar de afeto — onde cada
              movimento carrega um propósito, e cada receita guarda uma
              história.
              <br></br>
              <br></br>
              Porque cozinhar, antes de tudo, é um ato de conexão: com o
              alimento, com o outro e com o que há de mais humano em nós.
            </p>
          </div>

          <div className="rigth-content">
            <div className="preparo-items">
              <GalleryCarousel
                images={galeriaImages}
                title="Com muito amor, o preparo dos alimentos!"
              />

              <div className="img-field">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Adicione esta div para criar a forma em L */}

        <div className="forma-l"></div>

        <div className="recipe-rigth-content-field">
          <div className="recipe-field">
            <div className="recipe1">
              <div className="recipe1-left-content">
                <img src="\src\assets\img\recipe1.png" alt="" />
                <p>
                  O brigadeiro de capim-santo (ou capim-limão) é uma releitura
                  brasileira moderna de um clássico, que une a tradição do
                  brigadeiro à sofisticação dos sabores herbais e aromáticos da
                  culinária contemporânea.
                </p>
              </div>
              <div className="recipe1-rigth-content">
                <h2>Brigadeiro de Capim-Santo</h2>
                <h3>Chef Poliana</h3>
                <br></br>
                <p>
                  🧂 <span className="t-001">Ingredientes</span> (para cerca de 20 unidades)
                  <br></br>
                  <br></br>
                  ✲ 1 lata (395 g) de leite condensado
                  <br></br>
                  ✲ 100 ml de leite integral
                  <br></br>
                  ✲ 1 colher (sopa) de manteiga sem sal
                  <br></br>
                  ✲ 1/2 xícara (chá) de capim-santo picado (folhas
                  frescas)
                  <br></br>
                  ✲ Açúcar cristal ou coco ralado fino para enrolar
                  <br></br>
                  <br></br>
                  (Opcional: 50 g de chocolate branco picado para textura mais
                  cremosa.)
                </p>
                <h3></h3>
              </div>
            </div>
            <div className="recipe2">
              <div className="recipe2-content">
                <div className="recipe2-texts">
                  <h2>Macaron Francês</h2>
                  <h4 className="chef-name">Chef Poliana</h4>
                  <p>
                    🧂 <span className="t-001">Ingredientes</span> (rendimento: aprox. 25 unidades)
                    <br></br><br></br>

                    <span className="t-001">Para as conchas:</span>
                    <br></br>
                    ✲ 120 g de farinha de amêndoas bem peneirada
                    <br></br>
                    ✲ 200 g de açúcar de confeiteiro
                    <br></br>
                    ✲ 100 g de claras (aprox. 3 unidades)
                    <br></br>
                    ✲ 30 g de açúcar refinado
                    <br></br>
                    ✲ Corante em gel (opcional)
                    <br></br>
                    <br></br>
                    <span className="t-001">Para o recheio</span> (ganache de chocolate):
                    <br></br>
                    ✲ 150 g de chocolate meio amargo picado
                    <br></br>
                    ✲ 80 ml de creme de leite fresco
                    <br></br>
                    ✲ 1 colher (sopa) de manteiga sem sal

                  </p>

                  <h3>
                    mais que um doce — é uma poesia em forma de sabor. Com sua
                    casquinha leve e crocante que se desfaz ao toque, revela um
                    coração macio e delicado, quase etéreo. Nascido na Itália
                    renascentista e levado à França por Catarina de Médici,
                    encontrou ali seu verdadeiro palco: um país que transformou
                    simples amêndoas e açúcar em arte.
                  </h3>
                </div>

                <img src="\src\assets\img\recipe2.png" alt="" />
<<<<<<< HEAD

              </div>
            </div>
            <div className="recipes3-4">
              <div className="recipe3">
                <h1>Caldo verde</h1>
                <h2>Chef Nilda</h2>
                <div className="slider">
                  <div className="slides">

                    {/*radio buttons*/}

                    <input type="radio" name="radio-btn" id="radio1" />
                    <input type="radio" name="radio-btn" id="radio2" />

                    {/*slide images*/}

                    <div className="slide first">
                      <img src="\src\assets\img\recipe3-1.png" alt="" />
                    </div>
                    <div className="slide">
                      <img src="\src\assets\img\recipe3-2.png" alt="" />
                    </div>

                    <div className="navigation-auto">
                      <div className="auto-btn1"></div>
                      <div className="auto-btn2"></div>
                    </div>

                  </div>

                  <div className="manual-navigation">
                    <label htmlFor="radio1" className="manual-btn"></label>
                    <label htmlFor="radio2" className="manual-btn"></label>
                  </div>

                </div>
                <h3></h3>
              </div>
              <div className="recipe4">
                <h1></h1>
                <h2></h2>
                <img src="" alt="" />
                <h3></h3>
=======
>>>>>>> 7268abb42ad8699b1d83e9fc5b18720650a51870
              </div>
            </div>
          </div>

          <div className="recipe-rigth-content">
            <h1>Preparo</h1>
            <p>
              Cada prato começa com um gesto simples — o corte, o cheiro, o som
              da panela. Aqui, cada ingrediente ganha significado nas mãos de
              quem prepara com amor. O preparo é mais do que técnica: é cuidado,
              é partilha, é aprendizado.
              <br></br>
              <br></br>
              Entre risadas e conversas, o tempo parece desacelerar. O vapor, o
              aroma e as cores se misturam, criando memórias que vão muito além
              do sabor. É nesse instante que a cozinha deixa de ser apenas um
              espaço físico e se transforma em um lugar de afeto — onde cada
              movimento carrega um propósito, e cada receita guarda uma
              história.
              <br></br>
              <br></br>
              Porque cozinhar, antes de tudo, é um ato de conexão: com o
              alimento, com o outro e com o que há de mais humano em nós.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
