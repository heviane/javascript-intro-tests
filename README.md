# Introduction to testing in javascript 🚀

Tests e2e on web APIs with Node and Jest.

O objetivo é criar uma API e testá-la por fora, do ponto de vista do cliente final.

- **Teste unitário**: Testar funcionalidade de forma isolada, sem dependências (ex: banco, infraestrutura, etc.), geralmente mockada e off-line. Basicamente o código precisa testar um valor de entrada e um valor de saída.
- **Teste integração**, **Teste Funcional** ou **Teste End-to-End**: Testar iteração de uma funcionalidade com outra funcionalidade, ou com uma outra ponta da comunicação (ex: client browser, terminal, frontend, etc.).
O principal desáfio é fazer com que o ambiente de um teste não suje o ambiente do outro teste, ou seja, que os testes sejam independentes.

## Requeriments ✅

- [Node](https://nodejs.org)
- [jest](https://jestjs.io)
O jest implementa tudo na pasta globals `@jest/globals`, ou seja, injeta do Globalthis do node.
Tudo que está na pasta globals não precisa ser importado novamente, pois já está injetado, disponível para uso.
**BOA PRÁTICA:** Não pegar nada global, sempre importar, para ser declarativo. Assim, fica documentado o que está sendo usado e de onde está vindo.
- Outras opções para testes:
  - [mocha](https://mochajs.org)
  - [sinon](https://sinonjs.org)
  - [supertest](https://www.npmjs.com/package/supertest).
    Comunidade tem usado bastante para fazer requisições de testes, ao invé de usar axios, fetch, etc.
    Bastante usado no express no passado.
    - Qual a diferença entre axios e supertest?
    O superset define uma porta, o dev não precisa ficar definindo porta. Também tem algumas asserções prontas, ele é feito para validar header, response, etc. de forma mais automatizada.

## Requirements Native Modules ✅

- [http](https://nodejs.org/dist/latest-v17.x/docs/api/http.html)
**createServer**
- [events](https://nodejs.org/dist/latest-v17.x/docs/api/events.html)
**once**
- [crypto](https://nodejs.org/dist/latest-v17.x/docs/api/crypto.html)
**randomUUID**: Mais rápido que o package [uuid](https://www.npmjs.com/package/uuid)

## Project Structure

- [index.js](./src/index.js): Gerencia a infraestrutura.
- [server.js](./src/server.js): Inicializa o servidor.

## Create the project 🚧

```bash
    #!/bin/bash

    ## Inicializar um projeto node (package.json):
    npm init 

    ## No package.json, script: "start":"node src/index.js"
    npm start 
```

- Incluir no **package.json** o `"type":"module"` para usar as funcionalidades mais recentes.
  - import e export
  - index.js (caso contrário, teria que ser .mjs para poder usar import e export)

## Run project locally 🚧

```bash
    #!/bin/bash

    ## Clonar o projeto (OU realizar um FORK):
    git clone 
    cd javascript-intro-tests

    ## Inicializar o projeto:
    npm install

    ## Executar o projeto:
    npm start
```

## Jest 🚧

```bash
    #!/bin/bash

    ## To initialize JEST (jest.config.mjs):
    npx jest --init

    ## To run the tests:
    npm t
```

- **Test Environment:**
  - Node
  - jsdom (browser-like)
- **Coverage Reports**
  - Somente para testes unitários.

O Jest não está preparado para trabalhar com o **type:module**, então é necessário realizar um ajuste no **package.json**, criar a variável de ambiente **NODE_OPTIONS**:

- Alterar `"test": "jest"` para `"test": "NODE_OPTIONS='--experimental-vm-modules' jest"` OR `"test": "NODE_OPTIONS='--experimental-vm-modules --no-warnings' jest --watchAll"`.

  - **--no-warnings**: Para não mostrar os alertas.
  - **--watchAll**: Roda os testes automaticamente a cada modificação no código (Live Reloading).

## References for Credits 👍

- Youtube: [Live Coding](https://www.youtube.com/watch?v=hQB139HP3GE)
- Forked from: [ErickWendel/live-e2e-nodejs-and-challenges](https://github.com/ErickWendel/live-e2e-nodejs-and-challenges)

## References for Studies 📖

## To Research ⁉️

- **Teste Mutável**, vai mudando comportamento do código.
