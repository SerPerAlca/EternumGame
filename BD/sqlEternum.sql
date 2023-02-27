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
    AGILIDAD INT(1) NOT NULL,
    VITALIDAD INT(3) NOT NULL,
    RUTA_IMAGEN VARCHAR(100) NOT NULL,
    PROBABILIDAD_APARACION int(1) NOT NULL,
    EXPERIENCIA INT(3) NOT NULL,
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
        ID_ITEM INT(2) NOT NULL,
        NOMBRE_ITEM VARCHAR(30) NOT NULL,
        DESCRIPCION_ITEM VARCHAR(100) NOT NULL,
        PROBABILIDAD_APARACION INT(1) NOT NULL,
        RUTA_IMAGEN VARCHAR(100) NOT NULL,
        PRECIO_BASE INT(4) NOT NULL,
        TAMAÑO INT(2) NOT NULL,
        PRIMARY KEY(ID_ITEM)
    );

     CREATE TABLE IF NOT EXISTS TIPO_ARMA(
        COD_TIPO_ARMA VARCHAR(4) NOT NULL,
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
        DINERO INT(4) NOT NULL,
        CREACION_SESSION DATETIME NOT NULL, 
        PRIMARY KEY(ID_SESSION)
    ); 

    CREATE TABLE IF NOT EXISTS PNJ(
        ID_PNJ INT(2) NOT NULL AUTO_INCREMENT,
        COD_HEROE VARCHAR(4) NOT NULL,
        NIVEL INT(2) NOT NULL, 
        NOMBRE_PNJ VARCHAR(25) NOT NULL,
        ID_SESSION INT(2) NOT NULL, 
        PRIMARY KEY(ID_PNJ),
        FOREIGN KEY(COD_HEROE) REFERENCES HEROE(COD_HEROE),
        FOREIGN KEY(ID_SESSION) REFERENCES SESSION_PNJ(ID_SESSION)
    );

       CREATE TABLE IF NOT EXISTS PNJ_ITEM(
        ID_PNJ INT(2) NOT NULL,
        ID_ITEM INT(2) NOT NULL,
        CANTIDAD INT(2) NOT NULL,
        PRIMARY KEY(ID_ITEM, ID_PNJ),
        FOREIGN KEY(ID_PNJ) REFERENCES PNJ(ID_PNJ),
        FOREIGN KEY(ID_ITEM) REFERENCES ITEM(ID_ITEM)
    );

    CREATE TABLE IF NOT EXISTS ARMA(
        ID_ARMA INT(2) NOT NULL,
        ID_PNJ INT(2),
        NOMBRE_ARMA VARCHAR(35) NOT NULL,
        COD_TIPO_ARMA VARCHAR(4) NOT NULL,
        COD_EFECTO_MAGICO VARCHAR(4),      
        DESCRIPCION VARCHAR(100) NOT NULL,
        DAÑO_FISICO INT(2) NOT NULL,
        DAÑO_MAGICO INT(2) NOT NULL,
        ALCANCE INT(1) NOT NULL,
        PRECIO_BASE INT(4) NOT NULL,
        RUTA_IMAGEN VARCHAR(100) NOT NULL,
        RECOMPENSA CHAR(1) NOT NULL,
        TAMAÑO INT(2) NOT NULL,
        DESTREZA INT(2) NOT NULL,
        TIER INT(1) NOT NULL,
        OBTENIDA CHAR(1) NOT NULL,
        PRIMARY KEY(ID_ARMA),
        FOREIGN KEY(ID_PNJ) REFERENCES PNJ(ID_PNJ),
        FOREIGN KEY(COD_TIPO_ARMA) REFERENCES TIPO_ARMA(COD_TIPO_ARMA),
        FOREIGN KEY(COD_EFECTO_MAGICO) REFERENCES EFECTO_MAGICO(COD_EFECTO_MAGICO)
    );



    CREATE TABLE IF NOT EXISTS TIPO_ARMADURA(
        COD_TIPO_ARMADURA VARCHAR(4) NOT NULL,
        DESCRIPCION_TIPO_ARMADURA VARCHAR(10) NOT NULL,
        PRIMARY KEY(COD_TIPO_ARMADURA)
    );

    CREATE TABLE IF NOT EXISTS ARMADURA(
        ID_ARMADURA INT(2) NOT NULL,
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
        RECOMPENSA CHAR(1) NOT NULL,
        DESTREZA INT(2) NOT NULL,
        TIER INT(1) NOT NULL,
        OBTENIDA CHAR(1) NOT NULL,
        PRIMARY KEY(ID_ARMADURA),
        FOREIGN KEY(COD_TIPO_ARMADURA) REFERENCES TIPO_ARMADURA(COD_TIPO_ARMADURA),
        FOREIGN KEY(COD_EFECTO_MAGICO) REFERENCES EFECTO_MAGICO(COD_EFECTO_MAGICO),
        FOREIGN KEY(ID_PNJ) REFERENCES PNJ(ID_PNJ)
    );

    CREATE TABLE IF NOT EXISTS TIENDA(
        ID_TIENDA INT(2) NOT NULL,
        ID_ZONA INT(3) NOT NULL,
        NOMBRE_TIENDA VARCHAR(30) NOT NULL,
        ESLOGAN VARCHAR(50) NOT NULL,
        MULTIPLICADOR_PRECIO_BASE INT NOT NULL,
        PRIMARY KEY(ID_TIENDA),
        FOREIGN KEY(ID_ZONA) REFERENCES ZONA(ID_ZONA)
    );

     CREATE TABLE IF NOT EXISTS ARMADURA_TIENDA(
        ID_TIENDA INT(2) NOT NULL,  
        ID_ARMADURA INT(2) NOT NULL,
        FOREIGN KEY(ID_ARMADURA) REFERENCES ARMADURA(ID_ARMADURA),
        FOREIGN KEY(ID_TIENDA) REFERENCES TIENDA(ID_TIENDA),
        PRIMARY KEY(ID_ARMADURA, ID_TIENDA)
    );

    CREATE TABLE IF NOT EXISTS ITEM_TIENDA(
        ID_TIENDA INT(2) NOT NULL,
        ID_ITEM INT(2) NOT NULL,
        FOREIGN KEY(ID_ITEM) REFERENCES ITEM(ID_ITEM),
        FOREIGN KEY(ID_TIENDA) REFERENCES TIENDA(ID_TIENDA),
        PRIMARY KEY(ID_ITEM, ID_TIENDA)
    );

    CREATE TABLE IF NOT EXISTS ARMA_TIENDA(
        ID_TIENDA INT(2) NOT NULL,
        ID_ARMA INT(2) NOT NULL,
        FOREIGN KEY(ID_ARMA) REFERENCES ARMA(ID_ARMA),
        FOREIGN KEY(ID_TIENDA) REFERENCES TIENDA(ID_TIENDA),
        PRIMARY KEY(ID_ARMA, ID_TIENDA)
    );

    
   
    
    


INSERT INTO TIPO_ARMADURA(COD_TIPO_ARMADURA,DESCRIPCION_TIPO_ARMADURA)VALUES('YELM','YELMO'),
                                                                        ('CORA','CORAZA'),
                                                                        ('COMP','COMPLETA');

INSERT INTO EFECTO_MAGICO(COD_EFECTO_MAGICO,NOMBRE_EFECTO_MAGICO,DESCRIPCION_EFECTO_MAGICO)VALUES('PERF','PERFORACION', 'IGNORA ARMADURA'),
                                                                            ('VENE','VENENO', 'AÑADE +X AL DAÑO FISICO EN CADA ATAQUE'),
                                                                            ('CAOT', 'CAOTICO','AÑADE +X AL DAÑO MÁGICO EN CADA ATAQUE');        


INSERT INTO ARMADURA(ID_ARMADURA,COD_TIPO_ARMADURA,COD_EFECTO_MAGICO,ID_PNJ,NOMBRE_ARMADURA,DESCRIPCION,DEFENSA_FISICA,DEFENSA_MAGICA,PRECIO_BASE,RUTA_IMAGEN,TAMAÑO, RECOMPENSA,DESTREZA,TIER,OBTENIDA)VALUES(1,'COMP',NULL,NULL,'ARMADURA COMPLETA DEL BOSQUE MALDITO','+1 DEFF. ANTE CRIATURAS / +2 DEFM. EN BOSQUE',3,4,500,'/public/images/Armadura/armaduraBosqueMal.jpg',23,'S',4,3,'N'),
                                                                                                                                                        (2,'COMP',NULL,NULL,'ARMADURA DEL CORSARIO ROJO','+1 AGILIDAD && +3 DEFM EN AGUA',5,2,620,'/public/images/Armadura/armCorsRojo.jpg',20,'S',5,3,'N'),
                                                                                                                                                        (3,'COMP',NULL,NULL,'TUNICA DEL SACERDOTE DEL AGUA','+1 DE PM / +1 ATAQUE MAGICO',2,2,410,'/public/images/Armadura/TunicaSacAgua.jpg',21,'N',4,1,'N'),
                                                                                                                                                        (4,'COMP',NULL,NULL,'TÚNICA DE LAPISLAZULI', '+2 PM / +1 ATAQUE MAGICO', 2,7,560,'/public/images/Armadura/tunicaLapislazuli.jpg',21,'S',5,4,'N'),
                                                                                                                                                        (5,'COMP',NULL,NULL,'ARMADURA PESADA SILVANA', '+2 ATAQUE FIS Y MAG VS CRIATURAS / +3 DEF FIS Y MAG EN BOSQUE', 3,3,620,'/public/images/Armadura/armaduraPesadaSilvana.jpg',20,'S',6,2,'N'),
                                                                                                                                                        (6,'COMP',NULL,NULL,'ARMADURA DE SURCA', '+3 DEF FIS EN AGUA / +1 DEF MAG EN AGUA', 2,1,450,'/public/images/Armadura/Armadura de Surca.jpg',20,'N',5,1,'N'),
                                                                                                                                                        (7,'COMP',NULL,NULL,'ARMADURA DE CARRERA BLANCA',' +1 AGILIDAD / +1 DEF FISICA EN PRADERA',3,1,360,'/public/images/Armadura/armaduraCarreraBlanca.jpg',20,'S',4,1,'N'),
                                                                                                                                                        (8,'COMP',NULL,NULL,'ARMADURA COMPLETA DEL PICARO GUERRERO','+1 DEFMAG VS HUMANOS / +1 VELOCIDAD',5,1,420,'/public/images/Armadura/armComPicaro.jpg',22,'N',6,2,'N'),
                                                                                                                                                        (9,'CORA',NULL,NULL,'ARMADURA RUBI','+1 DEF FIS VS ELFOS / +2 DEF MAG VS ELFOS',4,2,560,'/public/images/Armadura/Armadura Rubí.jpg',20,'S',5,2,'N'),
                                                                                                                                                        (10,'COMP',NULL,NULL,'ARMADURA COMPLETA DE LA LUZ',' +3 VELOCIDAD / +1 ESQUIVA / +3 DESTREZA',7,6,760,'/public/images/Armadura/armaduraCompleta.jpg',25,'S',7,5,'N'),
                                                                                                                                                        (11,'COMP',NULL,NULL,'TUNICA VENTORMENTA','+2 PM / 3PM EN BOSQUE',2,5,480,'/public/images/Armadura/tunicaVentormenta.jpg',20,'N',5,3,'N'),
                                                                                                                                                        (12,'COMP',NULL,NULL,'ARMADURA COMPLETA DE LA LLAMA BLANCA','+1 DEF FIS VS CRIATURAS',6,4,650,'/public/images/Armadura/armaduraLlamaBlanca.jpg',22,'S',6,4,'N'),
                                                                                                                                                        (13,'COMP',NULL,NULL,'ARMADURA COMPLETA DE LA ARAÑA',' +2 DEF FIS Y MAG VS CRIATURAS Y ALTOS ELFOS',4,5,650,'/public/images/Armadura/ArmaduraAraña.jpg',23,'S',5,4,'N'),
                                                                                                                                                        (14,'COMP',NULL,NULL,'TUNICA DEL ESPECTRO','+1 VELOCIDAD / +2 ATAQUE MAG',1,6,480,'/public/images/Armadura/tunicaEspectro.jpg',20,'S',4,3,'N'),
                                                                                                                                                        (15,'COMP',NULL,NULL,'ARMADURA COMPLETA DEL DEFENSOR DE LA HUMANIDAD','+1 VELOCIDAD / +3 DEF FIS VS NO HUMANOS',4,4,580,'/public/images/Armadura/armaduraDefensor.jpg',25,'S',4,3,'N'),
                                                                                                                                                        (16,'COMP',NULL,NULL,'ARMADURA COMPLETA DE SOMBRA','+2 VELOCIDAD / +2 DESTREZA / +1 ATAQUE FIS VS ELFOS',4,3,560,'/public/images/Armadura/armaduraSombra.png',23,'S',4,3,'N'),
                                                                                                                                                        (17,'COMP',NULL,NULL,'ARMADURA COMPLETA DEL RUBI','+3 DEF MAG VS HUMANOS / +3 DEF FIS VS ELFOS',5,4,720,'/public/images/Armadura/armaduraCompletaRubi.png',24,'S',5,4,'N'),
                                                                                                                                                        (18,'COMP',NULL,NULL,'ARMADURA COMPLETA DE LA FE','+2 DEF FIS VS NO HUMANOS / +2 DEF MAG VS NO HUMANOS',5,3,650,'/public/images/Armadura/armaduraCompletaFe.jpg',24,'S',5,3,'N'),
                                                                                                                                                        (19,'COMP',NULL,NULL,'ARMADURA COMPLETA DEL MAGO DE RUTH','+1 DESTREZA / +1 VELOCIDAD',3,5,500,'/public/images/Armadura/completaRuth.jpg',23,'S',4,3,'N'),
                                                                                                                                                        (20,'COMP',NULL,NULL,'TUNICA DEL MAGO DEFENSOR','+1 DESTREZA / +2 PM ',2,6,550,'/public/images/Armadura/magoDefensor.jpg',20,'S',4,3,'N'),
                                                                                                                                                        (21,'COMP',NULL,NULL,'ARMADURA COMPLETA DEL FENIX','+3 DEF MAG Y FIS VS ELFOS OSCUROS / +2 PM',6,4,720,'/public/images/Armadura/armaduraComFenix.jpg',23,'S',7,4,'N'),
                                                                                                                                                        (22,'COMP',NULL,NULL,'ARMADURA COMPLETA DE KARAK','+2 DEF FIS VS ORCOS / +1 DESTREZA / +1 ESQUIVA VS ORCOS',8,1,700,'/public/images/Armadura/armaduraComKarak.png',20,'S',7,4,'N'),
                                                                                                                                                        (23,'COMP',NULL,NULL,'ARMADURA SAQUEADOR DE NORSCA','+2 DEF FIS Y MAG VS HUMANOS/ +1 DESTREZA',3,1,520,'/public/images/Armadura/armaduraSaqNorsca.png',20,'S',4,1,'N'),
                                                                                                                                                        (24,'COMP',NULL,NULL,'ARMADURA COMPLETA DEL PROSCRITO','+2 VELOCIDAD/ +1 PM',4,2,500,'/public/images/Armadura/armaduraComProscrito.jpg',22,'S',5,2,'N'),
                                                                                                                                                        (25,'COMP',NULL,NULL,'ARMADURA DEL TIGRE DE ACERO','+2 DESTREZA/ +2 DEF FISICA VS CRIATURAS',5,3,640,'/public/images/Armadura/armaduraDelTigre.jpg',22,'S',6,3,'N'),
                                                                                                                                                        (26,'COMP',NULL,NULL,'ARMADURA CEREMONIAL DE ULTHUAN','+3 DESTREZA / +2 PM / +2 DEF FIS Y MAG VS DRAGONES',3,3,600,'/public/images/Armadura/armaduraCeremonialUlth.jpg',19,'S',4,2,'N'),
                                                                                                                                                        (27,'COMP',NULL,NULL,'ARMADURA COMPLETA NEGRA DE VALIDOR','+2 PM / +1 DEF FIS Y MAG VS ELFOS',6,4,800,'/public/images/Armadura/negraValidor.jpg',24,'S',8,4,'N'),
                                                                                                                                                        (28,'COMP',NULL,NULL,'ARMADURA COMPLETA DRACONICA','+2 PM / +2 DESTREZA / +3 DEF FIS Y MAG VS DRAGONES Y CRIATURAS',6,3,860,'/public/images/Armadura/draconica.jpeg',25,'S',8,4,'N'),
                                                                                                                                                        (29,'COMP',NULL,NULL,'TUNICA DE LA ORDEN DEL BUHO','+3 PM / +2 PM EN BOSQUE / +1 PM EN MONTAÑA',2,5,700,'/public/images/Armadura/buho.jpg',21,'S',7,3,'N'),
                                                                                                                                                        (30,'COMP',NULL,NULL,'ARMADURA DE AMAZONA','+3 VELOCIDAD / +1 ESQUIVA / +2 DEF FIS EN BOSQUE',5,4,800,'/public/images/Armadura/amazona.jpg',19,'S',5,4,'N');


INSERT INTO ARMADURA(ID_ARMADURA,COD_TIPO_ARMADURA,COD_EFECTO_MAGICO,ID_PNJ,NOMBRE_ARMADURA,DESCRIPCION,DEFENSA_FISICA,DEFENSA_MAGICA,PRECIO_BASE,RUTA_IMAGEN,TAMAÑO, RECOMPENSA,DESTREZA,TIER,OBTENIDA)VALUES(31,'CORA',NULL,NULL,'CHALECO DE MERCENARIO','+2 ALCANCE',1,0,300,'/public/images/Armadura/chalecoMerc.jpg',13,'N',2,1,'N'),
                                                                                                                                                            (32,'CORA',NULL,NULL,'CORAZA DE CARREBURGO','+1 DEF FIS EN CARREBURGO',1,0,290,'/public/images/Armadura/corazaCarreburgo.png',12,'S',2,1,'N'),
                                                                                                                                                            (33,'CORA',NULL,NULL,'CORAZA COMUN DE KISLEV','+1 DEF FIS EN KISLEV',1,0,290,'/public/images/Armadura/corazaKislev.jpg',12,'N',2,1,'N'),
                                                                                                                                                            (34,'CORA',NULL,NULL,'CORAZA STIRLAN','+2 DEF FIS VS CRIATURAS',1,0,330,'/public/images/Armadura/corazaStirlan.png',14,'S',2,1,'N'),
                                                                                                                                                            (35,'CORA',NULL,NULL,'CORAZA DEL MAGO BUCANERO','+1 PM / +1 PM EN MAR',1,2,400,'/public/images/Armadura/magoMarinero.png',12,'S',3,2,'N'),
                                                                                                                                                            (36,'CORA',NULL,NULL,'CORAZA DE WISLEN','+1 DEF FIS EN WISLEN',1,0,300,'/public/images/Armadura/Coraza De Wislen.png',12,'S',2,1,'N'),
                                                                                                                                                            (37,'CORA',NULL,NULL,'COTA DE MALLA ENANA','+2 DEF FIS SI ES LLEVADA POR ENANO',2,0,350,'/public/images/Armadura/cotaMallaEnana.png',10,'N',3,1,'N');

INSERT INTO ARMADURA(ID_ARMADURA,COD_TIPO_ARMADURA,COD_EFECTO_MAGICO,ID_PNJ,NOMBRE_ARMADURA,DESCRIPCION,DEFENSA_FISICA,DEFENSA_MAGICA,PRECIO_BASE,RUTA_IMAGEN,TAMAÑO, RECOMPENSA,DESTREZA,TIER,OBTENIDA)VALUES(38,'YELM',NULL,NULL,'YELMO DEL IMPERIANO JUSTO','',2,0,200,'/public/images/Armadura/yelmoImperianoJusto.png',6,'N',2,1,'N'),      
                                                                                                                                                                (39,'YELM',NULL,NULL,'YELMO BRETONIANO','+1 DEF FIS VS CRIATURAS',1,1,230,'/public/images/Armadura/yelmoBretoniano.png',7,'S',2,1,'N'),  
                                                                                                                                                                (40,'YELM',NULL,NULL,'YELMO DEL SUMO INQUISIDOR','+1 DEF FIS VS NO HUMANOS',2,1,300,'/public/images/Armadura/yelmoSumoInquisidor.png',7,'N',2,2,'N'),  
                                                                                                                                                                (41,'YELM',NULL,NULL,'YELMO CRUZADO','+1 DEF FIS Y MAG VS NO HUMANOS',1,0,250,'/public/images/Armadura/yelmoCruzado.png',6,'N',2,1,'N');                                                                                                                                                 



                                                                        



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
                                                                ('AGI','AGILIDAD');

INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('DENI','VIT',4,4),
                                                                                   ('DENI','AFI',0,0),
                                                                                   ('DENI','AMA',4,4),
                                                                                   ('DENI','DFI',1,1),
                                                                                   ('DENI','DMA',4,4),
                                                                                   ('DENI','DES',4,4),
                                                                                   ('DENI','PMA',5,5),
                                                                                   ('DENI','VEL',3,3),
                                                                                   ('DENI','AGI',4,0);

INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('KORO','VIT',5,5),
                                                                                   ('KORO','AFI',2,2),
                                                                                   ('KORO','AMA',0,0),
                                                                                   ('KORO','DFI',5,5),
                                                                                   ('KORO','DMA',2,2),
                                                                                   ('KORO','DES',5,5),
                                                                                   ('KORO','PMA',4,4),
                                                                                   ('KORO','VEL',3,3),
                                                                                   ('KORO','AGI',3,0);

INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('GROJ','VIT',6,6),
                                                                                   ('GROJ','AFI',3,3),
                                                                                   ('GROJ','AMA',0,0),
                                                                                   ('GROJ','DFI',4,4),
                                                                                   ('GROJ','DMA',0,0),
                                                                                   ('GROJ','DES',1,1),
                                                                                   ('GROJ','PMA',3,3),
                                                                                   ('GROJ','VEL',2,2),
                                                                                   ('GROJ','AGI',3,0);

INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('BALT','VIT',4,4),
                                                                                   ('BALT','AFI',0,0),
                                                                                   ('BALT','AMA',5,5),
                                                                                   ('BALT','DFI',1,1),
                                                                                   ('BALT','DMA',4,4),
                                                                                   ('BALT','DES',4,4),
                                                                                   ('BALT','PMA',4,4),
                                                                                   ('BALT','VEL',2,2),
                                                                                   ('BALT','AGI',3,0);


INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('SHEP','VIT',5,5),
                                                                                   ('SHEP','AFI',3,3),
                                                                                   ('SHEP','AMA',1,1),
                                                                                   ('SHEP','DFI',2,2),
                                                                                   ('SHEP','DMA',3,3),
                                                                                   ('SHEP','DES',6,6),
                                                                                   ('SHEP','PMA',2,2),
                                                                                   ('SHEP','VEL',3,3),
                                                                                   ('SHEP','AGI',4,0);


INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('ELIA','VIT',5,5),
                                                                                   ('ELIA','AFI',4,4),
                                                                                   ('ELIA','AMA',0,0),
                                                                                   ('ELIA','DFI',2,2),
                                                                                   ('ELIA','DMA',2,2),
                                                                                   ('ELIA','DES',3,3),
                                                                                   ('ELIA','PMA',3,3),
                                                                                   ('ELIA','VEL',5,5),
                                                                                   ('ELIA','AGI',5,0);


INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('JHON','VIT',5,5),
                                                                                   ('JHON','AFI',3,3),
                                                                                   ('JHON','AMA',1,1),
                                                                                   ('JHON','DFI',4,4),
                                                                                   ('JHON','DMA',1,1),
                                                                                   ('JHON','DES',7,7),
                                                                                   ('JHON','PMA',2,2),
                                                                                   ('JHON','VEL',3,3),
                                                                                   ('JHON','AGI',3,0);

INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('YONN','VIT',5,5),
                                                                                   ('YONN','AFI',2,2),
                                                                                   ('YONN','AMA',2,2),
                                                                                   ('YONN','DFI',2,2),
                                                                                   ('YONN','DMA',3,3),
                                                                                   ('YONN','DES',4,4),
                                                                                   ('YONN','PMA',4,4),
                                                                                   ('YONN','VEL',3,3),
                                                                                   ('YONN','AGI',4,0);


INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('YENN','VIT',5,5),
                                                                                   ('YENN','AFI',3,3),
                                                                                   ('YENN','AMA',1,1),
                                                                                   ('YENN','DFI',2,2),
                                                                                   ('YENN','DMA',2,2),
                                                                                   ('YENN','DES',4,4),
                                                                                   ('YENN','PMA',2,2),
                                                                                   ('YENN','VEL',5,5),
                                                                                   ('YENN','AGI',5,0);

INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('LION','VIT',6,6),
                                                                                   ('LION','AFI',3,3),
                                                                                   ('LION','AMA',0,0),
                                                                                   ('LION','DFI',4,4),
                                                                                   ('LION','DMA',2,2),
                                                                                   ('LION','DES',5,5),
                                                                                   ('LION','PMA',2,2),
                                                                                   ('LION','VEL',4,4),
                                                                                   ('LION','AGI',3,0);                     


INSERT INTO ZONA(ID_ZONA,NOMBRE_ZONA,COD_TIPO_ZONA,PELIGROSIDAD)VALUES(1,'KISLEV','NEV',1),
                                                              (2,'AVERLAN','BOS',2),
                                                              (3,'IMPERIUM','LLA',1),
                                                              (4,'STIRLAN','LLA',2),  
                                                              (5,'CARREBURGO','LLA',1),
                                                              (6,'TIERRAS_INTERMEDIAS','LLA',2),
                                                              (7,'TRANSILVANIA','PAN',3),
                                                              (8,'WISLEN','LLA',2),
                                                              (9,'TIERRAS_DE_HOET','LLA',2),
                                                              (10,'CARRERA_BLANCA','LLA',2),
                                                              (11,'CAMPAMENTO_GRERIUS','LLA',2),
                                                              (12,'CAMPAMENTO_HOOD','BOS',2),
                                                              (13,'IMPERIALES_HOOD','BOS',3);       

INSERT INTO ENEMIGO(ID_ENEMIGO,NOMBRE_ENEMIGO,RAZA,ATAQUE_FISICO,ATAQUE_MAGICO,DEFENSA_FISICA,DEFENSA_MAGICA,IS_BOSS,ALCANCE,VELOCIDAD,AGILIDAD,VITALIDAD,RUTA_IMAGEN,PROBABILIDAD_APARACION,EXPERIENCIA)VALUES(1,'ANDRÓGENES','MONSTRUO',3,0,5,6,'N',1,3,3,10,'/public/images/Unidades/monstruos/Androgenes.png',1,3),
                                                                                                                                                                (2,'FORAJIDO','HUMANO',2,0,3,0,'N',4,2,2,6,'/public/images/Unidades/humanos/Forajido.png',3,1),
                                                                                                                                                                (3,'ASALTA BOSQUES','HUMANO',3,0,4,0,'N',3,3,2,6,'/public/images/Unidades/humanos/asalta-bosques.png',3,2),
                                                                                                                                                                (4,'SALTEADOR DE CAMINOS','HUMANO',2,0,4,0,'N',1,2,2,6,'/public/images/Unidades/humanos/Salteador.png',3,2),
                                                                                                                                                                (5,'GRERIUS BRON','HUMANO',3,1,8,4,'S',1,3,3,12,'/public/images/Unidades/humanos/greriusBron.png',3,10),
                                                                                                                                                                (6,'HOOD EL FORAJIDO','HUMANO',4,3,10,6,'S',4,3,4,15,'/public/images/Unidades/humanos/Hood.png',3,12),
                                                                                                                                                                (7,'TRITÓN GUERRERO','TRITÓN',4,0,6,2,'N',1,3,3,10,'/public/images/Unidades/monstruos/TritonGuerrero.png',3,3),
                                                                                                                                                                (8,'ROMPE-CORAZAS','MONSTRUO',2,2,5,2,'N',1,2,3,9,'/public/images/Unidades/monstruos/RompeCorazas.png',3,3),
                                                                                                                                                                (9,'BATIDOR','HUMANO',2,0,6,0,'N',4,4,3,7,'/public/images/Unidades/humanos/batidor.png',3,2),
                                                                                                                                                                (10,'MERCENARIO','HUMANO',3,0,7,0,'N',1,2,2,5,'/public/images/Unidades/humanos/mercenario.png',3,1),
                                                                                                                                                                (11,'TRITÓN BUSCA-PESCA','TRITÓN',3,0,4,2,'N',3,3,3,8,'/public/images/Unidades/monstruos/BuscaPesca.png',2,3),
                                                                                                                                                                (12,'VERDUGO EN PARO','HUMANO',3,0,2,1,'N',1,3,3,7,'/public/images/Unidades/humanos/VerdugoEnParo.png',3,2),
                                                                                                                                                                (13, 'CAZADOR FURTIVO','HUMANO',2,1,3,1,'N',5,3,3,7,'/public/images/Unidades/humanos/CazadorFurtivo.jpg',3,3),
                                                                                                                                                                (14,'PROSCRITO','HUMANO',2,0,3,1,'N',1,3,2,6,'/public/images/Unidades/humanos/Proscrito.png',3,2),
                                                                                                                                                                (15,'ACECHANTE','HUMANO',3,0,2,1,'N',1,4,3,5,'/public/images/Unidades/humanos/Achechante.png',3,2),
                                                                                                                                                                (16,'ALFIL IMPERIAL', 'HUMANO',3,0,4,2,'N',1,3,3,8,'/public/images/Unidades/humanos/alfilImperial.png',2,3),
                                                                                                                                                                (17,'ASALTADOR','HUMANO',2,1,2,2,'N',3,2,2,6,'/public/images/Unidades/humanos/Asaltador.png',3,2),
                                                                                                                                                                (18,'CABALLERO MONAGUILLO','HUMANO',2,0,4,3,'N',1,3,2,6,'/public/images/Unidades/humanos/Monaguillo.png',3,2),
                                                                                                                                                                (19,'SACRIFICADOR','HUMANO',4,2,3,3,'N',1,3,3,7,'/public/images/Unidades/humanos/Sacrificador.png',1,3),
                                                                                                                                                                (20,'DESERTORA VETERANA','HUMANO',3,1,3,1,'N',5,2,3,6,'/public/images/Unidades/humanos/desertoraVeterana.png',3,2),
                                                                                                                                                                (21,'PURIFICADOR DE SIGMAR','HUMANO',1,3,2,4,'N',1,3,2,6,'/public/images/Unidades/humanos/Purificador.png',1,3),
                                                                                                                                                                (22,'SACERDOTE RENEGADO','HUMANO',0,4,1,4,'N',8,1,2,5,'/public/images/Unidades/humanos/SacerRenegado.png',2,2),
                                                                                                                                                                (23,'ELFO PROSCRITO','ELFO OSCURO',2,3,2,5,'N',7,4,3,6,'/public/images/Unidades/elfosOscuros/ElfoProscrito.png',1,3),
                                                                                                                                                                (24,'SACERDOTE DE LA CONFESION','HUMANO',0,4,3,6,'S',9,2,2,8,'/public/images/Unidades/humanos/sacerConfesion.png',3,15);

INSERT INTO ENEMIGO_ZONA(ID_ZONA,ID_ENEMIGO)VALUES(1,1),
                                                (1,2),
                                                (1,10),
                                                (1,4),
                                                (1,22),
                                                (2,2),
                                                (2,3),
                                                (2,10),
                                                (2,15),
                                                (2,21),
                                                (2,22),
                                                (3,13),
                                                (3,2),
                                                (3,10),
                                                (4,7),
                                                (4,11),
                                                (4,12),
                                                (4,13),
                                                (4,23),
                                                (11,12),
                                                (11,14),
                                                (11,13),
                                                (12,17),
                                                (12,20),
                                                (12,14),
                                                (12,23),
                                                (13,9),
                                                (13,16),
                                                (13,18),
                                                (13,19),
                                                (13,21);



 
INSERT INTO TIPO_ARMA(COD_TIPO_ARMA,DESCRIPCION_TIPO_ARMA)VALUES('ESPA','ESPADA'),
                                                                ('DAGA','DAGA'),
                                                                ('BAST','BASTÓN'),
                                                                ('ARCO','ARCO'),
                                                                ('HACH','HACHA'),
                                                                ('DOSM','DOS MANOS'),
                                                                ('PIST','PISTOLA');    

INSERT INTO ARMA(ID_ARMA,NOMBRE_ARMA,COD_TIPO_ARMA,DESCRIPCION,DAÑO_FISICO,DAÑO_MAGICO,ALCANCE,PRECIO_BASE,RUTA_IMAGEN,RECOMPENSA,TAMAÑO,DESTREZA,TIER,OBTENIDA)VALUES(1,'DAGA RAJA-ENANOZ','DAGA','+3 DAÑO FÍSICO VS ENANOS',3,0,1,130,'/public/images/Arma/dagaRajaEnanoz.png','S',4,4,1,'N'),
                                                                                                                        (2,'DAGA DE LA PUTREFACCIÓN','DAGA','TIRADA 12 ENVENENA 2 TURNOS',3,1,1,160,'/public/images/Arma/dagaPutrefaccion.png','S',4,5,2,'N'),
                                                                                                                        (3,'DAGA ARTEFACTO','DAGA','+1 DAÑO FISICO VS HUMANOS',2,0,1,110,'/public/images/Arma/dagaArtefacto.png','S',4,4,1,'N'),
                                                                                                                        (4,'DAGA DEL TIGRE','DAGA','',2,1,1,155,'/public/images/Arma/dagaDelTigre.png','N',4,5,1,'N'),
                                                                                                                        (5,'DAGA DEL ROMANCE','DAGA','',3,0,1,120,'/public/images/Arma/dagaRomance.png','S',4,3,1,'N'),
                                                                                                                        (6,'ARCO BRETONIANO','ARCO','+1 DAÑO  DE PERFORACION (IGNORA ARMADURA)',4,0,6,190,'/public/images/Arma/ArcoBretoniano.png','N',9,5,2,'N'),
                                                                                                                        (7,'ARCO DEL NOGAL','ARCO','+1 DAÑO  DE PERFORACION (IGNORA ARMADURA)',4,1,7,220,'/public/images/Arma/arcoDelNogal.png','N',9,6,2,'N'),
                                                                                                                        (8,'ARCO AFLIGIDO','ARCO','+2 DAÑO DE PERFORACION (IGNORA ARMADURA) VS CRIATURAS',5,1,8,315,'/public/images/Arma/arcoAfligido.png','S',9,8,2,'N'),
                                                                                                                        (9,'ARCO SILVANAS','ARCO','+2 DAÑO DE PERFORACION (IGNORA ARMADURA) VS HUMANOS',5,1,9,330,'/public/images/Arma/arcoSilvanas.png','S',8,8,2,'N'),
                                                                                                                        (10,'MARTILLO DEL BUCANERO','DOSM','+1 FISICO ADICIONAL SI LA ARMADURA SE DESTRUYE ',5,0,2,330,'/public/images/Arma/martilloBucanero.png','S',12,6,2,'N'),
                                                                                                                        (11,'MARTILLO DEL ENANO JUSTO','DOSM','+2 FISICO ADICIONAL SI LA ARMADURA SE DESTRUYE EN EL PRIMER ATAQUE',5,2,2,380,'/public/images/Arma/martilloEnanoJusto.png','S',12,8,3,'N'),    
                                                                                                                        (12,'LA BUCANERA','PIST','+2 DAÑO DE PERFORACION (IGNORA ARMADURA)',5,0,6,320,'/public/images/Arma/laBucanera.png','S',5,6,2,'N'),
                                                                                                                        (13,'LA RESTAURA HONOR','PIST','SI SE SACA +8 (DOS DADOS) ATACA DOS VECES',3,0,4,335,'/public/images/Arma/restauraHonor.png','S',5,5,1,'N'),
                                                                                                                        (14,'LA AVERLIANA','PIST','+3 DAÑO FISICO VS HUMANOS',3,0,4,350,'/public/images/Arma/averliana.png','N',5,6,1,'N'),
                                                                                                                        (15,'YO SOY GROOT','HACH','+3 DAÑO FISICO VS ELFOS',4,1,2,400,'/public/images/Arma/yoSoyGroot.png','S',7,7,2,'N'),
                                                                                                                        (16,'HACHA DE NOBLE','HACH','+2 DAÑO FISICO VS HUMANOS',4,1,2,365,'/public/images/Arma/hachaNoble.png','N',7,5,2,'N'),
                                                                                                                        (17,'HACHA DE NORSCA ','HACH','+1 DAÑO DE PERFORACION (IGNORA ARMADURA)',5,1,2,420,'/public/images/Arma/hachaOrcaNorsca.png','S',8,8,2,'N'),
                                                                                                                        (18,'BASTÓN DEL GUSANO','BAST','+2 DAÑO MÁGICO VS CRIATURAS',0,4,10,500,'/public/images/Arma/bastonCaracol.png','N',13,8,2,'N'),
                                                                                                                        (19,'BASTÓN DE MORKUL','BAST','+3 DAÑO MAGICO VS ALTOS ELFOS',0,5,11,480,'/public/images/Arma/bastonMorkul.png','S',13,10,2,'N'),
                                                                                                                        (20,'BASTÓN DEL BRUJO DIMITROVICH','BAST','OTORGA HECHIZO SUEÑO',0,6,8,550,'/public/images/Arma/bastonDimitrovich.png','N',14,11,2,'N'),
                                                                                                                        (21,'ESPADA DE AVERLAN','ESPA','+2 DAÑO FISICO VS HUMANOS',5,0,1,410,'/public/images/Arma/espadaAverlan.png','N',9,6,2,'N'),
                                                                                                                        (22,'ESPADA DE LA FAMILIA HALAS','ESPA','+2 DAÑO MAGICO VS NO MUERTOS',4,2,1,430,'/public/images/Arma/espadaHalas.png','S',7,7,2,'N'),
                                                                                                                        (23,'ESPADA LOGRADA','ESPA','+2 DAÑO DE PERFORACION (IGNORA ARMADURA)',4,0,1,420,'/public/images/Arma/espadaLograda.png','S',7,7,2,'N'),
                                                                                                                        (24,'ESPADA DE KISLEV','ESPA','+1 DAÑO MÁGICO VS CRIATURAS',4,0,1,400,'/public/images/Arma/espadaKislev.png','N',7,6,2,'N'),
                                                                                                                        (25,'ESPADA REVITALIZADORA','ESPA','CURA 1 PUNTO DE VIT AL PORTADOR CADA VEZ QUE ATACA',5,1,1,620,'/public/images/Arma/espadaRevitalizadora.png','N',10,10,2,'N'),
                                                                                                                        (26,'RÁBENDA','ESPA','+2 DAÑO DE PERFORACIÓN (IGNORA ARMADURA)',5,1,1,600,'/public/images/Arma/rabendal.png','N',9,9,2,'N');




INSERT INTO ITEM(ID_ITEM,NOMBRE_ITEM,DESCRIPCION_ITEM,PROBABILIDAD_APARACION,RUTA_IMAGEN,PRECIO_BASE,TAMAÑO)VALUES(1,'POCION CURATIVA','RESTITUYE HASTA X** PUNTOS DE VITALIDAD. **DEPENDE DE TIRADA 1 DADO',3,'/public/images/Item/pCurativa.jpg',20,2),
                                                                                    (2,'POCION DEFENSA FISICA','AUMENTA X** PUNTOS DE DEFENSA FISICA. **DEPENDE DE TIRADA 1 DADO',3,'/public/images/Item/pDefensaFisica.jpg',15,2),
                                                                                    (3,'POCION DE AGILIDAD','AGILIDAD AUMENTA X** PUNTOS DURANTE 3 TURNOS. **DEPENDE DE TIRADA 1 DADO',1,'/public/images/Item/pVelocidad.jpg',70,2),
                                                                                    (4,'POCION DE PUNTOS MAGICOS', 'RESTITUYE HASTA X** PUNTOS MAGICOS. **DEPENDE DE TIRADA 1 DADO',3,'/public/images/Item/pPuntosMagicos.jpg',20,2),
                                                                                    (5,'LAGRIMAS DE FENIX', 'RESUCITA A UN PERSONAJE CAIDO CON TODA SU VIT Y PM',1,'/public/images/Item/lagrimaFenix.png',150,3),
                                                                                    (6,'VENENO','PROVOCA X** DANO DURANTE TRES TURNOS. **DEPENDE DE TIRADA 1 DADO',2,'/public/images/Item/veneno.jpg',40,2),
                                                                                    (7,'REFUGIO','PERMITE RECUPERAR TODA LA VIT Y EL PM. SOLO EN EL MAPA DE CAMPAÑA',1,'/public/images/Item/refugio.jpg',40,5),
                                                                                    (8,'POLVOS DEL COBARDE','EVITA TIRADA DE LUCHA EN EL MAPA DE CAMPAÑA DURANTE TRES JORNADAS',3,'/public/images/Item/polvosCobarde.jpg',25,2),
                                                                                    (9,'PERGAMINO DE LA CIUDAD', 'TELETRANSPORTA AL GRUPO A LA ÚLTIMA CIUDAD VISITADA',1,'/public/images/Item/Pergamino.png',60,3),
                                                                                    (10,'POCION DE DEFENSA MAGICA','AUMENTA X** PUNTOS DE DEFENSA MAGICA. **DEPENDE DE TIRADA 1 DADO',3,'/public/images/Item/pMagica.jpg',15,2),
                                                                                    (11,'GANZUA','PERMITE ABRIR ALGUNAS PUERTAS Y COFRES CERRADOS (NO MAGICAMENTE)',3,'/public/images/Item/ganzua.png',35,1),
                                                                                    (12,'MACUTO PEQUEÑO','OTORGA 20 CASILLAS DE ALMACENAMIENTO ADICIONAL',1,'/public/images/Item/mpequeño.jpg',100,6),
                                                                                    (13,'MACUTO MEDIANO','OTORGA 28 CASILLAS DE ALMACENAMIENTO ADICIONAL',1,'/public/images/Item/mMediano.jpg',150,8),
                                                                                    (14,'MACUTO MÁGICO','OTORGA 36 CASILLAS DE ALMACENAMIENTO ADICIONAL',1,'/public/images/Item/mMágico.jpg',250,10),
                                                                                    (15,'ORO','TE HACE LA VIDA MÁS FÁCIL',4,'/public/images/Item/oro.png',0,0);       


INSERT INTO TIENDA(ID_TIENDA,ID_ZONA,NOMBRE_TIENDA,ESLOGAN,MULTIPLICADOR_PRECIO_BASE)VALUES(1,1,'POCIONES KISLEV','POCIONES QUE NO EXPLOTAN (SI NO QUIERES)',1),
                                                                                        (2,1,'ARMADURAS KISLEV','NO CAZES GOBLIN SIN UNA DE ESTAS',1),
                                                                                        (3,1,'ARMERO KISLEV', 'PARA AMANTES DEL ASESINATO',1),
                                                                                        (4,2,'ITEMS AVERLAN', 'ITEMS DE FIABILIDAD',1),
                                                                                        (5,2,'HERRERO DE ARMADURAS','ARMADURAS IMPERIANAS AUTENTICAS',1),
                                                                                        (6,2,'ARMAS AVERLAN', 'LAS MEJORES DEL IMPERIO',1);

INSERT INTO ITEM_TIENDA(ID_TIENDA,ID_ITEM)VALUES(1,1),
                                                (1,2),
                                                (1,4),
                                                (1,7),
                                                (1,9),
                                                (1,10),
                                                (4,1),
                                                (4,4),
                                                (4,5), 
                                                (4,7),
                                                (4,10),
                                                (4,11);
                                                                                           

INSERT INTO ARMADURA_TIENDA(ID_TIENDA,ID_ARMADURA)VALUES(2,33),
                                                        (2,11),
                                                        (2,6),
                                                        (2,31),
                                                        (2,38),
                                                        (5,3),
                                                        (5,8),
                                                        (5,37),
                                                        (5,40);

INSERT INTO ARMA_TIENDA(ID_TIENDA,ID_ARMA)VALUES(3,4),
                                                (3,6),
                                                (3,16),
                                                (3,24),
                                                (6,14),
                                                (6,26),
                                                (6,21);
                                                