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

## Começando a velha moda
  - Criar o index.js
    - Ponto de entrada da apliação
    - Codigo:
```js
// index.js

const titleNode = document.createElement('h1')
titleNode.textContent = "Ola Mundo"

const root = document.getElementById('root')
root.appendChild(titleNode)
```

```css
/* index.css */
html, body, #root {
  margin: 0;
  height: 100%;
  color: azure;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(to right, #606c88, #3f4c6b);
}
```

Exemplo mais complexo de como a coisa não escala
```js
import './index.css'

const titleNode = document.createElement('h1')
titleNode.textContent = "Ola Mundo"

const inputNode = document.createElement('input')
inputNode.setAttribute('placeholder', 'Procure o usuário aqui')

const labelNode = document.createElement('label')
labelNode.textContent = "Usuário: ";
labelNode.appendChild(inputNode)

const root = document.getElementById('root')
root.appendChild(titleNode)
root.appendChild(labelNode)
```

## React é a luz
Trocar o final para:
```js
const root = document.getElementById('root')
ReactDOM.render("Hello React", root)
```
Usando tags em componentes:
```js
const firstComponent = React.createElement('h1', {}, 'Hello React Component');

const root = document.getElementById('root')
ReactDOM.render(firstComponent, root)
```
Agora vamos deixar o babel fazer o trabalho
```js
const msg = "Ola do JSX"
const firstComponent = <h1>{msg}</h1>;

const root = document.getElementById('root')
ReactDOM.render(firstComponent, root)
```
Observar que o React é um importe obrigatorio
Interpolação com {}

## Criando seu componente

```js
class Hello extends React.Component {
    render () {
        return <h1>Ola do Component</h1>
    };
}

function Ola () {
    return <h1>Ola do Componente funcional</h1>
}

const FirstComponent = () => (
    <>
    <Hello />
    <Ola />
    </>
);

const root = document.getElementById('root')
ReactDOM.render(<FirstComponent />, root)
```

### Passando parâmetros
Separar entre pastas

```js
// index.js
import ReactDOM from "react-dom";
import React from "react"
import App from './components/App'

import './index.css'

ReactDOM.render(<App />, document.getElementById('root'))

// components/App/index.js
import React from 'react'
import './style.css'

import Hello from '../Hello'

export default () => (
    <div className="app">
        <Hello name="Azank" />
    </div>
)

// components/App/index.css
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

// components/Hello/index.css
import React from 'react'

export default  ({name}) => <h1>Ola {name}</h1>
```

### Criação do tile
vamos precisar de ícones: `npm i react-icons`

TodoTile/
```js
import React from 'react'

import Button from '../TodoCheckButton'

import './style.css'

export default ({content}) => (
    <div className="todo-tile-wrapper">
        <h3 className="todo-tile-content">{content}</h3>
        <Button />
    </div>
)
```

```css
.todo-tile-wrapper {
    border: 2px solid;
    margin-top: 1em;
    padding: 0.5em 1em;
    width: calc(100% - 4em);
    max-width: 40em;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

TodoButton/
```js
import React from 'react'
import { BiCheck } from "react-icons/bi";
import './style.css'

export default () => (
    <div className="todo-button todo-button-selected">
        <BiCheck values={{className: "todo-button-icon"}}/>
    </div>
)
```



