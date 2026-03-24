const form = document.getElementById("formulario");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (nome && email && mensagem) {
    if (email.includes("@")) {
      alert("Mensagem enviada com sucesso!");
      form.reset();
    } else {
      alert("Por favor, informe um e-mail válido.");
    }
  } else {
    alert("Por favor, preencha todos os campos obrigatórios.");
  }
});
