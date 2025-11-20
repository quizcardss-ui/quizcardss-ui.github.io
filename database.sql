
CREATE DATABASE IF NOT EXISTS quizcards;
USE quizcards;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario VARCHAR(100) NOT NULL,
  email VARCHAR(200) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cuatrimestres (
  id INT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL
);

CREATE TABLE materias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cuatrimestre_id INT NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  FOREIGN KEY (cuatrimestre_id) REFERENCES cuatrimestres(id)
);

CREATE TABLE guias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  materia_id INT NOT NULL,
  contenido LONGTEXT NOT NULL,
  FOREIGN KEY (materia_id) REFERENCES materias(id)
);

CREATE TABLE preguntas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  materia_id INT NOT NULL,
  pregunta TEXT NOT NULL,
  FOREIGN KEY (materia_id) REFERENCES materias(id)
);

CREATE TABLE respuestas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  pregunta_id INT NOT NULL,
  respuesta TEXT NOT NULL,
  es_correcta BOOLEAN NOT NULL DEFAULT 0,
  FOREIGN KEY (pregunta_id) REFERENCES preguntas(id)
);
