# SQL Query Builder

- O que é um SQL Query Builder - 04:07: Nessa aula aprenderemos o que é um SQL Query Builder e quais as vantagens de utilizá-lo em relação a um banco de dados específico.
  <img src="./img/node1.jpg">

- Instalando Knex.js - 00:55 - Nessa aula aprenderemos como instalar o Query Builder Knex.js

  - Instalação: [Knex.js - A SQL Query Builder for Javascript](http://knexjs.org/#Installation-node) - `npm install knex --save`, `npm install sqlite3 --save`
    <img src="./img/knex.png">

- Configurando o Knex.js - 04:44 - Nessa aula aprenderemos como configurar o Knex.js para que ele possa se comunicar com o nosso banco de dados SQLite.
  - `npx knex init`
  - Configurar o arquivo: `knexfile.js`
  ```js
  const path = require("path");
  module.exports = {
    development: {
      client: "sqlite3",
      connection: {
        filename: path.resolve(__dirname, "src", "database", "database.db"),
      },
      useNullAsDefault: true,
    },
  };
  ```
- Conceito de <b>Migrations</b> - 02:55 - Nessa aula aprenderemos os conceitos de Migrations suas vantagens e seus métodos (`UP` e `DOWN`)

  - é uma forma de versionar a base de dados
  - migrations trabalha na manipulação da base de dados: criando, alterando ou removendo.
  - Métodos de uma Migrations:
    - <b>UP:</b> método responsável por criar ou alterar algo no banco de dados
    - <b>DOWN:</b> responsável pelo rollback, ou seja, responsável por desfazer as alterações realizadas pela migration.

- Migrations para Notes - 08:49 - Nessa aula criamos a migration do projeto utilizando Knex e executaremos ela para que as tabelas sejam inseridas no banco de dados.

  - No terminal executar o comando: `npx knex migrate:make createNotes`
  - Criar a tabela: `npx knex migrate:latest`
  - Adicionar no package.json o script: "migrate": "knex migrate:latest"
  - Rodar o script: `npm run migrate`

- NPM vs NPX - 03:10
- Primary key e Foreign key - 05:22
- Cardinalidade - 02:32
- Migrations para Link e Tag - 07:16
- Cadastrando nota - 09:58
- Exibindo nota - 04:24
- Deletando nota - 03:14
- Listando notas - 03:28
- Operador Like - 02:14
- Filtro WhereIn - 03:21
- Conceito de Inner Join - 08:53
- Aplicando Inner Join - 03:31
- Map e Filter - 10:19
- Obtendo tags da nota - 01:22
- Listando Tags - 06:31
- Testando tudo - 09:02
- Conclusão - 10:17
