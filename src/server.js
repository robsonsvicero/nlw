const express = require("express")
const server = express()

// configurar past public
server.use(express.static("public"))

// Utilizando Template Engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})

// configurar rota/caminho da minha aplicação
// página inicial
// req: REQUISIÇÃO
// res: RESPOSTA
server.get("/", (req, res) => {
  return res.render("index.html")
})

server.get("/create-point", (req, res) => {
  return res.render("create-point.html")
})

server.get("/search", (req, res) => {
  return res.render("search-results.html")
})

//ligar o servidor
server.listen(3000)