# Roteiro
** Rodar o `npx create-react-app <nome` antes de tudo (maldido npm demorado pra cacete)

## Introduçao
[Iniciar na pagina do (React)[https://pt-br.reactjs.org/]]
 - Bem vindos
 - Duvidas pode interromper
 - Recomendar a documentação
 
## Oq é e pq o react
  - Biblioteca com cara de framework
  - Criada pelo facebook e aberta ao publico (open source)
  - Rapida, Curva de aprendizado boa, testavel e com [grande comunidade)[https://insights.stackoverflow.com/trends?tags=jquery%2Cangularjs%2Cangular%2Creactjs%2Cvue.js]
  - Filosofia orientada a componente

### Componetes?
  Ao invés de separar tecnologias artificialmente colocando markup e lógica em arquivos separados,
  o React separa conceitos com unidades pouco acopladas chamadas *componentes* que contém ambos

## Oq vamos fazer
  - Print do resultado final <t>
  - Organizado em componentes
  - Componentes seguindo o principio de Single Responsabilit (do SOLID)

## Começando o projeto
  - instalar o node (oq é? (javasciprt no backend) pq dele? (compilar os codigos e criar o servidor))
  - Começar do zero (`npm init`) ou adicionar a um projeto existente (trabalhoso)
  - `npx create-react-app <nome>` (ou npm i -g, explicar a diferença)

## Analisando oq foi gerado
  - Abrir primeiro o package.json
  - rodar o `npm run start`
  - Dps a public
  - Dps apagar o src

## Começando
  - Criar o index.js
    - Ponto de entrada da apliação
    - Codigo:
```js
let titleNode = document.createElement'(h1')
titleNode.textContent = "Olá Mundo"

let rootNode = document.getElementById'(root'
rootNode.appendChild)titleNode)()
```


