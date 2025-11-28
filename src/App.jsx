import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import "./App.css";
import GalleryCarousel from "./GalleryCarousel";
import Carousel from "./Carousel.jsx";
import "./responsive.css"

// Importar todas as imagens do arquivo centralizado
import { images, galeriaImages, slidesApresentacao } from "./imageImports";

function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [currentSlideSecondary, setCurrentSlideSecondary] = useState(1);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= 2 ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideSecondary((prev) => (prev >= 3 ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  

  return (
    <>
      {/* navbar */}
      <div className="header" id="header">
        <nav className="navbar" id="navbar">
          <ul id="nav_list">
            <li className="nav-item active">
              <a href="#inicio">Início</a>
            </li>
            <li className="nav-item">
              <a href="#Apresentacao">Apresentação</a>
            </li>
          </ul>

          <img className="header-img" src={images.logo} alt="Logo" />

          <ul id="nav_list">
            <li className="nav-item">
              <a href="#Preparo">Preparo</a>
            </li>
            <li className="nav-item">
              <a href="#Montagem">Montagem</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* hero-section */}
      <section className="hero-section" id="section-1-hero">
        <div className="overlay-content" data-aos="zoom-in">
          <h1>"Doce união entre sabores e olhares."</h1>
          <p>Realização: Auxiliar de Cozinha, Confeitaria e Técnico em Desenvolvimento de Sistemas</p>
          <div className="instructors-field">
            <div className="namePlusCourse">
              <h4>Kelly Bispo</h4>
              <h5>Tecnologia</h5>
            </div>
            <div className="namePlusCourse">
              <h4>Denyse Muniz</h4>
              <h5>Gastronomia</h5>
            </div>
            <div className="namePlusCourse">
              <h4>Ana Paula Sabbag</h4>
              <h5>Gastronomia</h5>
            </div>
            
          </div>
          <div className="cep">
              <h5>CEP Jô Rufino e Carlos Aguiar - Senac Taguatinga</h5>
          </div>
          
        </div>
        <div className="back-imgs">
          <img className="img_1" src={images.img2} alt="" />
          <img className="img_2" src={images.img1} alt="" />
        </div>

        <img className="wave" src={images.wave} alt="" />
      </section>

      {/* Apresentação */}
      <section className="apresentacao" data-aos="fade-right" id="Apresentacao">
        <div className="container">
          <div className="imagem" data-aos="zoom-in">
            <img src={images.img2} alt="Evento" />
          </div>

          <div className="texto" data-aos="fade-left">
            <h2>Apresentação do Projeto</h2>
            <p style={{ textAlign: 'justify' }}>
              Nosso evento marcou o início de um novo ciclo de inovação. Confira
              como tudo aconteceu e conheça os objetivos do nosso projeto abaixo.
            </p>
          </div>
        </div>
      </section>

      {/* Carrosel de fotos - Apresentação */}
      <main
        className="App py-10 bg-[#fffaf9] flex flex-col items-center"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Galeria de Fotos do Evento
        </h2>

        <Carousel data-aos="zoom-in">
          {slidesApresentacao.map((s, i) => (
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
              <source src={images.videoEditado} type="video/mp4" />
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
            <p style={{ textAlign: 'justify' }}>
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

        <div className="forma-l"></div>

        <div className="recipe-rigth-content-field">
          <div className="recipe-field">
            <div className="recipe1">
              <div className="recipe1-left-content">
                <img src={images.recipe1} alt="Brigadeiro de Capim-Santo" />
                <p style={{ textAlign: 'justify' }}>
                  O brigadeiro de capim-santo (ou capim-limão) é uma releitura
                  brasileira moderna de um clássico, que une a tradição do
                  brigadeiro à sofisticação dos sabores herbais e aromáticos da
                  culinária contemporânea.
                </p>
              </div>
              <div className="recipe1-rigth-content">
                <h2>Brigadeiro de Capim-Santo</h2>
                <h3>Poliana</h3>
                <br></br>
                <p>
                   <span className="t-001">Ingredientes</span> (para cerca de
                   20 unidades)
                   <br></br>
                   <br></br>✲ 1 lata (395 g) de leite condensado
                   <br></br>✲ 100 ml de leite integral
                   <br></br>✲ 1 colher (sopa) de manteiga sem sal
                   <br></br>✲ 1/2 xícara (chá) de capim-santo picado (folhas
                   frescas)
                   <br></br>✲ Açúcar cristal ou coco ralado fino para enrolar
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
                  <h4 className="chef-name">Poliana</h4>
                  <p>
                    <span className="t-001">Ingredientes</span> (rendimento:
                    aprox. 25 unidades)
                    <br></br>
                    <br></br>
                    <span className="t-001">Para as conchas:</span>
                    <br></br>✲ 120 g de farinha de amêndoas bem peneirada
                    <br></br>✲ 200 g de açúcar de confeiteiro
                    <br></br>✲ 100 g de claras (aprox. 3 unidades)
                    <br></br>✲ 30 g de açúcar refinado
                    <br></br>✲ Corante em gel (opcional)
                    <br></br>
                    <br></br>
                    <span className="t-001">Para o recheio</span> (ganache de
                    chocolate):
                    <br></br>✲ 150 g de chocolate meio amargo picado
                    <br></br>✲ 80 ml de creme de leite fresco
                    <br></br>✲ 1 colher (sopa) de manteiga sem sal
                  </p>

                  <h3 style={{ textAlign: 'justify' }}>
                    Mais que um doce — é uma poesia em forma de sabor. Com sua
                    casquinha leve e crocante que se desfaz ao toque, revela um
                    coração macio e delicado, quase etéreo. Nascido na Itália
                    renascentista e levado à França por Catarina de Médici,
                    encontrou ali seu verdadeiro palco: um país que transformou
                    simples amêndoas e açúcar em arte.
                  </h3>
                </div>

                <img src={images.recipe2} alt="Macaron Francês" />
              </div>
            </div>
            <div className="recipes3-4">
              <div className="recipe3">
                <h1>Caldo verde</h1>
                <h2>Nilda</h2>
                <div className="recipe3-carousel-field">
                  <div className="slider-primary">
                    <div className="slides-primary">
                      {/*radio buttons*/}

                      <input
                        type="radio"
                        name="radio-btn-primary"
                        id="radioP1"
                        checked={currentSlide === 1}
                        onChange={() => setCurrentSlide(1)}
                      />
                      <input
                        type="radio"
                        name="radio-btn-primary"
                        id="radioP2"
                        checked={currentSlide === 2}
                        onChange={() => setCurrentSlide(2)}
                      />
                      {/*slide images*/}

                      <div className="slide-primary first-primary">
                        <img src={images.recipe31} alt="Caldo Verde 1" />
                      </div>
                      <div className="slide-primary">
                        <img src={images.recipe32} alt="Caldo Verde 2" />
                      </div>

                      <div className="navigation-auto-primary">
                        <div className="auto-btn-primary-1"></div>
                        <div className="auto-btn-primary-2"></div>
                      </div>
                    </div>

                    <div className="manual-navigation-primary">
                      <label
                        htmlFor="radioP1"
                        className="manual-btn-primary"
                        onClick={() => setCurrentSlide(1)}
                      ></label>
                      <label
                        htmlFor="radioP2"
                        className="manual-btn-primary"
                        onClick={() => setCurrentSlide(2)}
                      ></label>
                    </div>
                  </div>
                  <h3 style={{ textAlign: 'justify' }}>
                    Em 2011, foi eleito uma das 7 Maravilhas da Gastronomia de
                    Portugal, o que demonstra sua importância cultural e
                    culinária no país.
                    <br></br>
                    <br></br>O caldo verde é presença obrigatória nas festas
                    populares. Está presente nos arraiais
                    <br></br>
                    <br></br>A receita original é feita com couve-galega (
                    cortadas em xifonade) (cortada em tiras muito finas),
                    batatas, azeite, alho e cebola, e tradicionalmente leva uma
                    rodela de chouriço na hora de servir.
                  </h3>
                </div>
              </div>

              <div className="recipe4">
                <h1>Salada farfale</h1>
                <h2>Cleide</h2>
                <div className="recipe4-carousel-field">
                  <div className="slider-secondary">
                    <div className="slides-secondary">
                      {/*radio buttons*/}

                      <input
                        type="radio"
                        name="radio-btn-secondary"
                        id="radioS1"
                        checked={currentSlideSecondary === 1}
                        onChange={() => setCurrentSlideSecondary(1)}
                      />
                      <input
                        type="radio"
                        name="radio-btn-secondary"
                        id="radioS2"
                        checked={currentSlideSecondary === 2}
                        onChange={() => setCurrentSlideSecondary(2)}
                      />
                      <input
                        type="radio"
                        name="radio-btn-secondary"
                        id="radioS3"
                        checked={currentSlideSecondary === 3}
                        onChange={() => setCurrentSlideSecondary(3)}
                      />
                      {/*slide images*/}
                      <div className="slide-secondary first-secondary">
                        <img src={images.recipe41} alt="Salada Farfale 1" />
                      </div>
                      <div className="slide-secondary">
                        <img src={images.recipe42} alt="Salada Farfale 2" />
                      </div>
                      <div className="slide-secondary">
                        <img src={images.recipe43} alt="Salada Farfale 3" />
                      </div>

                      <div className="navigation-auto-secondary">
                        <div className="auto-btn-secondary-1"></div>
                        <div className="auto-btn-secondary-2"></div>
                        <div className="auto-btn-secondary-3"></div>
                      </div>
                    </div>

                    <div className="manual-navigation-secondary">
                      <label
                        htmlFor="radioS1"
                        className="manual-btn-secondary"
                        onClick={() => setCurrentSlideSecondary(1)}
                      ></label>
                      <label
                        htmlFor="radioS2"
                        className="manual-btn-secondary"
                        onClick={() => setCurrentSlideSecondary(2)}
                      ></label>
                      <label
                        htmlFor="radioS3"
                        className="manual-btn-secondary"
                        onClick={() => setCurrentSlideSecondary(3)}
                      ></label>
                    </div>
                  </div>
                  <h3 style={{ textAlign: 'justify' }}>
                    O farfale nasceu na Itália, criado para aproveitar as sobras
                    de massa — mas seu formato de borboleta o tornou símbolo de
                    leveza e beleza à mesa. No Brasil, chamamos de gravatinha.
                    <br></br>
                    <br></br>
                    Aqui, ele ganha cor e vida com a polpa vibrante da pitaya,
                    que tinge a massa fresca com um tom delicado e encantador.
                    Acompanhando, cubos de filé mignon suíno, dourados no azeite
                    com alho, cebola e um toque de pimenta branca.
                    <br></br>
                    <br></br>O molho branco, enriquecido com gorgonzola, envolve
                    a carne e abraça o farfale num encontro cremoso e aromático.
                    Servido em taça, finalizado com uma folha de sálvia e lascas
                    de gorgonzola — um pequeno voo de sabor e elegância.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="recipe-rigth-content">
            <h1>Preparo</h1>
            <p style={{ textAlign: 'justify' }}>
              Além dessas, nasceram outras criações — pratos que pareciam
              traduzir em sabores a própria beleza do instante. Cada receita
              revelava um gesto de carinho, uma busca por harmonia entre o
              simples e o sofisticado. Havia cores que lembravam flores, aromas
              que dançavam pelo ar e texturas que despertavam memórias — tudo se
              encontrava como numa cerimônia silenciosa, onde a comida falava
              por si.
              <br></br>
              <br></br>
              Essas criações, inspiradas pelo espírito de um casamento, uniam
              doçura e delicadeza, intensidade e leveza. Havia o calor dos
              molhos, o brilho dos temperos, o toque das ervas frescas, e o
              mistério dos ingredientes que, juntos, formavam algo maior do que
              a soma de suas partes.
              <br></br>
              <br></br>
              Cada prato, cuidadosamente disposto, era um convite à
              contemplação: uma mistura de arte e emoção, de técnica e
              sentimento. E quando todos se reuniram à mesa, o que se serviu não
              foi apenas comida — mas um pedaço de sonho, de celebração, de
              poesia feita sabor.
            </p>

            <div className="recipe-rigth-content-img-field">
              <img
                src={images.recipeRightContent1}
                alt="Pão delicia"
              />
              <h5>Pão delicia</h5>
              <img
                src={images.recipeRightContent2}
                alt="Brigadeiro Alcoólico"
              />
              <h5>Brigadeiro Alcoólico</h5>
              <img
                src={images.recipeRightContent3}
                alt="Olho de Sogra"
              />
              <h5>Olho de Sogra</h5>
            </div>
          </div>
        </div>
      </section>

      {/* Montagem */}
      <section className="secao-montagem" id="Montagem">
        <div className="container-montagem">
          {/* Título Principal */}
          <h2 className="titulo-secao">
            A Arte da Montagem: Detalhes que Fazem a Diferença 
          </h2>
          {/* Introdução sobre a filosofia de apresentação */}
          <p className="filosofia-apresentacao" style={{ textAlign: 'justify' }}>
            A apresentação é a primeira impressão. Nossos bolos são montados com
            precisão artística, garantindo que a experiência visual seja tão
            rica quanto a gustativa.
          </p>

          {/* BLOCOS COM CÍRCULOS LADO A LADO */}
          <div className="blocos-qualidade">
            {/* BLOCO 1: Círculo Esquerda e Texto Direita */}
            <div className="bloco-item">
              <img
                src={images.montagem1}
                alt="Decoração e Acabamento"
                className="img-circular"
              />
              <div className="bloco-conteudo">
                <h5>1. Decoração e Acabamento</h5>
                <p style={{ textAlign: 'justify' }}>
                  Cada detalhe do bolo é pensado com intenção e harmonia.
                  Utilizamos técnicas de confeitaria moderna para criar
                  composições que agradam o olhar e preparam o paladar para o
                  que está por vir.
                </p>
                <ul>
                  <li>
                    <strong> ✲Foco na Simetria:</strong> Usamos proporções
                    perfeitas para guiar o olhar.
                  </li>
                  <li>
                    <strong> ✲Contraste de Cores:</strong> Coberturas e
                    decorações destacam a elegância do bolo.
                  </li>
                  <li>
                    <strong> ✲Texturas Variadas:</strong> Combinações de
                    texturas criam interesse visual.
                  </li>
                </ul>
              </div>
            </div>

            {/* BLOCO 2: Texto Esquerda e Círculo Direita */}
            <div className="bloco-item">
              <img
                src={images.montagem2}
                alt="Estrutura e Estabilidade"
                className="img-circular"
              />
              <div className="bloco-conteudo">
                <h5>2. Estrutura e Estabilidade</h5>
                <p style={{ textAlign: 'justify' }}>
                  Garantimos que cada bolo seja estruturado com perfeição,
                  mantendo a elegância visual. A proporção entre os andares e a
                  estabilidade são cruciais para uma apresentação impecável.
                </p>
                <ul>
                  <li>
                    <strong> ✲Camadas Bem Distribuídas:</strong> Cada andar é
                    equilibrado e proporcional.
                  </li>
                  <li>
                    <strong> ✲Recheios de Qualidade:</strong> Ingredientes
                    premium garantem sabor e textura.
                  </li>
                  <li>
                    <strong> ✲Finalização Sofisticada:</strong> Toque final com
                    flores, frutas ou elementos decorativos.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="conclusao-montagem">
            <p style={{ textAlign: 'justify' }}>
              É essa dedicação em cada etapa, desde a seleção dos ingredientes
              até a montagem final, que transforma um simples bolo em uma
              <strong> experiência gastronômica de luxo </strong>
            </p>
          </div>
        </div>
        <footer className="rodape">
    <p>
        Desenvolvido por <span className="startup-name">Nexacode</span>. | Todos os direitos reservados. © 2025
    </p>
</footer>
      </section>
    </>
  );
}

export default App;