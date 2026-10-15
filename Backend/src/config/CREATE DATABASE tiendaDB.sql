CREATE DATABASE tiendaDB
GO
USE tiendaDB
GO

CREATE TABLE productos(

    id INT PRIMARY KEY IDENTITY(1,1),
    nombre NVARCHAR(100) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    creado_en DATETIME NOT NULL DEFAULT SysDateTime()
);









