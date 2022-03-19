import {expect, test, describe} from '@jest/globals';// test é concorrente do it
import superTest from 'supertest';
// Se já tem servidor p testar basta passar a url, ex: const response = await superTest('localhost');
// Se não tem um servidor, se precisa subir um servidor, pode criar um, como no exemplo abaixo:
import Server from '../../src/server';

describe('API E2E test Suíte', () => {

    test('GET / should return an array', async () => {
        const response = await superTest(Server).get('/'); // Exemplo para subir um servidor
        console.log('text', response.text); // [] 
        const data = JSON.parse(response.text); 
        expect(data).toBeInstanceOf(Array);
        console.log('data', data); //
         expect(data.length).toEqual(0);// Por que data é um tipo primitivo, não um array        
        // Poderia validar tudo o que o cliente final usa, ex: status code, headers, etc.
    });

    test('POST / should save an item and return ok', async () => {
        const response = await superTest(Server).post('/').send({name: 'Teste', age: 20});
        const data = {ok: true};
        expect(JSON.parse(response.text)).toStrictEqual(data);
    }); 

    /* -------------- Challenge
        SE inverter a ordem do GET e do POST, vai dar erro, por causa da variável "data" usada nos dois testes.
        Esse é um dos desáfios dos testes e2e, um ambiente de teste não deve sujar outro ambiente de teste.
            Ou seja, que os testes sejam independentes.
        - Como resolver?
            - Tentei usar a variável com um nome diferente, mas não funcionou.
    */
    test.todo('UPDATE / should update an item and return ok');
    test.todo('DELETE / should delete an item and return ok');
});
