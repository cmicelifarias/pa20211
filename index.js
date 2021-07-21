//index.js
const Cliente = require("./Cliente");
const Endereco = require("./Endereco");
 
const enderecoLuiz = new Endereco("Tupis", 125, "São Vicente", "Gravatai", "RS");
const clienteLuiz = new Cliente("Luiz", 31, enderecoLuiz, "contato@luiztools.com.br");
 
console.log(Cliente.idadeAdulto);
Cliente.idadeAdulto = 21;
console.log(Cliente.idadeAdulto);