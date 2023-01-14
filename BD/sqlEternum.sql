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
    ID_ZONA INT(3) NOT NULL,
    NOMBRE_ZONA VARCHAR(30) NOT NULL,
    COD_TIPO_ZONA VARCHAR(3) NOT NULL,
    PELIGROSIDAD INT(1) NOT NULL,
    PRIMARY KEY(ID_ZONA)
    );

    CREATE TABLE IF NOT EXISTS ENEMIGO(
    ID_ENEMIGO INT(3) NOT NULL,
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
    PROBABILIDAD_APARACION int(1) NOT NULL,
    PRIMARY KEY(ID_ENEMIGO)
    );

    CREATE TABLE IF NOT EXISTS ENEMIGO_ZONA(
    ID_ZONA INT(3) NOT NULL,
    ID_ENEMIGO INT(3) NOT NULL,
    FOREIGN KEY(ID_ENEMIGO) REFERENCES ENEMIGO(ID_ENEMIGO),
    FOREIGN KEY(ID_ZONA) REFERENCES ZONA(ID_ZONA),
    PRIMARY KEY(ID_ENEMIGO,ID_ZONA)
    );

    CREATE TABLE IF NOT EXISTS ITEM(
        COD_ITEM VARCHAR(4) NOT NULL,
        NOMBRE_ITEM VARCHAR(30) NOT NULL,
        DESCRIPCION_ITEM VARCHAR(100) NOT NULL,
        RUTA_IMAGEN VARCHAR(100) NOT NULL,
        PRECIO_BASE INT(4) NOT NULL,
        PRIMARY KEY(COD_ITEM)
    );

     CREATE TABLE IF NOT EXISTS TIPO_ARMA(
        COD_TIPO_ARMA VARCHAR(3) NOT NULL,
        DESCRIPCION_TIPO_ARMA VARCHAR(10),
        PRIMARY KEY(COD_TIPO_ARMA)
    );

    CREATE TABLE IF NOT EXISTS EFECTO_MAGICO(
        COD_EFECTO_MAGICO VARCHAR(4) NOT NULL,
        NOMBRE_EFECTO_MAGICO VARCHAR(15) NOT NULL,
        DESCRIPCION_EFECTO_MAGICO VARCHAR(50) NOT NULL,
        PRIMARY KEY(COD_EFECTO_MAGICO)
    );

    CREATE TABLE IF NOT EXISTS SESSION_PNJ(
        ID_SESSION INT(2) NOT NULL AUTO_INCREMENT,
        NUMERO_PLAYERS INT(1) NOT NULL,
        CREACION_SESSION DATETIME NOT NULL, 
        PRIMARY KEY(ID_SESSION)
    ); 

    CREATE TABLE IF NOT EXISTS PNJ(
        ID_PNJ INT(2) NOT NULL AUTO_INCREMENT,
        COD_HEROE VARCHAR(4) NOT NULL,
        NIVEL INT(2) NOT NULL,
        DINERO INT(4) NOT NULL,
        NOMBRE_PNJ VARCHAR(25) NOT NULL,
        ID_SESSION INT(2) NOT NULL, 
        PRIMARY KEY(ID_PNJ),
        FOREIGN KEY(COD_HEROE) REFERENCES HEROE(COD_HEROE),
        FOREIGN KEY(ID_SESSION) REFERENCES SESSION_PNJ(ID_SESSION)
    );

       CREATE TABLE IF NOT EXISTS PNJ_ITEM(
        ID_PNJ INT(2) NOT NULL,
        COD_ITEM VARCHAR(4) NOT NULL,
        CANTIDAD INT(2) NOT NULL,
        PRIMARY KEY(COD_ITEM, ID_PNJ),
        FOREIGN KEY(ID_PNJ) REFERENCES PNJ(ID_PNJ),
        FOREIGN KEY(COD_ITEM) REFERENCES ITEM(COD_ITEM)
    );

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
        RUTA_IMAGEN VARCHAR(100) NOT NULL,
        PRIMARY KEY(ID_ARMA),
        FOREIGN KEY(ID_PNJ) REFERENCES PNJ(ID_PNJ),
        FOREIGN KEY(COD_TIPO_ARMA) REFERENCES TIPO_ARMA(COD_TIPO_ARMA),
        FOREIGN KEY(COD_EFECTO_MAGICO) REFERENCES EFECTO_MAGICO(COD_EFECTO_MAGICO)
    );


    CREATE TABLE IF NOT EXISTS TIPO_ARMADURA(
        COD_TIPO_ARMADURA VARCHAR(3) NOT NULL,
        DESCRIPCION_TIPO_ARMA VARCHAR(10) NOT NULL,
        PRIMARY KEY(COD_TIPO_ARMADURA)
    );

    CREATE TABLE IF NOT EXISTS ARMADURA(
        ID_ARMADURA INT(3) NOT NULL AUTO_INCREMENT,
        COD_TIPO_ARMADURA VARCHAR(4) NOT NULL,
        COD_EFECTO_MAGICO VARCHAR(4),
        ID_PNJ INT(2),
        NOMBRE_ARMADURA VARCHAR(40) NOT NULL,
        DESCRIPCION VARCHAR(70) NOT NULL,
        DEFENSA_FISICA INT(2) NOT NULL,
        DEFENSA_MAGICA INT(2) NOT NULL,
        PRECIO_BASE INT(4) NOT NULL,
        RUTA_IMAGEN VARCHAR(50) NOT NULL,
        TAMAÑO INT(13) NOT NULL,
        PRIMARY KEY(ID_ARMADURA),
        FOREIGN KEY(COD_TIPO_ARMADURA) REFERENCES TIPO_ARMADURA(COD_TIPO_ARMADURA),
        FOREIGN KEY(COD_EFECTO_MAGICO) REFERENCES EFECTO_MAGICO(COD_EFECTO_MAGICO),
        FOREIGN KEY(ID_PNJ) REFERENCES PNJ(ID_PNJ)
    );

    
    
   

    


INSERT INTO TIPO_ARMADURA(COD_TIPO_ARMADURA,DESCRIPCION_TIPO_ARMA)VALUES('YEL','YELMO'),
                                                                        ('COR','CORAZA'),
                                                                        ('COM','COMPLETA');

INSERT INTO EFECTO_MAGICO(COD_EFECTO_MAGICO,NOMBRE_EFECTO_MAGICO,DESCRIPCION_EFECTO_MAGICO)VALUES('PERF','PERFORACION', 'IGNORA ARMADURA FISICA'),
                                                                            ('VENE','VENENO', 'AÑADE +X AL DAÑO FISICO EN CADA ATAQUE'),
                                                                            ('SACR', 'SACRO','IGNORA ARMADURA MÁGICA'),
                                                                            ('CAOT', 'CAOTICO','AÑADE +X AL DAÑO MÁGICO EN CADA ATAQUE');        


INSERT INTO ARMADURA(COD_TIPO_ARMADURA,COD_EFECTO_MAGICO,ID_PNJ,NOMBRE_ARMADURA,DESCRIPCION,DEFENSA_FISICA,DEFENSA_MAGICA,PRECIO_BASE,RUTA_IMAGEN,TAMAÑO)VALUES('COM',NULL,NULL,'ARMADURA COMPLETA DEL BOSQUE MALDITO','+1 DEFF. ANTE CRIATURAS / +2 DEFM. EN BOSQUE',3,4,500,'/public/images/Armadura/armaduraBosqueMal.jpg',23),
                                                                                                                                                        ('COM',NULL,NULL,'ARMADURA DEL CORSARIO ROJO','+1 ESQUIVA / +3 DEFM EN AGUA / +2 DEFF EN PRADERA',5,2,620,'/public/images/Armadura/armCorsRojo.jpg',20),
                                                                                                                                                        ('COM',NULL,NULL,'TUNICA DEL SACERDOTE DEL AGUA','+1 DE PM / +1 ATAQUE MAGICO',2,2,410,'/public/images/Armadura/TunicaSacAgua.jpg',21),
                                                                                                                                                        ('COM',NULL,NULL,'TÚNICA DE LAPISLAZULI', '+2 PM / +1 ATAQUE MAGICO', 2,7,560,'/public/images/Armadura/tunicaLapislazuli.jpg',21 ),
                                                                                                                                                        ('COM',NULL,NULL,'ARMADURA PESADA SILVANA', '+2 ATAQUE FIS Y MAG VS CRIATURAS / +3 DEF FIS Y MAG EN BOSQUE', 3,3,620,'/public/images/Armadura/armaduraPesadaSilvana.jpg',20 ),
                                                                                                                                                        ('COM',NULL,NULL,'ARMADURA DE SURCA', '+3 DEF FIS EN AGUA / +1 DEF MAG EN AGUA', 2,1,450,'/public/images/Armadura/Armadura de Surca.jpg',20 ),
                                                                                                                                                        ('COM',NULL,NULL,'ARMADURA DE CARRERA BLANCA',' +1 ESQUIVA / +1 DEF FISICA EN PRADERA',3,1,360,'/public/images/Armadura/armaduraCarreraBlanca.jpg',20),
                                                                                                                                                        ('COM',NULL,NULL,'ARMADURA COMPLETA DEL PICARO GUERRERO','+1 DEFMAG VS HUMANOS / +1 VELOCIDAD',5,1,420,'/public/images/Armadura/armComPicaro.jpg',22),
                                                                                                                                                        ('COR',NULL,NULL,'ARMADURA RUBI','+1 DEF FIS VS ELFOS / +2 DEF MAG VS ELFOS',4,2,560,'/public/images/Armadura/Armadura Rubí.jpg',20),
                                                                                                                                                        ('COM',NULL,NULL,'ARMADURA COMPLETA DE LA LUZ',' +3 VELOCIDAD / +1 ESQUIVA / +3 DESTREZA',7,6,760,'/public/images/Armadura/armaduraCompleta.jpg',25),
                                                                                                                                                        ('COM',NULL,NULL,'TUNICA VENTORMENTA','+2 PM / 3PM EN BOSQUE',2,5,480,'/public/images/Armadura/tunicaVentormenta.jpg',20),
                                                                                                                                                        ('COM',NULL,NULL,'ARMADURA COMPLETA DE LA LLAMA BLANCA','+1 DEF FIS VS CRIATURAS',6,4,650,'/public/images/Armadura/armaduraLlamaBlanca.jpg',22),
                                                                                                                                                        ('COM',NULL,NULL,'ARMADURA COMPLETA DE LA ARAÑA',' +2 DEF FIS Y MAG VS CRIATURAS Y ALTOS ELFOS',4,5,650,'/public/images/Armadura/Armadura de la Araña.jpg',23),
                                                                                                                                                        ('COM',NULL,NULL,'TUNICA DEL ESPECTRO','+1 VELOCIDAD / +2 ATAQUE MAG',1,6,480,'/public/images/Armadura/tunicaEspectro.jpg',20),
                                                                                                                                                        ('COM',NULL,NULL,'ARMADURA COMPLETA DEL DEFENSOR DE LA HUMANIDAD','+1 VELOCIDAD / +3 DEF FIS VS NO HUMANOS',4,4,580,'/public/images/Armadura/armaduraDefensor.jpg',25),
                                                                                                                                                        ('COM',NULL,NULL,'ARMADURA COMPLETA DE SOMBRA','+2 VELOCIDAD / +2 DESTREZA / +1 ATAQUE FIS VS ELFOS',4,3,560,'/public/images/Armadura/armaduraSombra.png',23),
                                                                                                                                                        ('COM',NULL,NULL,'ARMADURA COMPLETA DEL RUBI','+3 DEF MAG VS HUMANOS / +3 DEF FIS VS ELFOS',5,4,720,'/public/images/Armadura/armaduraCompletaRubi.png',24),
                                                                                                                                                        ('COM',NULL,NULL,'ARMADURA COMPLETA DE LA FE','+2 DEF FIS VS NO HUMANOS / +2 DEF MAG VS NO HUMANOS',5,3,650,'/public/images/Armadura/armaduraCompletaFe.jpg',24),
                                                                                                                                                        ('COM',NULL,NULL,'ARMADURA COMPLETA DEL MAGO DE RUTH','+1 DESTREZA / +1 VELOCIDAD',3,5,500,'/public/images/Armadura/completaRuth.jpg',23),
                                                                                                                                                        ('COM',NULL,NULL,'TUNICA DEL MAGO DEFENSOR','+1 DESTREZA / +2 PM ',2,6,550,'/public/images/Armadura/magoDefensor.jpg',20),
                                                                                                                                                        ('COM',NULL,NULL,'ARMADURA COMPLETA DEL FENIX','+3 DEF MAG Y FIS VS ELFOS OSCUROS / +2 PM',6,4,720,'/public/images/Armadura/armaduraComFenix.jpg',23),
                                                                                                                                                        ('COM',NULL,NULL,'ARMADURA COMPLETA DE KARAK','+2 DEF FIS VS ORCOS / +1 DESTREZA / +1 ESQUIVA VS ORCOS',8,1,700,'/public/images/Armadura/armaduraComKarak.png',20),
                                                                                                                                                        ('COM',NULL,NULL,'ARMADURA SAQUEADOR DE NORSCA','+2 DEF FIS Y MAG VS HUMANOS/ +1 DESTREZA',3,1,520,'/public/images/Armadura/armaduraSaqNorsca.png',20),
                                                                                                                                                        ('COM',NULL,NULL,'ARMADURA COMPLETA DEL PROSCRITO','+2 VELOCIDAD/ +1 PM',4,2,500,'/public/images/Armadura/armaduraComProscrito.jpg',22),
                                                                                                                                                        ('COM',NULL,NULL,'ARMADURA DEL TIGRE DE ACERO','+2 DESTREZA/ +2 DEF FISICA VS CRIATURAS',5,3,640,'/public/images/Armadura/armaduraDelTigre.jpg',22),
                                                                                                                                                        ('COM',NULL,NULL,'ARMADURA CEREMONIAL DE ULTHUAN','+3 DESTREZA / +2 PM / +2 DEF FIS Y MAG VS DRAGONES',3,3,600,'/public/images/Armadura/armaduraCeremonialUlth.jpg',19),
                                                                                                                                                        ('COM',NULL,NULL,'ARMADURA COMPLETA NEGRA DE VALIDOR','+2 PM / +1 DEF FIS Y MAG VS ELFOS',6,4,800,'/public/images/Armadura/negraValidor.jpg',24),
                                                                                                                                                        ('COM',NULL,NULL,'ARMADURA COMPLETA DRACONICA','+2 PM / +2 DESTREZA / +3 DEF FIS Y MAG VS DRAGONES Y CRIATURAS',6,3,860,'/public/images/Armadura/draconica.jpeg',25),
                                                                                                                                                        ('COM',NULL,NULL,'TUNICA DE LA ORDEN DEL BUHO','+3 PM / +2 PM EN BOSQUE / +1 PM EN MONTAÑA',2,5,700,'/public/images/Armadura/buho.jpg',21),
                                                                                                                                                        ('COM',NULL,NULL,'ARMADURA DE AMAZONA','+3 VELOCIDAD / +1 ESQUIVA / +2 DEF FIS EN BOSQUE',3,4,600,'/public/images/Armadura/amazona.jpg',19);


INSERT INTO ARMADURA(COD_TIPO_ARMADURA,COD_EFECTO_MAGICO,ID_PNJ,NOMBRE_ARMADURA,DESCRIPCION,DEFENSA_FISICA,DEFENSA_MAGICA,PRECIO_BASE,RUTA_IMAGEN,TAMAÑO)VALUES('COR',NULL,NULL,'CHALECO DE MERCENARIO','+2 ALCANCE',1,0,300,'/public/images/Armadura/chalecoMerc.jpg',13),
                                                                                                                                                            ('COR',NULL,NULL,'CORAZA DE CARREBURGO','+1 DEF FIS EN CARREBURGO',1,0,290,'/public/images/Armadura/corazaCarreburgo.png',12),
                                                                                                                                                            ('COR',NULL,NULL,'CORAZA COMUN DE KISLEV','+1 DEF FIS EN KISLEV',1,0,290,'/public/images/Armadura/corazaKislev.jpg',12),
                                                                                                                                                            ('COR',NULL,NULL,'CORAZA STIRLAN','+2 DEF FIS VS CRIATURAS',1,0,330,'/public/images/Armadura/corazaStirlan.png',14),
                                                                                                                                                            ('COR',NULL,NULL,'CORAZA DEL MAGO BUCANERO','+1 PM / +1 PM EN MAR',1,2,400,'/public/images/Armadura/magoMarinero.png',12),
                                                                                                                                                            ('COR',NULL,NULL,'CORAZA DE WISLEN','+1 DEF FIS EN WISLEN',1,0,300,'/public/images/Armadura/Coraza De Wislen.png',12),
                                                                                                                                                            ('COR',NULL,NULL,'COTA DE MALLA ENANA','+2 DEF FIS SI ES LLEVADA POR ENANO',2,0,350,'/public/images/Armadura/cotaMallaEnana.png',10);

INSERT INTO ARMADURA(COD_TIPO_ARMADURA,COD_EFECTO_MAGICO,ID_PNJ,NOMBRE_ARMADURA,DESCRIPCION,DEFENSA_FISICA,DEFENSA_MAGICA,PRECIO_BASE,RUTA_IMAGEN,TAMAÑO)VALUES('YEL',NULL,NULL,'YELMO DEL IMPERIANO JUSTO','',2,0,200,'/public/images/Armadura/yelmoImperianoJusto.png',6),      
                                                                                                                                                                ('YEL',NULL,NULL,'YELMO BRETONIANO','+1 DEF FIS VS CRIATURAS',1,1,230,'/public/images/Armadura/yelmoBretoniano.png',7),  
                                                                                                                                                                ('YEL',NULL,NULL,'YELMO DEL SUMO INQUISIDOR','+1 DEF FIS VS NO HUMANOS',2,1,300,'/public/images/Armadura/yelmoSumoInquisidor.png',7),  
                                                                                                                                                                ('YEL',NULL,NULL,'YELMO CRUZADO','+1 DEF FIS Y MAG VS NO HUMANOS',1,0,250,'/public/images/Armadura/yelmoCruzado.png',6);                                                                                                                                                 



                                                                        



    INSERT INTO HEROE(COD_HEROE,NOMBRE,DESCRIPCION,RAZA,RUTA_IMAGEN)VALUES('KORO','KOROCK. ROMPE-ESTRELLAS','','ENANO','/public/images/Heroes/Korock.png'),
                                                                ('GROJ','GROJK. EL BUCANERO DE PIEDRA','','ENANO','/public/images/Heroes/Grojk.jpg'),
                                                                ('JHON','JHON ALIAS. EL CAZARRECOMPENSAS','','HUMANO','/public/images/Heroes/JhonAlias.png'),
                                                                ('SHEP','SEPHIRO. EL VIUDO NEGRO','','ELFO OSCURO','/public/images/Heroes/Shephiro.jpg'),
                                                                ('BALT','BALTAS. MAGO DEL FUEGO ETERNO','','ALTO ELFO','/public/images/Heroes/Baltas.png'),
                                                                ('YONN','YÓNNIRAS. EL RUISEÑOR','','ELFO SILVANO','/public/images/Heroes/Yonniras.png'),
                                                                ('KYRI','PRINCIPE KYRION','','ALTO ELFO','/public/images/Heroes/Kiryon.png'),
                                                                ('ELIA','ELIA TOFFANA','','KHIMARI','/public/images/Heroes/EliaToffana.png'),
                                                                ('MAHE','MAHEDROS. EL PIRATA DEL MAR DEL TERROR','','ELFO OSCURO','/public/images/Heroes/Maedhros.jpg'),
                                                                ('LION','LION HEART. EL DESTERRADO','','KHIMARI','/public/images/Heroes/LionHeart.jpeg'),
                                                                ('YENN','YENNEFER. HOJA ARDIENTE','','ELFA SILVANA','/public/images/Heroes/Yennefer.png'),
                                                                ('DENI','DENITRA. SACERDOTISA DEL TOMO OSCURO','','HUMANO','/public/images/Heroes/Denitra.png');


INSERT INTO ATRIBUTO(COD_ATRIBUTO,DESCRIPCION_HABILIDAD)VALUES  ('VIT','VITALIDAD'),
                                                                ('AFI','ATAQUE FISICO'),
                                                                ('AMA','ATAQUE MAGICO'),
                                                                ('DFI','DEFENSA FISICA'),
                                                                ('DMA','DEFENSA MAGICA'),
                                                                ('DES','DESTREZA'),
                                                                ('PMA','PUNTOS MAGICOS'),
                                                                ('VEL','VELOCIDAD'),
                                                                ('ESQ','ESQUIVA');


INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('KORO','VIT',6,6),
                                                                                   ('KORO','AFI',6,6),
                                                                                   ('KORO','AMA',0,0),
                                                                                   ('KORO','DFI',4,4),
                                                                                   ('KORO','DMA',0,0),
                                                                                   ('KORO','DES',4,4),
                                                                                   ('KORO','PMA',0,0),
                                                                                   ('KORO','VEL',2,2),
                                                                                   ('KORO','ESQ',0,0);

INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('GROJ','VIT',4,4),
                                                                                   ('GROJ','AFI',3,3),
                                                                                   ('GROJ','AMA',0,0),
                                                                                   ('GROJ','DFI',3,3),
                                                                                   ('GROJ','DMA',0,0),
                                                                                   ('GROJ','DES',2,2),
                                                                                   ('GROJ','PMA',0,0),
                                                                                   ('GROJ','VEL',2,2),
                                                                                   ('GROJ','ESQ',0,0);

INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('BALT','VIT',3,3),
                                                                                   ('BALT','AFI',2,2),
                                                                                   ('BALT','AMA',5,5),
                                                                                   ('BALT','DFI',2,2),
                                                                                   ('BALT','DMA',4,4),
                                                                                   ('BALT','DES',3,3),
                                                                                   ('BALT','PMA',4,4),
                                                                                   ('BALT','VEL',4,4),
                                                                                   ('BALT','ESQ',0,0);


INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('SHEP','VIT',4,4),
                                                                                   ('SHEP','AFI',4,4),
                                                                                   ('SHEP','AMA',2,2),
                                                                                   ('SHEP','DFI',2,2),
                                                                                   ('SHEP','DMA',1,1),
                                                                                   ('SHEP','DES',5,5),
                                                                                   ('SHEP','PMA',2,2),
                                                                                   ('SHEP','VEL',4,4),
                                                                                   ('SHEP','ESQ',0,0);


INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('ELIA','VIT',3,3),
                                                                                   ('ELIA','AFI',4,4),
                                                                                   ('ELIA','AMA',0,0),
                                                                                   ('ELIA','DFI',4,4),
                                                                                   ('ELIA','DMA',1,1),
                                                                                   ('ELIA','DES',2,2),
                                                                                   ('ELIA','PMA',2,2),
                                                                                   ('ELIA','VEL',6,6),
                                                                                   ('ELIA','ESQ',4,4);


INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('JHON','VIT',5,5),
                                                                                   ('JHON','AFI',3,3),
                                                                                   ('JHON','AMA',0,0),
                                                                                   ('JHON','DFI',3,3),
                                                                                   ('JHON','DMA',2,2),
                                                                                   ('JHON','DES',5,5),
                                                                                   ('JHON','PMA',2,2),
                                                                                   ('JHON','VEL',3,3),
                                                                                   ('JHON','ESQ',0,0);

INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('YONN','VIT',3,3),
                                                                                   ('YONN','AFI',3,3),
                                                                                   ('YONN','AMA',1,1),
                                                                                   ('YONN','DFI',3,3),
                                                                                   ('YONN','DMA',2,2),
                                                                                   ('YONN','DES',3,3),
                                                                                   ('YONN','PMA',3,3),
                                                                                   ('YONN','VEL',5,5),
                                                                                   ('YONN','ESQ',0,0);


INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('YENN','VIT',3,3),
                                                                                   ('YENN','AFI',0,0),
                                                                                   ('YENN','AMA',1,1),
                                                                                   ('YENN','DFI',2,2),
                                                                                   ('YENN','DMA',2,2),
                                                                                   ('YENN','DES',4,4),
                                                                                   ('YENN','PMA',2,2),
                                                                                   ('YENN','VEL',5,5),
                                                                                   ('YENN','ESQ',0,0);

INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('LION','VIT',6,6),
                                                                                   ('LION','AFI',4,4),
                                                                                   ('LION','AMA',0,0),
                                                                                   ('LION','DFI',4,4),
                                                                                   ('LION','DMA',0,0),
                                                                                   ('LION','DES',4,4),
                                                                                   ('LION','PMA',1,1),
                                                                                   ('LION','VEL',5,5),
                                                                                   ('LION','ESQ',0,0);                     


INSERT INTO ZONA(ID_ZONA,NOMBRE_ZONA,COD_TIPO_ZONA,PELIGROSIDAD)VALUES(1,'KISLEV','NEV',1),
                                                              (2,'AVERLAN','BOS',2),
                                                              (3,'IMPERIUM','LLA',1),
                                                              (4,'STIRLAN','LLA',2),  
                                                              (5,'CARREBURGO','LLA',1),
                                                              (6,'TIERRAS_INTERMEDIAS','LLA',2),
                                                              (7,'TRANSILVANIA','PAN',3),
                                                              (8,'WISLEN','LLA',2),
                                                              (9,'TIERRAS_DE_HOET','LLA',2),
                                                              (10,'CARRERA_BLANCA','LLA',2);        

INSERT INTO ENEMIGO(ID_ENEMIGO,NOMBRE_ENEMIGO,RAZA,ATAQUE_FISICO,ATAQUE_MAGICO,DEFENSA_FISICA,DEFENSA_MAGICA,IS_BOSS,ALCANCE,VELOCIDAD,ESQUIVA,VITALIDAD,RUTA_IMAGEN,PROBABILIDAD_APARACION)VALUES(1,'ANDRÓGENES','MONSTRUO',3,0,5,6,'N',1,3,2,10,'/public/images/Unidades/monstruos/Androgenes.png',1),
                                                                                                                                                                (2,'FORAJIDO','HUMANO',2,0,3,0,'N',4,2,1,6,'/public/images/Unidades/humanos/Forajido.png',3),
                                                                                                                                                                (3,'ASALTA BOSQUES','HUMANO',3,0,4,0,'N',3,3,1,6,'/public/images/Unidades/humanos/asalta-bosques.png',3),
                                                                                                                                                                (4,'SALTEADOR DE CAMINOS','HUMANO',2,0,4,0,'N',1,2,1,6,'/public/images/Unidades/humanos/Salteador.png',3),
                                                                                                                                                                (5,'GRERIUS BRON','HUMANO',3,1,8,4,'S',1,3,2,12,'/public/images/Unidades/humanos/greriusBron.png',3),
                                                                                                                                                                (6,'HOOD EL FORAJIDO','HUMANO',4,3,10,6,'S',4,3,2,15,'/public/images/Unidades/humanos/Hood.png',3),
                                                                                                                                                                (7,'TRITÓN GUERRERO','TRITÓN',4,0,6,2,'N',1,3,2,10,'/public/images/Unidades/monstruos/TritonGuerrero.png',3),
                                                                                                                                                                (8,'ROMPE-CORAZAS','MONSTRUO',2,2,5,2,'N',1,2,2,9,'/public/images/Unidades/monstruos/RompeCorazas.png',3),
                                                                                                                                                                (9,'BATIDOR','HUMANO',2,0,6,0,'N',4,4,1,7,'/public/images/Unidades/humanos/batidor.png',3),
                                                                                                                                                                (10,'MERCENARIO','HUMANO',3,0,7,0,'N',1,2,1,5,'/public/images/Unidades/humanos/mercenario.png',3),
                                                                                                                                                                (11,'TRITÓN BUSCA-PESCA','TRITÓN',3,0,4,2,'N',3,3,2,8,'/public/images/Unidades/monstruos/BuscaPesca.png',2);

INSERT INTO ENEMIGO_ZONA(ID_ZONA,ID_ENEMIGO)VALUES(1,1),
                                                  (1,2),
                                                  (1,4),
                                                  (1,10),
                                                  (2,2),
                                                  (2,3),
                                                  (2,4),
                                                  (2,10),
                                                  (3,2),
                                                  (3,4),
                                                  (3,10),
                                                  (4,7),
                                                  (4,8),
                                                  (4,9),
                                                  (4,11),
                                                  (5,2),
                                                  (5,3),
                                                  (5,4),
                                                  (5,9);



 
INSERT INTO TIPO_ARMA(COD_TIPO_ARMA,DESCRIPCION_TIPO_ARMA)VALUES('ESP','ESPADA'),
                                                                ('DAG','DAGA'),
                                                                ('BAS', 'BASTÓN'),
                                                                ('ARC', 'ARCO'),
                                                                ('HAC', 'HACHA'),
                                                                ('LAR', 'LARGA'),
                                                                ('PIS', 'PISTOLA');    



INSERT INTO ITEM(COD_ITEM,NOMBRE_ITEM,DESCRIPCION_ITEM,RUTA_IMAGEN,PRECIO_BASE)VALUES('PCUR','POCION CURATIVA','RESTITUYE HASTA X** PUNTOS DE VITALIDAD. **DEPENDE DE TIRADA 1 DADO','/public/images/Item/pCurativa.jpg',20),
                                                                                    ('PDFI','POCION DEFENSA FISICA','AUMENTA X** PUNTOS DE DEFENSA FISICA. **DEPENDE DE TIRADA 1 DADO','/public/images/Item/pDefensaFisica.jpg',15),
                                                                                    ('PVEL','POCION DE VELOCIDAD','ESQUIVA AUMENTA X** PUNTOS DURANTE 3 TURNOS. **DEPENDE DE TIRADA 1 DADO','/public/images/Item/pVelocidad.jpg',50),
                                                                                    ('POPM', 'POCION DE PUNTOS MAGICOS', 'RESTITUYE HASTA X** PUNTOS MAGICOS. **DEPENDE DE TIRADA 1 DADO','/public/images/Item/pPuntosMagicos.jpg',20),
                                                                                    ('LFEN', 'LAGRIMAS DE FENIX', 'RESUCITA A UN PERSONAJE CAIDO CON TODA SU VIT Y PM','/public/images/Item/lagrimaFenix.png',150),
                                                                                    ('VENE','VENENO','PROVOCA X** DANO DURANTE TRES TURNOS. **DEPENDE DE TIRADA 1 DADO','/public/images/Item/veneno.jpg',40),
                                                                                    ('REFU','REFUGIO','PERMITE RECUPERAR TODA LA VIT Y EL PM. SOLO EN EL MAPA DE CAMPAÑA','/public/images/Item/refugio.jpg',40),
                                                                                    ('PCOB','POLVOS DEL COBARDE','EVITA TIRADA DE LUCHA EN EL MAPA DE CAMPAÑA DURANTE TRES JORNADAS','/public/images/Item/polvosCobarde.jpg',25),
                                                                                    ('PCIU','PERGAMINO DE LA CIUDAD', 'TELETRANSPORTA AL GRUPO A LA ÚLTIMA CIUDAD VISITADA','/public/images/Item/Pergamino.png',60),
                                                                                    ('PDMA','POCION DE DEFENSA MAGICA','AUMENTA X** PUNTOS DE DEFENSA MAGICA. **DEPENDE DE TIRADA 1 DADO','/public/images/Item/pMagica.jpg',15),
                                                                                    ('GANZ','GANZUA','PERMITE ABRIR ALGUNAS PUERTAS Y COFRES CERRADOS (NO MAGICAMENTE)','/public/images/Item/ganzua.png',35),
                                                                                    ('MPEQ','MACUTO PEQUEÑO','OTORGA 20 CASILLAS DE ALMACENAMIENTO ADICIONAL','/public/images/Item/mpequeño.jpg',100),
                                                                                    ('MMED','MACUTO MEDIANO','OTORGA 28 CASILLAS DE ALMACENAMIENTO ADICIONAL','/public/images/Item/mMediano.jpg',150),
                                                                                    ('MMAG','MACUTO MÁGICO','OTORGA 36 CASILLAS DE ALMACENAMIENTO ADICIONAL','/public/images/Item/mMágico.jpg',250);                                                                                                                                                                                                                                                                                               