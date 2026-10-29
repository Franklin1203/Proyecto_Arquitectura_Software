IF OBJECT_ID('productos') IS NULL
BEGIN
    CREATE TABLE productos(
        id INT IDENTITY(1,1) PRIMARY KEY,
        nombre NVARCHAR(100) NOT NULL,
        precio DECIMAL(10,2) NOT NULL,
        stock INT NOT NULL DEFAULT 0
    );

    INSERT INTO productos(nombre,precio,stock)VALUES
    (N'Memoria Ram DDR5 64GB',3500,12),
    (N'Procesador intel icore 9',4200,5),
    (N'Disco m.2 1tb',5000,15)

 END
