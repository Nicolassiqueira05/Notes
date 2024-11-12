create database notas;
use notas;

CREATE TABLE Duser (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    userpassword VARCHAR(255) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE notas (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
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
FOREIGN KEY (usuario_id) REFERENCES Duser(id) ON DELETE CASCADE;

ALTER TABLE Duser
ADD column token VARCHAR(100);

INSERT INTO Duser (username, email, userpassword, token)
VALUES ("nicolas", "nicolas2906b@gmail.com", "kaliu2906", "2432452352");

ALTER TABLE usuarios
RENAME COLUMN Username TO username;

GRANT ALL PRIVILEGES ON notas TO 'root'@'localhost';
FLUSH PRIVILEGES;

SELECT * FROM d_user;

drop database notas;

