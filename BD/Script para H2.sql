
/*********** H E R O E S ********************************************************************************************************/
CREATE TABLE IF NOT EXISTS HEROE (
	COD_HEROE VARCHAR(4) NOT NULL,
	NOMBRE VARCHAR(50) NOT NULL,
	DESCRIPCION VARCHAR(100),
	RAZA VARCHAR(20) NOT NULL,
	NIVEL INT(2) NOT NULL,
	PRIMARY KEY(COD_HEROE)
);	

INSERT INTO HEROE(COD_HEROE,NOMBRE,DESCRIPCION,RAZA,NIVEL)VALUES('KORO','KOROCK. ROMPE-ESTRELLAS','','ENANO',1);
INSERT INTO HEROE(COD_HEROE,NOMBRE,DESCRIPCION,RAZA,NIVEL)VALUES('GROJ','GROJK. EL BUCANERO DE PIEDRA','','ENANO',1);
INSERT INTO HEROE(COD_HEROE,NOMBRE,DESCRIPCION,RAZA,NIVEL)VALUES('JHON','JHON ALIAS. EL CAZARRECOMPENSAS','','HUMANO',1);
INSERT INTO HEROE(COD_HEROE,NOMBRE,DESCRIPCION,RAZA,NIVEL)VALUES('SHEP','SÉPHIRO. EL VIUDO NEGRO','','ELFO OSCURO',1);
INSERT INTO HEROE(COD_HEROE,NOMBRE,DESCRIPCION,RAZA,NIVEL)VALUES('BALT','BALTAS. MAGO DEL FUEGO ETERNO','','ALTO ELFO',1);
INSERT INTO HEROE(COD_HEROE,NOMBRE,DESCRIPCION,RAZA,NIVEL)VALUES('YONN','YÓNNIRAS. EL RUISEÑOR','','ELFO SILVANO',1);
INSERT INTO HEROE(COD_HEROE,NOMBRE,DESCRIPCION,RAZA,NIVEL)VALUES('KYRI','PRINCIPE KYRION','','ALTO ELFO',1);
INSERT INTO HEROE(COD_HEROE,NOMBRE,DESCRIPCION,RAZA,NIVEL)VALUES('ELIA','ELIA TOFFANA','','KHIMARI',1);
INSERT INTO HEROE(COD_HEROE,NOMBRE,DESCRIPCION,RAZA,NIVEL)VALUES('MAHE','MAHEDROS. EL PIRATA DEL MAR DEL TERROR','','ELFO OSCURO',1);
INSERT INTO HEROE(COD_HEROE,NOMBRE,DESCRIPCION,RAZA,NIVEL)VALUES('LION','LION HEART. EL DESTERRADO','','KHIMARI',1);
INSERT INTO HEROE(COD_HEROE,NOMBRE,DESCRIPCION,RAZA,NIVEL)VALUES('YENN','YENNEFER. HOJA ARDIENTE','','ELFA SILVANA',1);
INSERT INTO HEROE(COD_HEROE,NOMBRE,DESCRIPCION,RAZA,NIVEL)VALUES('VAND','VANDELF. EL PROSCRITO','','HUMANO',1);

CREATE TABLE IF NOT EXISTS ATRIBUTO(
	COD_ATRIBUTO VARCHAR(3) NOT NULL, 
	DESCRIPCION_HABILIDAD VARCHAR(20) NOT NULL,
	PRIMARY KEY(COD_ATRIBUTO)
);

INSERT INTO ATRIBUTO(COD_ATRIBUTO,DESCRIPCION_HABILIDAD)VALUES('VIT','VITALIDAD');
INSERT INTO ATRIBUTO(COD_ATRIBUTO,DESCRIPCION_HABILIDAD)VALUES('AFI','ATAQUE FÍSICO');
INSERT INTO ATRIBUTO(COD_ATRIBUTO,DESCRIPCION_HABILIDAD)VALUES('AMA','ATAQUE MÁGICO');
INSERT INTO ATRIBUTO(COD_ATRIBUTO,DESCRIPCION_HABILIDAD)VALUES('DFI','DEFENSA FÍSICA');
INSERT INTO ATRIBUTO(COD_ATRIBUTO,DESCRIPCION_HABILIDAD)VALUES('DMA','DEFENSA MÁGICA');
INSERT INTO ATRIBUTO(COD_ATRIBUTO,DESCRIPCION_HABILIDAD)VALUES('DES','DESTREZA');
INSERT INTO ATRIBUTO(COD_ATRIBUTO,DESCRIPCION_HABILIDAD)VALUES('PMA','PUNTOS MÁGICOS');
INSERT INTO ATRIBUTO(COD_ATRIBUTO,DESCRIPCION_HABILIDAD)VALUES('VEL','VELOCIDAD');
INSERT INTO ATRIBUTO(COD_ATRIBUTO,DESCRIPCION_HABILIDAD)VALUES('ESQ','ESQUIVA');

CREATE TABLE IF NOT EXISTS HEROE_ATRIBUTO(
	ID_HEROE_ATRIBUTO INT NOT NULL AUTO_INCREMENT,
	COD_HEROE VARCHAR(4) NOT NULL,
	COD_ATRIBUTO VARCHAR(3) NOT NULL,
	VALOR_DEFECTO INT NOT NULL,
	VALOR_ACTUAL INT NOT NULL,
	PRIMARY KEY (ID_HEROE_ATRIBUTO),
	FOREIGN KEY(COD_HEROE) REFERENCES HEROE(COD_HEROE),
	FOREIGN KEY(COD_ATRIBUTO) REFERENCES ATRIBUTO(COD_ATRIBUTO)
);
--KOROCK
INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('KORO','VIT',6,6),
																					('KORO','AFI',6,6),
																					('KORO','AMA',0,0),
																					('KORO','DFI',4,4),
																					('KORO','DMA',0,0),
																					('KORO','DES',4,4),
																					('KORO','PMA',0,0),
																					('KORO','VEL',2,2),
																					('KORO','ESQ',0,0);

--GROJK
INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('GROJ','VIT',4,4),
																					('GROJ','AFI',3,3),
																					('GROJ','AMA',0,0),
																					('GROJ','DFI',3,3),
																					('GROJ','DMA',0,0),
																					('GROJ','DES',2,2),
																					('GROJ','PMA',0,0),
																					('GROJ','VEL',2,2),
																					('GROJ','ESQ',0,0);

--BALTAS 
INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('BALT','VIT',3,3),
																					('BALT','AFI',2,2),
																					('BALT','AMA',5,5),
																					('BALT','DFI',2,2),
																					('BALT','DMA',4,4),
																					('BALT','DES',3,3),
																					('BALT','PMA',4,4),
																					('BALT','VEL',4,4),
																					('BALT','ESQ',0,0);

--SÉPHIRO 
INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('SHEP','VIT',4,4),
																					('SHEP','AFI',4,4),
																					('SHEP','AMA',2,2),
																					('SHEP','DFI',2,2),
																					('SHEP','DMA',1,1),
																					('SHEP','DES',5,5),
																					('SHEP','PMA',2,2),
																					('SHEP','VEL',4,4),
																					('SHEP','ESQ',0,0);

--ELIA TOFFANA 
INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('ELIA','VIT',3,3),
																					('ELIA','AFI',4,4),
																					('ELIA','AMA',0,0),
																					('ELIA','DFI',4,4),
																					('ELIA','DMA',1,1),
																					('ELIA','DES',2,2),
																					('ELIA','PMA',2,2),
																					('ELIA','VEL',6,6),
																					('ELIA','ESQ',4,4);

--JHON ALIAS 
INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('JHON','VIT',5,5),
																					('JHON','AFI',3,3),
																					('JHON','AMA',0,0),
																					('JHON','DFI',3,3),
																					('JHON','DMA',2,2),
																					('JHON','DES',5,5),
																					('JHON','PMA',2,2),
																					('JHON','VEL',3,3),
																					('JHON','ESQ',0,0);

--YÓNNIRAS 
INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('YONN','VIT',3,3),
																					('YONN','AFI',3,3),
																					('YONN','AMA',1,1),
																					('YONN','DFI',3,3),
																					('YONN','DMA',2,2),
																					('YONN','DES',3,3),
																					('YONN','PMA',3,3),
																					('YONN','VEL',5,5),
																					('YONN','ESQ',0,0);

--YENNEFER 
INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('YENN','VIT',3,3),
																					('YENN','AFI',0,0),
																					('YENN','AMA',1,1),
																					('YENN','DFI',2,2),
																					('YENN','DMA',2,2),
																					('YENN','DES',4,4),
																					('YENN','PMA',2,2),
																					('YENN','VEL',5,5),
																					('YENN','ESQ',0,0);

--LION HEART 
INSERT INTO HEROE_ATRIBUTO(COD_HEROE,COD_ATRIBUTO,VALOR_DEFECTO,VALOR_ACTUAL)VALUES('LION','VIT',6,6),
																					('LION','AFI',4,4),
																					('LION','AMA',0,0),
																					('LION','DFI',4,4),
																					('LION','DMA',0,0),
																					('LION','DES',4,4),
																					('LION','PMA',1,1),
																					('LION','VEL',5,5),
																					('LION','ESQ',0,0);




/*********** Z O N A S ********************************************************************************************************/
CREATE TABLE IF NOT EXISTS ZONA (
	ID_ZONA INT(3) NOT NULL AUTO_INCREMENT,
	NOMBRE_ZONA VARCHAR(30) NOT NULL,
	ID_TERRITORIO INT(3) NOT NULL,
	COD_TIPO_ZONA VARCHAR(3) NOT NULL),
	PELIGROSIDAD INT(1) NOT NULL,
	PRIMARY KEY(ID_ZONA)
);	

INSERT INTO ZONA(NOMBRE_ZONA,ID_TERRITORIO,COD_TIPO_ZONA,PELIGROSIDAD)VALUES('CAMPOS DE KISLEV',1,'NEV',1);
INSERT INTO ZONA(NOMBRE_ZONA,ID_TERRITORIO,COD_TIPO_ZONA,PELIGROSIDAD)VALUES('BOSQUE DE LOS RIOS',1,'BOS',2);
INSERT INTO ZONA(NOMBRE_ZONA,ID_TERRITORIO,COD_TIPO_ZONA,PELIGROSIDAD)VALUES('CAMPOS DE IMPERIUM',1,'LLA',1);
INSERT INTO ZONA(NOMBRE_ZONA,ID_TERRITORIO,COD_TIPO_ZONA,PELIGROSIDAD)VALUES('COSTA DE STIRLAN',1,'LLA',2);


/******* E N E M I G O S *********************************************************************************************************/
CREATE TABLE IF NOT EXISTS ENEMIGO(
	ID_ENEMIGO INT(3) NOT NULL AUTO_INCREMENT,
	NOMBRE_ENEMIGO VARCHAR(35) NOT NULL,
	RAZA VARCHAR(15) NOT NULL,
	DAÑO_FISICO INT(2),
	DAÑO_MAGICO INT(2),
	DEFENSA_FISICA INT(2),
	DEFENSA_MAGICA INT(2),
	IS_BOSS VARCHAR(1) NOT NULL,
	ALCANCE INT(2) NOT NULL,
	VELOCIDAD INT(2) NOT NULL,
	ESQUIVA INT(1) NOT NULL,
	VITALIDAD INT(3) NOT NULL,
	RUTA_IMAGEN VARCHAR,
	PRIMARY KEY(ID_ENEMIGO)
);	

INSERT INTO ENEMIGO(NOMBRE_ENEMIGO,RAZA,DAÑO_FISICO,DAÑO_MAGICO,DEFENSA_FISICA,DEFENSA_MAGICA,ALCANCE,VELOCIDAD,ESQUIVA,VITALIDAD,IS_BOSS)VALUES('ANDRÓGENES','MONSTRUO',3,0,5,6,'N',1,3,2,10,'/resources/imagenes/unidades/monstruos/Androgenes.png'),
																																				('FORAJIDO','HUMANO',2,0,3,0,'N',4,2,1,6,'/resources/imagenes/unidades/humanos/forajido.png'),
																																				('ASALTA BOSQUES','HUMANO',3,0,4,0,'N',3,3,1,6,'/resources/imagenes/unidades/humanos/asalta-bosques.jpg'),
																																				('SALTEADOR DE CAMINOS','HUMANO',2,0,4,0,'N',1,2,1,6,'/resources/imagenes/unidades/humanos/salteadorDeCaminos.jpg'),
																																				('GRERIUS BRON','HUMANO',3,1,8,4,'S',1,3,2,12,'/resources/imagenes/unidades/humanos/greriusBron.png'),
																																				('HOOD EL FORAJIDO','HUMANO',4,3,10,6,'S',4,3,2,15,'/resources/imagenes/unidades/monstruos/BuscaPesca.png'),
																																				('TRITÓN GUERRERO','TRITÓN',4,0,6,2,'N',1,3,2,10,'/resources/imagenes/unidades/monstruos/TritonGuerrero.jpg'),
																																				('ROMPE-CORAZAS','MONSTRUO',2,2,5,2,'N',1,2,2,9,'/resources/imagenes/unidades/monstruos/RompeCorazas.png'),
																																				('BATIDOR','HUMANO',2,0,6,0,'N',4,4,1,7,'/resources/imagenes/unidades/humanos/batidor.jpg'),
																																				('MERCENARIO','HUMANO',3,0,7,0,'N',1,2,1,5,'/resources/imagenes/unidades/humanos/mercenario.png');


/******* Z O N A S   /   E N E M I G O S ***************************************************************************************/

CREATE TABLE IF NOT EXISTS ENEMIGO_ZONA (
	ID_ENEMIGO_ZONA NOT NULL AUTO_INCREMENT,
	ID_ZONA INT(3) NOT NULL,
	ID_ENEMIGO INT(3) NOT NULL,	
	PROBABILIDAD_APARACION INT(1) NOT NULL,
	PRIMARY KEY(ID_ENEMIGO_ZONA),
	FOREIGN KEY(ID_ENEMIGO) REFERENCES ENEMIGO(ID_ENEMIGO),
	FOREIGN KEY(ID_ZONA) REFERENCES ZONA(ID_ZONA)
);	

INSERT INTO ENEMIGO(ID_ZONA,ID_ENEMIGO,PROBABILIDAD_APARACION)VALUES(1,1,2),
																	(1,2,5),
																	(1,4,5),
																	(1,11,5),
																	(2,2,4),
																	(2,3,5),
																	(2,4,4),
																	(2,11,5),
																	(3,2,5),
																	(3,4,5),
																	(3,10,4),
																	(3,11,4),
																	(4,7,5),
																	(4,8,5),
																	(4,9,5);




																																		





























