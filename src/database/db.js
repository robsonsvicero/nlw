// Importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()

// Criar o objeto que irá fazer operções no BD
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// Utilizar o objeto de BD para nossas operações
db.serialize(() => {
// //   // Criar tabelas
// db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name TEXT,
//         image TEXT,
//         address TEXT,
//         address2 TEXT,
//         state TEXT,
//         city TEXT,
//         items TEXT
//     );
//   `)

// // Inserir dados nas tabelas
// const query = `
//       INSERT INTO places (
//         name,
//         image,
//         address,
//         address2,
//         state,
//         city,
//         items
//       ) VALUES (?,?,?,?,?,?,?);
//       `

// const values = [
//   "Colectoria",
//   "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
//   "Guilherme Gemballa, Jardim América",
//   "N° 260",
//   "Santa Catarina",
//   "Rio do Sul",
//   "Resíduos Eletrônicos, Lâmpadas"
// ]

// function afterInsertData(err) {
//   if (err) {
//     return console.log(err)
//   }

//   console.log("Cadastrado com sucesso!")
//   console.log(this)
// }

// db.run(query, values, afterInsertData)

// // Consultar os dados nas tabelas
// db.all(`SELECT * FROM places`, function (err, rows) {
//   if (err) {
//     return console.log(err)
//   }

//   console.log("Aqui estão seus registros: ")
//   console.log(rows)
// })

//  Deletar dados nas tabelas
db.run(`DELETE FROM places WHERE id = ?`, [6], function (err) {
  if (err) {
    return console.log(err)
  }

  console.log("Registro deletado com sucesso!")
})


})