create database notas;
use notas;

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    userpassword VARCHAR(255) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE notas (
    id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    conteudo JSON,
    /*Formato do json:
    texto: 
    {
    "titulo": "",
    "conteudo": ""
    }
    lista:
    {
    "titulo": "",
    "conteudo": ["","",""]
    }
    */
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_atualização TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

ALTER TABLE notas
ADD CONSTRAINT fk_usuario_id
FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE;

ALTER TABLE usuarios
ADD column token VARCHAR(100);


