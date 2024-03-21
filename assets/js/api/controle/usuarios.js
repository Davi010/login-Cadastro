import { db } from "../../banco/db.js";

export const pegarUsuario = async (req, res) => {

    try {
        const usuarios = await db.query("SELECT * FROM usuarios");
        res.status(200).json(usuarios);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar os usuários" });
    }
};

/*O async é uma palavra-chave usada para definir uma função assíncrona.
Funções assíncronas permitem que você escreva código que lida com operações 
assíncronas (como chamadas de API, consultas de banco de dados, etc.)
de forma mais concisa e legível.*/

/*O await é usado dentro de funções assíncronas para esperar que uma 
promessa (uma operação assíncrona) seja resolvida. Ele pausa a 
execução da função até que a promessa seja concluída e retorna 
o resultado.*/

/*O bloco try é usado para envolver um trecho de código que pode 
gerar exceções (erros). Se ocorrer algum erro dentro do bloco try,
 o controle é transferido para o bloco catch.*/

/*O bloco catch é onde você trata o erro. Você pode definir como
lidar com diferentes tipos de exceções (por exemplo, exibindo 
uma mensagem de erro, registrando o erro, etc.).*/


