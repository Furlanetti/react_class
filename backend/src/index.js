const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
/** 
 * Métodos HTTP
 * 
 * get: Buscar informações no backend (carrega na página)
 * post: Criar informações no backend (para testar tem q usar imnsominia ou postman)
 * put: Alterar informações no backend (para testar tem q usar imnsominia ou postman)
 * delete: Deletar informações no backend (para testar tem q usar imnsominia ou postman)
 * 
*/

/**
 * Tipos de parametros
 * 
 * Query: parametros nomeados enviados na rota após '?' (filtros, paginação,etc) "/users?category=1"
 * Route: Parametros utilizados para identificar recursos (para acessar um usuário especifico) "/users/1"
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos (JSON)
 */

app.listen(3333);
