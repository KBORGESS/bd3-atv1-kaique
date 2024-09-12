
    const database = 'BD3-NoSQL-AtlasMongoDB';

    /* NOME DO BANCO DE DADOS */
    const collection = 'bd3-nosql-atv1';
    
    /*CRIAR OU ACESSAR O BANCO DE DADOS*/
    use(database);
    
    /* INSERE UMA COLEÇÃO DE DADOS */
    db[collection].insertMany(
      [
        {
          "cod_aluno": "001",
          "nome": "Ana Clara Souza",
          "cpf": "123.456.789-00",
          "rg": "12.345.678-9",
          "telefone_aluno": "(11) 98765-4321",
          "telefone_responsavel": "(11) 99876-5432",
          "email": "anaclara.souza@email.com",
          "data_nascimento": "2006-04-15"
        },
        {
          "cod_aluno": "002",
          "nome": "Bruno Henrique Silva",
          "cpf": "234.567.890-11",
          "rg": "23.456.789-0",
          "telefone_aluno": "(21) 99876-5432",
          "telefone_responsavel": "(21) 98765-4321",
          "email": "bruno.silva@email.com",
          "data_nascimento": "2005-08-22"
        },
        {
          "cod_aluno": "003",
          "nome": "Camila Oliveira",
          "cpf": "345.678.901-22",
          "rg": "34.567.890-1",
          "telefone_aluno": "(31) 98765-4321",
          "telefone_responsavel": "(31) 99876-5432",
          "email": "camila.oliveira@email.com",
          "data_nascimento": "2007-12-05"
        },
        {
          "cod_aluno": "004",
          "nome": "Diego Ferreira",
          "cpf": "456.789.012-33",
          "rg": "45.678.901-2",
          "telefone_aluno": "(41) 99876-5432",
          "telefone_responsavel": "(41) 98765-4321",
          "email": "diego.ferreira@email.com",
          "data_nascimento": "2006-11-10"
        },
        {
          "cod_aluno": "005",
          "nome": "Eduarda Lima",
          "cpf": "567.890.123-44",
          "rg": "56.789.012-3",
          "telefone_aluno": "(51) 98765-4321",
          "telefone_responsavel": "(51) 99876-5432",
          "email": "eduarda.lima@email.com",
          "data_nascimento": "2008-07-25"
        },
        {
          "cod_aluno": "006",
          "nome": "Felipe Costa",
          "cpf": "678.901.234-55",
          "rg": "67.890.123-4",
          "telefone_aluno": "(61) 99876-5432",
          "telefone_responsavel": "(61) 98765-4321",
          "email": "felipe.costa@email.com",
          "data_nascimento": "2007-09-18"
        },
        {
          "cod_aluno": "007",
          "nome": "Gabriela Santos",
          "cpf": "789.012.345-66",
          "rg": "78.901.234-5",
          "telefone_aluno": "(71) 98765-4321",
          "telefone_responsavel": "(71) 99876-5432",
          "email": "gabriela.santos@email.com",
          "data_nascimento": "2006-03-30"
        },
        {
          "cod_aluno": "008",
          "nome": "Henrique Almeida",
          "cpf": "890.123.456-77",
          "rg": "89.012.345-6",
          "telefone_aluno": "(81) 99876-5432",
          "telefone_responsavel": "(81) 98765-4321",
          "email": "henrique.almeida@email.com",
          "data_nascimento": "2005-10-12"
        },
        {
          "cod_aluno": "009",
          "nome": "Isabela Rocha",
          "cpf": "901.234.567-88",
          "rg": "90.123.456-7",
          "telefone_aluno": "(91) 98765-4321",
          "telefone_responsavel": "(91) 99876-5432",
          "email": "isabela.rocha@email.com",
          "data_nascimento": "2007-06-14"
        },
        {
          "cod_aluno": "010",
          "nome": "João Pedro Martins",
          "cpf": "012.345.678-99",
          "rg": "01.234.567-8",
          "telefone_aluno": "(11) 99876-5432",
          "telefone_responsavel": "(11) 98765-4321",
          "email": "joao.martins@email.com",
          "data_nascimento": "2006-01-20"
        }
      ]
      
);
