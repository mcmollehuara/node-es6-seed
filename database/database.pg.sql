-- Table: pasajes.destino

-- DROP TABLE pasajes.destino;

CREATE TABLE pasajes.destino
(
    id smallint NOT NULL DEFAULT nextval('pasajes.destino_id_seq'::regclass),
    nombre character varying(100) COLLATE pg_catalog."default" NOT NULL,
    condicion smallint NOT NULL
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE pasajes.destino
    OWNER to postgres;


INSERT INTO pasajes.destino(	id, nombre, condicion)
VALUES (1, 'CAJAMARCA', 1);

INSERT INTO pasajes.destino(	id, nombre, condicion)
VALUES (2, 'CHEPÉN', 1);

INSERT INTO pasajes.destino(	id, nombre, condicion)
VALUES (3, 'CHICLAYO', 1);

INSERT INTO pasajes.destino(	id, nombre, condicion)
VALUES (4, 'JAÉN', 1);

INSERT INTO pasajes.destino(	id, nombre, condicion)
VALUES (5, 'LIMA', 1);

INSERT INTO pasajes.destino(	id, nombre, condicion)
VALUES (6, 'PIURA', 1);


INSERT INTO pasajes.destino(	id, nombre, condicion)
VALUES (7, 'TARAPOTO', 1);

INSERT INTO pasajes.destino(	id, nombre, condicion)
VALUES (8, 'TRUJILLO', 1);


-- Table: pasajes.origen

-- DROP TABLE pasajes.origen;

CREATE TABLE pasajes.origen
(
    id smallint NOT NULL DEFAULT nextval('pasajes.origen_id_seq'::regclass),
    nombre character varying(100) COLLATE pg_catalog."default" NOT NULL,
    condicion smallint NOT NULL
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE pasajes.origen
    OWNER to postgres;


    -- Origen Items


    INSERT INTO pasajes.origen(	id, nombre, condicion)
VALUES (1, 'CAJAMARCA', 1);

INSERT INTO pasajes.origen(	id, nombre, condicion)
VALUES (2, 'CHEPÉN', 1);

INSERT INTO pasajes.origen(	id, nombre, condicion)
VALUES (3, 'CHICLAYO', 1);

INSERT INTO pasajes.origen(	id, nombre, condicion)
VALUES (4, 'JAÉN', 1);

INSERT INTO pasajes.origen(	id, nombre, condicion)
VALUES (5, 'LIMA', 1);

INSERT INTO pasajes.origen(	id, nombre, condicion)
VALUES (6, 'PIURA', 1);


INSERT INTO pasajes.origen(	id, nombre, condicion)
VALUES (7, 'TARAPOTO', 1);

INSERT INTO pasajes.origen(	id, nombre, condicion)
VALUES (8, 'TRUJILLO', 1);
