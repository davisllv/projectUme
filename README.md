<h1 align="center">
  <img alt="Ume" title="UME" src="https://raw.githubusercontent.com/davisllv/projectume/7e9b987322657244d2b62f3d5d6be3f018005a78/assets/logo_ume.svg" width="100px" />
</h1>

<p align="center">
 <img src="https://github.com/davisllv/projectume/blob/main/assets/Recording%202022-02-04%20at%2020.17.11.gif?raw=true" alt="PRs welcome!" />
</p>

<br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Reactjs
- Nodejs
- Nestjs
- Express
- Typescript
- SQLite
- Prisma

## 🗺 Front-End

Foi criado uma tela simples com a utilização de Reactjs e outras bibliotecas que achei necessária para o front-end, como o axios, para conseguir estabelecer uma conexão entre o front-end e api rest que foi criada no back-end.

Primeiramente, para dar inicio ao projeto do front-end, deve-se acessar a pasta web, pois utilizei o monorepo, ou seja, tudo ficou unificado em apenas um lugar, essa decisão foi tomada para facilitar e agilizar os comits e a organização das pastas, além de ser um método utilizado por grandes empresas e projetos. Após o acesso a pasta **web** deve-se carregar todos as depêndencias do projeto, para isso utilize o comando **yarn** no comand line do próprio vscode. Após tudo isso, é necessário rodar o comando **yarn start**, para subir um projeto na web, com o Ip **localhost:3000**, para ficar totalmente responsivo seu projeto.
Fui utilizado a cor verde em quase toda a aplicação web, pois o cactus é o arbusto que eu mais me identifico, visto que é ser que dura e se adapta em qualquer ambiente, devido a essa força que ele possui eu acabei escolhendo está cor.

## 🗄 Back-End

O Back-end foi criado com a tecnologia Nestjs, que é um framework do próprio Nodejs, além de um outro framework para a documentação da Api o **Swagger**. Nele não há muito contato com o usuário, pois o mesmo enviará os comandos da web para esse local, onde será processado os dados enviados para que seja retornado algo ao cliente. Nesse lugar que serão tratados os erros que acontecerem, erro este que só ocorrerá caso sejam enviados comandos o suficiente para deixar o "Robô" de fora da área demarcada, pois da web só poderão vir comandos corretos, pois apenas poderá ser digitado M, R e L, pois foi utilizado uma Regex para evitar a digitação de qualquer dado errado. Para iniciar o projeto do back-end deve ser necessário acessar a pasta **server**, digitar o comando **yarn** para baixar as depêndencias, após serem todas instaladas, e **yarn run start: dev** para rodar o projeto e iniciar o back-end de forma correta, com o ip **localhost:3333**. Após ser iniciado o back-end, caso o usuário queira consumir a documentação da api com o framework **Swagger**, basta acessar **localhost:3333/ume**

## 📦 SQLITE

Sistema Gerenciador de Banco de Dados Relacional, foi utilizado ele, devido a sua simplicidade, a objetividade, simplicidade e velocidade em rodar em banco de dados pequenos e que possuem poucas requisões. Foi criado uma tabela chamanda **MovimentRecords** para captar todas as movimentações do robo, logo, ele armaneza a posição anterior e a posição do final do robo após o processamento do comando. O esquema utilizado foi para armanezar o id, com o tipo de um uuid, valores de x, y e a posição final anterior e valores de x, y e a posição final do valor atual.



**⚠ WARNING**

** Para trabalhar de forma correta com esse projeto, é obrigátorio rodar o front-end e o back-end JUNTOS**.


---
