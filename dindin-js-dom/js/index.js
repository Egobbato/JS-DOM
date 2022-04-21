//GERAL
//1 - Mudar a cor de todo o Header

const header = document.getElementById("header");
header.style.backgroundColor = "#2E948A";

//2- No menu do Header está faltando o link do item Cursos, que deve direcionar para cursos.html

const cursos = document.querySelector("#header nav a");

cursos.setAttribute("href", "cursos.html");

//Home

//1. No banner da home, está faltando centralizar os elementos filhos da section que
// tem o id#introducao.

const introducao = document.getElementById("introducao");
introducao.style.justifyContent = "center";

// 2. Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".

const depoimentos = document.querySelector(".depoimento h3");
depoimentos.innerHTML = "O Que Falam Sobre Nós";

// 3. Na etapa de blog, o título deveria ser "Mais conteúdo pra você".

const blog = document.getElementsByTagName("h3")[1];
blog.innerHTML = "Mais Conteudos pra Você";

// 4. Todos os textos que estiverem com a classe.titulodevem apresentar todas as
// letras maiúsculas.

const titulo = document.getElementsByClassName("titulo");
for (let index = 0; index < titulo.length; index++)
  titulo[index].style.textTransform = "uppercase";

// 5. o botão "ver todos os posts" deve ter um link que direciona para o arquivo
// blog.html

const posts = document.getElementById("todos_posts");
posts.setAttribute("href", "blog.html");

// 6. Adicionar um novo curso na section que contém o id
//investimentos_poupando_independencia:

const novaDiv = document.createElement("div");
novaDiv.setAttribute("id", "independencia");

document
  .getElementById("investimentos_poupando_independencia")
  .appendChild(novaDiv);

novaDiv.innerHTML = `

<img src="./imagens/independencia_financeira.png"
width="180px" alt="Independência Financeira">
<h2>Independência Financeira</h2>
<p>Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore
eu fugiat nulla pariatur. </p>
<a class="comecar_agora" href="./curso.html">começar
agora</a>

`;

// const novaImg = () => {
//   return `
//     <div id="independencia">
//     <img src="./imagens/independencia_financeira.png"
//     width="180px" alt="Independência Financeira">
//     <h2>Independência Financeira</h2>
//     <p>Duis aute irure dolor in reprehenderit in voluptate
//     velit esse cillum dolore
//     eu fugiat nulla pariatur. </p>
//     <a class="comecar_agora" href="./curso.html">começar
//     agora</a>
//     </div>
//     `;
// };
// novaDiv.innerHTML = novaImg();
