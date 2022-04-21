// PáginaContato

// 1. O formulário não está funcionando, o atributo action deve mandar para url
// sucesso.html
const formulario = document.getElementsByTagName("form")[0];
formulario.setAttribute("action", "sucesso.html");

// 2. Após o campo de email, precisamos de um novo campo para que o usuário
// adicione também um número de telefone.

const novoInput = document.createElement("input");
novoInput.setAttribute("type", "tel");
novoInput.setAttribute("required", true);
novoInput.setAttribute("placeholder", "fone");
const textArea = document.querySelector("textarea");
formulario.insertBefore(novoInput, textArea);

// 3. O campo de mensagem está ultrapassando o tamanho do elemento pai.
// Podemos resolver adicionando o atributo box-sizing:border-box;
const campoMensagem = document.getElementsByTagName("textarea")[0];
campoMensagem.style.boxSizing = "border-box";

// 4. O botão não está do tamanho adequado, precisa ter uma largura maior;
const botao = document.getElementById("enviar");
botao.style.paddingRight = "60px";
// 5. Abaixo da section do formulário, adicione uma seção de comentário igual a
// página Home.
