/* NOME DO BANCO DE DADOS */
const database = 'BD3-NoSQL-AtlasMongoDB';

/* NOME DO BANCO DE DADOS */
const collection = 'bd3-nosql-atv1';

/*CRIAR OU ACESSAR O BANCO DE DADOS*/
use(database);

db[collection].deleteOne(
    {cod_aluno:"002"}
)