import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {
  // Carregamento de dados direto via código
  // const item1 = {
  //   name: 'Rick Sanchez',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  // }

  // const item2 = {
  //   name: 'Morty Smith',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  // }

  // const item3 = {
  //   name: 'Summer Smith',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  // }

  // const item4 = {
  //   name: 'Beth Smith',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
  // }

  // const itens = [item1, item2, item3, item4]

  const [itens, setItens] = useState([])

  // Carregamento de dados via API (Backend)
  async function carregarDadosApi() {
    // Declarar a URL da API
    const apiUrl = 'https://rickandmortyapi.com/api/character/'

    // Preparar e Executar a Requisição
    const response = await fetch(apiUrl)

    //console.log(response)

    const body = await response.json()

    //console.log(body)

    // Extrair a propriedade results do body
    // Essa propriedade contém a lista de itens
    const results = body.results

    console.log(results)

    // Atualiza o estado "itens" com os resultados da API
    setItens(results)

    // TODO: Desafio p/ volta do intervalo:
    // Enviar os "results" para o JSX, exibindo
    // um card para cada item da API

    // Depois que fizermos isso, vamos subir o site na nuvem
  }

  // Protegemos o carregamento de dados da API para chamar
  // apenas uma única vez
  useEffect(function () {
    // Chamando a função que carrega dados da API
    carregarDadosApi()
  }, [])

  return (
    <>
      <div className="cards">
        {itens.map((item, i) => <Card item={item} key={i} />)}
      </div>
    </>
  )
}

export default App
