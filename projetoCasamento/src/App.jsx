import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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

      <section id="section-1-hero">
        <img src="src\assets\wave.svg" alt="" />
      </section>

      {/*Apresentação*/}

      <section id="section-2-apresentacao" className='apresentacao'>
        <div className='container'>
          <div className='imagem'>
            <img src="./src/assets/img/" alt="evento"/>

            <div className='texto'>
              <h2>Apresentação do Projeto</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium vel fugit iusto minima, suscipit magni voluptatibus ipsum a cum laboriosam repellendus alias quidem. Error quae soluta sunt ab molestiae quasi.</p>`kl`
            </div>  
          </div>
        </div>
      </section>
    </>
  )
}

export default App
