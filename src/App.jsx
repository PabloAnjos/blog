import './App.css'
import { Cards } from './components/Cards/Cards'
import { Header } from './components/Header/Header'

function App() {
  return (
    <>
        <Header />

        <section>
                  <div className='container-cards'>
                        <Cards
                          data={"17 de ago, 2024"}
                          title={"O que é linguagem de programação? Conheça as principais"}
                          content={"Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando."}
                        />
                        <Cards
                          data={"12 de jul, 2024"}
                          title={"GitHub agora permite fazer login sem precisar de senha"}
                          content={"O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores."}
                        />
                        <Cards
                          data={"21 de jun, 2024"}
                          title={"Por que os hiperlinks são azuis em sua maioria?"}
                          content={"Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor."}
                        />
                  </div>
        </section>
    </>
  )
}

export default App
