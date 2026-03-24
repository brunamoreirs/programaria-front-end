const body = document.body
const themeToggle = document.getElementById("themeToggle")
const scrollTopBtn = document.getElementById("scrollTop")
const enterCinema = document.getElementById("enterCinema")
const form = document.getElementById("memoryForm")

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light")
})

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
})

enterCinema.addEventListener("click", () => {
  document.getElementById("cinema").scrollIntoView({ behavior: "smooth" })
})

const revealElements = document.querySelectorAll(
  ".hero-content, .card, .pillar, .about-disney, .folder, .memory-box, footer"
)

function revealOnScroll() {
  const windowHeight = window.innerHeight

  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top
    if (top < windowHeight * 0.85) {
      el.classList.add("visible")
    }
  })
}

window.addEventListener("scroll", revealOnScroll)
window.addEventListener("load", revealOnScroll)

form.addEventListener("submit", event => {
  event.preventDefault()

  const nome = document.getElementById("nome").value.trim()
  const email = document.getElementById("email").value.trim()
  const mensagem = document.getElementById("mensagem").value.trim()

  if (nome.length < 3) {
    alert("🎭 O nome precisa ter pelo menos 3 letras.")
    return
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("📧 Informe um e-mail válido.")
    return
  }

  if (mensagem.length < 10) {
    alert("🎬 Sua memória precisa ter pelo menos 10 caracteres.")
    return
  }

  alert("✨ Memória enviada com sucesso! Obrigada por compartilhar.")
  form.reset()
})
