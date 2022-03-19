import { createServer } from 'http';
import { once } from 'events';
import { randomUUID } from 'crypto'; // nativo do Node, mais rápido que o package uuid

console.log('Starting server...');

const Database = new Map(); // É NOVO! Veio p/ competir com Object, mas estrutura diferente

// Por padrão, tudo que retorna no req deve ser uma string
function respondJSON(data, res){
    return res.end(JSON.stringify(data));
}

// Rota
async function handler(req, res) {
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('Hello World');
    const { method } = req;

    // Listar os itens do Database
    if(method === 'GET') {
        return respondJSON([...Database.values()], res);
    }

    // Inserir um novo item no Database
    if(method === 'POST') {
        const body = JSON.parse(await once(req, 'data')); // Tirar o objeto de dentro do req.body
        const id = randomUUID(); // Gerar o ID
        Database.set(id, body); // Inserir no Database
        console.log('Received: ', body);
        return respondJSON({ok: true}, res);
    }

    // Deletar um item do Database
    if(method === 'DELETE') {
        Database.clear();
        return respondJSON({ok: true}, res);
    }
}

export default createServer(handler); //poderia passar o arquivo de rotas aqui
