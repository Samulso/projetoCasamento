import { useState, useEffect } from 'react'
import Carousel from "/src/components/Carousel"
import './App.css'



function LandingPage() {
  const fotosRef = useRef(null)

  const scrollToFotos = () => {
    fotosRef.current?.scrollIntoView({ behavior: "smooth" })
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
}
export default function App() {
  const [count, setCount] = useState(0)
  const slides = [
    "/src/assets/img/img_1.png",
    "/src/assets/img/img_1.png",
    "/src/assets/img/img_1.png",
    "/src/assets/img/img_1.png",

  
  ]
exo
  return (
    <>
      <div className="header" id="header">
        <nav className="navbar" id="navbar">


          <ul id="nav_list">
            <li class="nav-item active">
              <a href="#inicio">Início</a>
            </li>
            <li class="nav-item">
              <a href="#Preparo">Preparo</a>
            </li>
          </ul>

          <img className="header-img" src="\src\assets\img\logo.png" alt="" />

          <ul id="nav_list">
            <li class="nav-item">
              <a href="#Montagem">Montagem</a>
            </li>
            <li class="nav-item">
              <a href="#Apresentacao">Apresentação</a>
            </li>
          </ul>
        </nav>
      </div>

      <section className="hero-section" id="section-1-hero">
          <div className="overlay-content">
            <h1>“Doce união entre sabores e olhares.”</h1>
            <p>Fotos capturadas pelos alunos de Desenvolvimento de Sistemas</p>
          </div>
          
              <img className="img_1" src="\src\assets\img\img_1.png" alt="" />
              <img className="img_2" src="\src\assets\img\img_2.png" alt="" />

        <img className="wave" src="src\assets\wave.svg" alt="" />
      </section>
{/* Apresentação */}
      <section className='apresentacao'>
        <div className="container">
          <div className="imagem">
            <img src="\src\assets\img\img_2.png" alt="Evento" />
          </div>

            <div className="texto">
              <h2>Apresentação do Projeto</h2>
              <p>
                Nosso evento marcou o início de um novo ciclo de inovação. Confira como tudo aconteceu e conheça os objetivos do nosso projeto.
              </p>
              <button>Saiba mais</button>
            </div>
        </div>
      </section>

      {/* Carrosel de fotos - Apresentaçã */}

      <main className="App">
        <div className="max-w-lg">
          <Carousel></Carousel>
          {slides.map((s) => (
            <img src={s} />
          ))}
        </div>
      </main>

    
    </>
  )
}


