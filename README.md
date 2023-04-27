<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Lucdomingues/LucTunes/edit/main/README.md">
    <img src="https://github.com/othneildrew/Best-README-Template/raw/master/images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Mongodb-Commerce</h3>

  <p align="center">
    Projeto para desenvolvimento de query's em MongoDb
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Índice</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#construído-com">Construído com</a></li>
      </ul>
    </li>
    <li>
      <a href="#começando">Começando</a>
      <ul>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#contribuindo">Contribuindo</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>



<!-- SOBRE O PROJETO -->
# Sobre o projeto

## Projeto Commerce

Este projeto tem como objetivo praticar os conceitos aprendidos no curso de MongoDB por meio do uso do banco de dados commerce. Esse banco contém dados fictícios do cardápio do McDonald's, como ingredientes, valores nutricionais e dados de vendas.

<details>
  <summary>
    <strong>🐳 Como usar o Docker para este projeto</strong>
  </summary><br>

  - Siga os seguintes passos:

  1. Acesse o terminal na raiz da pasta do projeto;
  2. Crie um container com um volume apontando para a pasta do projeto `docker run -d --name=nomeDoContainer -v "$PWD:/app" -p 27017:27017 mongo:5.0`;
  3. Com o container em execução, acesse o terminal do container `docker exec -it nomeDoContainer bash`;
  4. No terminal do container, acesse o diretório `/app` mapeado no volume conforme o passo 2;
  > Para restaurar o banco de dados é necessário que você esteja dentro do diretório `/app`. Para mais detalhes, veja o tópico: "♻️ Restaurando o banco de dados `commerce`".
  Se por algum motivo a execução do container for finalizada, basta iniciá-lo novamente com o comando `docker start nomeDoContainer` e seguir a partir do passo 3.

</details>

<details>
  <summary>
    <strong>♻️ Restaurando o banco de dados `commerce`</strong>
  </summary><br>

  > ⚠️ **Aviso:** Certifique-se que tenha seguido os passos do tópico: "🐳 Como usar o Docker para este projeto", pois eles são determinantes para que siga as orientações abaixo.

  Dentro do container, no diretório `/app`, execute o seguinte comando para restaurar a base de dados `commerce`:

  ```sh
  DBNAME=commerce ./scripts/resetdb.sh assets/produtos
  ```

  - A execução desse script criará um banco de dados chamado `commerce` e importará os dados para a coleção `produtos`.

</details>


<p align="right">(<a href="#readme-top">de volta para o topo</a>)</p>



### Construído com
* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="50" height="50"/>
* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" alt="docker" width="50" height="50"/>
* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="java-script" width="50" height="50"/>
* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" alt="node" width="50" height="50"/>
* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" alt="git" width="50" height="50"/>
<p align="right">(<a href="#readme-top">de volta para o topo</a>)</p>



<!-- COMEÇANDO -->
## Começando

Para fazer um **COPY** desse projeto em sua máquina localmente, siga às etapas abaixo.

### Instalação

1. Clone o repositório

  - Use o comando: 
   ```sh
   git clone git@github.com:Lucdomingues/Mongodb-Commerce.git
   ```
  2. Instale as dependências
   ```sh
   npm install
   ```
  3. Crie uma branch a partir da branch `master`
  - Verifique que você está na branch `master`
    ```sh
    git branch
    ```
  - Se não estiver, mude para a branch `master`
    ```sh
    git checkout master
    ```
  - Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    ```sh
    git checkout -b nome-da-branch
    ```
  4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

  - Verifique que as mudanças ainda não estão no _stage_
    ```sh
    git status
    ```
  - Adicione o novo arquivo ao _stage_ do Git
    ```sh
    git add .
    git status
    ```
  - Faça o `commit` inicial
    ```sh
    git commit -m '[feat]new-feature'
    git status
    ```
<p align="right">(<a href="#readme-top">de volta para o topo</a>)</p>

<!-- CONTRIBUINDO -->
## Contribuindo

As contribuições são o que torna a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Quaisquer contribuições que você fizer são **muito apreciadas**.

Se você tiver uma sugestão para melhorar isso, bifurque o repositório e crie uma solicitação pull. Você também pode simplesmente abrir um problema com a tag "melhoria".
Não se esqueça de dar uma estrela ao projeto! Obrigado novamente!

1. Faça um Fork do projeto
2. Crie sua branch (`git checkout -b feature/newFeature`)
3. Commit suas mudanças (`git commit -m '[feat]Add some newFeature'`)
4. Dê um push em sua branch (`git push origin feature/newFeature`)
5. Abra um Pull Request

<p align="right">(<a href="#readme-top">de volta para o topo</a>)</p>

<!-- CONTATO -->
## Contato

EMAIL - lojalucc@outlook.com

LINKEDIN - [https://www.linkedin.com/in/lucas-domingues-developer/](https://www.linkedin.com/in/lucas-domingues-developer/)

<p align="right">(<a href="#readme-top">de volta para o topo</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Lucdomingues/Mongodb-Commerce.svg?style=for-the-badge
[contributors-url]: https://github.com/Lucdomingues/Mongodb-Commerce/graphs/contributors
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/lucas-domingues-developer/
[product-screenshot]: images/screenshot.png
