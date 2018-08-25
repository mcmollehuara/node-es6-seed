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

-- -- TODO
-- Update pasajes.ruta_viaje
-- set condicion = 1

--drop view pasajes.departure_vw
--select * from pasajes.departure_vw

create view pasajes.departure_vw AS
(	
    select 
    row_number() OVER (ORDER BY X.nombre) orderId
    ,X.nombre as departure
    ,X.condicion as status 
    from 
    (
        select distinct
        substring(nombre,0, POSITION('-' in nombre)) nombre
        ,condicion									  
        from pasajes.ruta_viaje
        where condicion = 1
        order by nombre							  
    ) X		   
)

GO

--drop view pasajes.arrival_vw
--select * from pasajes.arrival_vw
		
create view pasajes.arrival_vw AS
(	
    select 
    row_number() OVER (ORDER BY X.nombre) id
    ,X.nombre as arrival
    ,X.condicion as status 
    from 
    (
        select distinct
        substring(nombre,POSITION('-' in nombre)+1, length(nombre)) nombre
        ,condicion									  
        from pasajes.ruta_viaje
        where condicion = 1
        order by nombre							  
    ) X		   
)

	


    select a.id
, a.nombre as name
, a.hora_salida
, a.hora_llegada
, b.nombre
, c.precio_nivel1
, c.precio_nivel2
--,*
from pasajes.itinerario a
inner join pasajes.tipo_servicio_itinerario b on (a.id_tipo_servicio_viaje = b.id)
inner join pasajes.precio_vigencia_itinerario c on (a.id = c.id_itinerario)
where a.nombre like 'LIMA-%'
and a.condicion = 1

select * from pasajes.itinerario
select * from pasajes.ruta_viaje
select * from pasajes.precio_vigencia_itinerario
select * from pasajes.vigencia_itinerario

select * from public.departamento
select * from public.provincia