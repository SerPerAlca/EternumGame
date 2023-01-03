/***** D A T A B A S E *********************************/

CREATE DATABASE [IF NOT EXISTS] Eternum.

/****** T A B L A S **********************************/

CREATE TABLE IF NOT EXISTS HEROE (
    COD_HEROE VARCHAR(4) NOT NULL,
    NOMBRE VARCHAR(50) NOT NULL,
    DESCRIPCION VARCHAR(100),
    RAZA VARCHAR(20) NOT NULL,
    RUTA_IMAGEN VARCHAR(100) NOT NULL,
    PRIMARY KEY(COD_HEROE)
    );

    CREATE TABLE IF NOT EXISTS ATRIBUTO(
    COD_ATRIBUTO VARCHAR(3) NOT NULL,
    DESCRIPCION_HABILIDAD VARCHAR(20) NOT NULL,
    PRIMARY KEY(COD_ATRIBUTO)
    );

    CREATE TABLE IF NOT EXISTS HEROE_ATRIBUTO(
    ID_HEROE_ATRIBUTO INT(3)  NOT NULL AUTO_INCREMENT,
    COD_HEROE VARCHAR(4) NOT NULL,
    COD_ATRIBUTO VARCHAR(3) NOT NULL,
    VALOR_DEFECTO INT NOT NULL,
    VALOR_ACTUAL INT NOT NULL,
    PRIMARY KEY (ID_HEROE_ATRIBUTO),
    FOREIGN KEY(COD_HEROE) REFERENCES HEROE(COD_HEROE),
    FOREIGN KEY(COD_ATRIBUTO) REFERENCES ATRIBUTO(COD_ATRIBUTO)
    );

    CREATE TABLE IF NOT EXISTS ZONA (
    ID_ZONA INT(3) NOT NULL AUTO_INCREMENT,
    NOMBRE_ZONA VARCHAR(30) NOT NULL,
    ID_TERRITORIO INT(3) NOT NULL,
    COD_TIPO_ZONA VARCHAR(3) NOT NULL,
    PELIGROSIDAD INT(1) NOT NULL,
    PRIMARY KEY(ID_ZONA)
    );

    CREATE TABLE IF NOT EXISTS ENEMIGO(
    ID_ENEMIGO INT(3) NOT NULL AUTO_INCREMENT,
    NOMBRE_ENEMIGO VARCHAR(35) NOT NULL,
    RAZA VARCHAR(15) NOT NULL,
    ATAQUE_FISICO INT(2),
    ATAQUE_MAGICO INT(2),
    DEFENSA_FISICA INT(2),
    DEFENSA_MAGICA INT(2),
    IS_BOSS VARCHAR(1) NOT NULL,
    ALCANCE INT(2) NOT NULL,
    VELOCIDAD INT(2) NOT NULL,
    ESQUIVA INT(1) NOT NULL,
    VITALIDAD INT(3) NOT NULL,
    RUTA_IMAGEN VARCHAR(100) NOT NULL,
    PRIMARY KEY(ID_ENEMIGO)
    );

    CREATE TABLE IF NOT EXISTS ENEMIGO_ZONA(
    ID_ENEMIGO_ZONA INT(3) NOT NULL AUTO_INCREMENT,
    ID_ZONA INT(3) NOT NULL,
    ID_ENEMIGO INT(3) NOT NULL,
    PROBABILIDAD_APARACION INT(1) NOT NULL,
    PRIMARY KEY(ID_ENEMIGO_ZONA),
    FOREIGN KEY(ID_ENEMIGO) REFERENCES ENEMIGO(ID_ENEMIGO),
    FOREIGN KEY(ID_ZONA) REFERENCES ZONA(ID_ZONA)
    );

/******  NUEVA VERSION ******************************************/
    CREATE TABLE IF NOT EXISTS ARMA(
        ID_ARMA INT(3) NOT NULL AUTO_INCREMENT,
        ID_PNJ INT(2),
        COD_TIPO_ARMA VARCHAR(3) NOT NULL,
        COD_EFECTO_MAGICO VARCHAR(4),
        NOMBRE_ARMA VARCHAR(25) NOT NULL,
        DESCRIPCION VARCHAR(60) NOT NULL,
        DAÑO_FISICO INT(2) NOT NULL,
        DAÑO_MAGICO INT(2) NOT NULL,
        ALCANCE INT(1) NOT NULL,
        PRECIO_BASE INT(4) NOT NULL,
        PRIMARY KEY(ID_ARMA),
        FOREIGN KEY(ID_PNJ) REFERENCES PNJ(ID_PNJ),
        FOREIGN KEY(COD_TIPO_ARMA) REFERENCES TIPO_ARMA(COD_TIPO_ARMA),
        FOREIGN KEY(COD_EFECTO_MAGICO) REFERENCES EFECTO_MAGICO(COD_EFECTO_MAGICO)
    );

    CREATE TABLE IF NOT EXISTS TIPO_ARMA(
        ID_TIPO_ARMA INT(3) NOT NULL AUTO_INCREMENT,
        COD_TIPO_ARMA VARCHAR(3) NOT NULL,
        DESCRIPCION_TIPO_ARMA VARCHAR(10),
        PRIMARY KEY(ID_TIPO_ARMA),
        FOREIGN KEY(COD_TIPO_ARMA) REFERENCES ARMA(COD_TIPO_ARMA)
    );

    CREATE TABLE IF NOT EXISTS EFECTO_MAGICO(
        COD_EFECTO_MAGICO VARCHAR(4) NOT NULL,
        DESCRIPCION_EFECTO_MAGICO VARCHAR(40) NOT NULL,
        PRIMARY KEY(COD_EFECTO_MAGICO)
    );

    CREATE TABLE IF NOT EXISTS ARMADURA(
        ID_ARMADURA INT(3) NOT NULL AUTO_INCREMENT,
        COD_TIPO_ARMADURA VARCHAR(4) NOT NULL,
        COD_EFECTO_MAGICO VARCHAR(4),
        NOMBRE_ARMADURA VARCHAR(40) NOT NULL,
        DESCRIPCION VARCHAR(70) NOT NULL,
        DEFENSA_FISICA INT(2) NOT NULL,
        DEFENSA_MAGICA INT(2) NOT NULL,
        PRECIO_BASE INT(4) NOT NULL,
        PRIMARY KEY(ID_ARMADURA),
        FOREIGN KEY(COD_TIPO_ARMADURA) REFERENCES TIPO_ARMADURA(COD_TIPO_ARMADURA),
        FOREIGN KEY(COD_EFECTO_MAGICO) REFERENCES EFECTO_MAGICO(COD_EFECTO_MAGICO)
    );

    CREATE TABLE IF NOT EXISTS TIPO_ARMADURA(
        COD_TIPO_ARMADURA VARCHAR(3) NOT NULL,
        DESCRIPCION_TIPO_ARMA VARCHAR(10) NOT NULL,
        PRIMARY KEY(COD_TIPO_ARMADURA)
    );
    
    CREATE TABLE IF NOT EXISTS PNJ(
        ID_PNJ INT(2) NOT NULL AUTO_INCREMENT,
        COD_HEROE VARCHAR(4) NOT NULL,
        ID_ARMA INT(3),
        ID_ARMADURA INT(3),
        NIVEL INT(2) NOT NULL,
        DINERO INT(4) NOT NULL,
        NOMBRE_PNJ VARCHAR(25) NOT NULL,
        PRIMARY KEY(ID_PNJ),
        FOREIGN KEY(COD_HEROE) REFERENCES HEROE(COD_HEROE),
        FOREIGN KEY(ID_ARMA) REFERENCES ARMA(ID_ARMA),
        FOREIGN KEY(ID_ARMADURA) REFERENCES ARMADURA(ID_ARMADURA)
    );

    CREATE TABLE IF NOT EXISTS PNJ_ITEM(
        ID_PNJ_ITEM INT(3) NOT NULL AUTO_INCREMENT,
        ID_PNJ INT(2) NOT NULL,
        COD_ITEM VARCHAR(4) NOT NULL,
        CANTIDAD INT(2) NOT NULL,
        PRIMARY KEY(ID_PNJ_ITEM),
        FOREIGN KEY(ID_PNJ) REFERENCES PNJ(ID_PNJ),
        FOREIGN KEY(COD_ITEM) REFERENCES ITEM(COD_ITEM)
    );

    CREATE TABLE IF NOT EXISTS ITEM(
        COD_ITEM VARCHAR(4) NOT NULL,
        DESCRIPCION_ITEM VARCHAR(20) NOT NULL,
        RUTA_IMAGEN VARCHAR(100) NOT NULL,
        PRECIO_BASE INT(4) NOT NULL
    );

    /**** I N S E R T S ******************************************************/

    INSERT INTO HEROE(COD_HEROE,NOMBRE,DESCRIPCION,RAZA,NIVEL,RUTA_IMAGEN)VALUES('KORO','KOROCK. ROMPE-ESTRELLAS','','ENANO','/public/images/Heroes/Korock.png'),
                                                                ('GROJ','GROJK. EL BUCANERO DE PIEDRA','','ENANO','/public/images/Heroes/Grojk.jpg'),
                                                                ('JHON','JHON ALIAS. EL CAZARRECOMPENSAS','','HUMANO','/public/images/Heroes/JhonAlias.png'),
                                                                ('SHEP','SEPHIRO. EL VIUDO NEGRO','','ELFO OSCURO','/public/images/Heroes/Shephiro.jpg'),
                                                                ('BALT','BALTAS. MAGO DEL FUEGO ETERNO','','ALTO ELFO','/public/images/Heroes/Baltas.png'),
                                                                ('YONN','YÓNNIRAS. EL RUISEÑOR','','ELFO SILVANO','/public/images/Heroes/Yonniras.png'),
                                                                ('KYRI','PRINCIPE KYRION','','ALTO ELFO','/public/images/Heroes/Kiryon.png'),
                                                                ('ELIA','ELIA TOFFANA','','KHIMARI','/public/images/Heroes/EliaToffana.png'),
                                                                ('MAHE','MAHEDROS. EL PIRATA DEL MAR DEL TERROR','ELFO OSCURO','/public/images/Heroes/Maedhros.jpg'),
                                                                ('LION','LION HEART. EL DESTERRADO','','KHIMARI','/public/images/Heroes/LionHeart.jpeg'),
                                                                ('YENN','YENNEFER. HOJA ARDIENTE','','ELFA SILVANA','/public/images/Heroes/Yennefer.png'),
                                                                ('VAND','VANDELF. EL PROSCRITO','','HUMANO','/public/images/Heroes/Vandelf.png');


INSERT INTO ATRIBUTO(COD_ATRIBUTO,DESCRIPCION_HABILIDAD)VALUES  ('VIT','VITALIDAD'),
                                                                ('AFI','ATAQUE FISICO'),
                                                                ('AMA','ATAQUE MAGICO'),
                                                                ('DFI','DEFENSA FISICA'),
                                                                ('DMA','DEFENSA MAGICA'),
                                                                ('DES','DESTREZA'),
                                                                ('PMA','PUNTOS MAGICOS'),
                                                                ('VEL','VELOCIDAD'),
                                                                ('ESQ','ESQUIVA');

/* KOROCK*/
INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('KORO','VIT',6,6),
                                                                                   ('KORO','AFI',6,6),
                                                                                   ('KORO','AMA',0,0),
                                                                                   ('KORO','DFI',4,4),
                                                                                   ('KORO','DMA',0,0),
                                                                                   ('KORO','DES',4,4),
                                                                                   ('KORO','PMA',0,0),
                                                                                   ('KORO','VEL',2,2),
                                                                                   ('KORO','ESQ',0,0);
/* GROJK */
INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('GROJ','VIT',4,4),
                                                                                   ('GROJ','AFI',3,3),
                                                                                   ('GROJ','AMA',0,0),
                                                                                   ('GROJ','DFI',3,3),
                                                                                   ('GROJ','DMA',0,0),
                                                                                   ('GROJ','DES',2,2),
                                                                                   ('GROJ','PMA',0,0),
                                                                                   ('GROJ','VEL',2,2),
                                                                                   ('GROJ','ESQ',0,0);

/* BALTAS */
INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('BALT','VIT',3,3),
                                                                                   ('BALT','AFI',2,2),
                                                                                   ('BALT','AMA',5,5),
                                                                                   ('BALT','DFI',2,2),
                                                                                   ('BALT','DMA',4,4),
                                                                                   ('BALT','DES',3,3),
                                                                                   ('BALT','PMA',4,4),
                                                                                   ('BALT','VEL',4,4),
                                                                                   ('BALT','ESQ',0,0);

/* SEPHIRO */
INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('SHEP','VIT',4,4),
                                                                                   ('SHEP','AFI',4,4),
                                                                                   ('SHEP','AMA',2,2),
                                                                                   ('SHEP','DFI',2,2),
                                                                                   ('SHEP','DMA',1,1),
                                                                                   ('SHEP','DES',5,5),
                                                                                   ('SHEP','PMA',2,2),
                                                                                   ('SHEP','VEL',4,4),
                                                                                   ('SHEP','ESQ',0,0);

/* ELIA TOFFANA */
INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('ELIA','VIT',3,3),
                                                                                   ('ELIA','AFI',4,4),
                                                                                   ('ELIA','AMA',0,0),
                                                                                   ('ELIA','DFI',4,4),
                                                                                   ('ELIA','DMA',1,1),
                                                                                   ('ELIA','DES',2,2),
                                                                                   ('ELIA','PMA',2,2),
                                                                                   ('ELIA','VEL',6,6),
                                                                                   ('ELIA','ESQ',4,4);

/* JHON ALIAS */
INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('JHON','VIT',5,5),
                                                                                   ('JHON','AFI',3,3),
                                                                                   ('JHON','AMA',0,0),
                                                                                   ('JHON','DFI',3,3),
                                                                                   ('JHON','DMA',2,2),
                                                                                   ('JHON','DES',5,5),
                                                                                   ('JHON','PMA',2,2),
                                                                                   ('JHON','VEL',3,3),
                                                                                   ('JHON','ESQ',0,0);

/* YÓNNIRAS */
INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('YONN','VIT',3,3),
                                                                                   ('YONN','AFI',3,3),
                                                                                   ('YONN','AMA',1,1),
                                                                                   ('YONN','DFI',3,3),
                                                                                   ('YONN','DMA',2,2),
                                                                                   ('YONN','DES',3,3),
                                                                                   ('YONN','PMA',3,3),
                                                                                   ('YONN','VEL',5,5),
                                                                                   ('YONN','ESQ',0,0);

/* YENNEFER */
INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('YENN','VIT',3,3),
                                                                                   ('YENN','AFI',0,0),
                                                                                   ('YENN','AMA',1,1),
                                                                                   ('YENN','DFI',2,2),
                                                                                   ('YENN','DMA',2,2),
                                                                                   ('YENN','DES',4,4),
                                                                                   ('YENN','PMA',2,2),
                                                                                   ('YENN','VEL',5,5),
                                                                                   ('YENN','ESQ',0,0);

/* LION HEART */
INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('LION','VIT',6,6),
                                                                                   ('LION','AFI',4,4),
                                                                                   ('LION','AMA',0,0),
                                                                                   ('LION','DFI',4,4),
                                                                                   ('LION','DMA',0,0),
                                                                                   ('LION','DES',4,4),
                                                                                   ('LION','PMA',1,1),
                                                                                   ('LION','VEL',5,5),
                                                                                   ('LION','ESQ',0,0);                     


INSERT INTO ZONA(NOMBRE_ZONA,ID_TERRITORIO,COD_TIPO_ZONA,PELIGROSIDAD)VALUES('CAMPOS DE KISLEV',1,'NEV',1),
                                                                            ('BOSQUE DE LOS RIOS',1,'BOS',2),
                                                                            ('CAMPOS DE IMPERIUM',1,'LLA',1),
                                                                            ('COSTA DE STIRLAN',1,'LLA',2);          

INSERT INTO ENEMIGO(NOMBRE_ENEMIGO,RAZA,ATAQUE_FISICO,ATAQUE_MAGICO,DEFENSA_FISICA,DEFENSA_MAGICA,IS_BOSS,ALCANCE,VELOCIDAD,ESQUIVA,VITALIDAD,RUTA_IMAGEN)VALUES('ANDRÓGENES','MONSTRUO',3,0,5,6,'N',1,3,2,10,'/public/images/Unidades/monstruos/Androgenes.png'),
                                                                                                                                                                ('FORAJIDO','HUMANO',2,0,3,0,'N',4,2,1,6,'/public/images/Unidades/humanos/Forajido.png'),
                                                                                                                                                                ('ASALTA BOSQUES','HUMANO',3,0,4,0,'N',3,3,1,6,'/public/images/Unidades/humanos/asalta-bosques.png'),
                                                                                                                                                                ('SALTEADOR DE CAMINOS','HUMANO',2,0,4,0,'N',1,2,1,6,'/public/images/Unidades/humanos/Salteador.png'),
                                                                                                                                                                ('GRERIUS BRON','HUMANO',3,1,8,4,'S',1,3,2,12,'/public/images/Unidades/humanos/greriusBron.png'),
                                                                                                                                                                ('HOOD EL FORAJIDO','HUMANO',4,3,10,6,'S',4,3,2,15,'/public/images/Unidades/humanos/Hood.png'),
                                                                                                                                                                ('TRITÓN GUERRERO','TRITÓN',4,0,6,2,'N',1,3,2,10,'/public/images/Unidades/monstruos/TritonGuerrero.png'),
                                                                                                                                                                ('ROMPE-CORAZAS','MONSTRUO',2,2,5,2,'N',1,2,2,9,'/public/images/Unidades/monstruos/RompeCorazas.png'),
                                                                                                                                                                ('BATIDOR','HUMANO',2,0,6,0,'N',4,4,1,7,'/public/images/Unidades/humanos/batidor.png'),
                                                                                                                                                                ('MERCENARIO','HUMANO',3,0,7,0,'N',1,2,1,5,'/public/images/Unidades/humanos/mercenario.png'),
                                                                                                                                                                ('TRITÓN BUSCA-PESCA','TRITÓN',3,0,4,2,'N',3,3,2,8,'/public/images/Unidades/monstruos/BuscaPesca.png');

INSERT INTO ENEMIGO_ZONA(ID_ZONA,ID_ENEMIGO,PROBABILIDAD_APARACION)VALUES(1,1,2),
                                                                         (1,2,5),
                                                                         (1,4,5),
                                                                         (1,10,5),
                                                                         (2,2,4),
                                                                         (2,3,5),
                                                                         (2,4,4),
                                                                         (2,10,5),
                                                                         (3,2,5),
                                                                         (3,4,5),
                                                                         (3,10,4),
                                                                         (4,7,5),
                                                                         (4,8,5),
                                                                         (4,9,5);


 /******  NUEVA VERSION ******************************************/