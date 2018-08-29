-- View: pasajes.arrival_vw

-- DROP VIEW pasajes.arrival_vw;

CREATE OR REPLACE VIEW pasajes.arrival_vw AS
 SELECT row_number() OVER (ORDER BY x.nombre) AS id,
    x.nombre AS arrival,
    x.condicion AS status
   FROM ( SELECT DISTINCT "substring"(ruta_viaje.nombre::text, "position"(ruta_viaje.nombre::text, '-'::text) + 1, length(ruta_viaje.nombre::text)) AS nombre,
            ruta_viaje.condicion
           FROM pasajes.ruta_viaje
          WHERE ruta_viaje.condicion = 1
          ORDER BY ("substring"(ruta_viaje.nombre::text, "position"(ruta_viaje.nombre::text, '-'::text) + 1, length(ruta_viaje.nombre::text)))) x;

ALTER TABLE pasajes.arrival_vw
    OWNER TO postgres;


-- View: pasajes.departure_vw

-- DROP VIEW pasajes.departure_vw;

CREATE OR REPLACE VIEW pasajes.departure_vw AS
 SELECT row_number() OVER (ORDER BY x.nombre) AS id,
    x.nombre AS departure,
    x.condicion AS status
   FROM ( SELECT DISTINCT "substring"(ruta_viaje.nombre::text, 0, "position"(ruta_viaje.nombre::text, '-'::text)) AS nombre,
            ruta_viaje.condicion
           FROM pasajes.ruta_viaje
          WHERE ruta_viaje.condicion = 1
          ORDER BY ("substring"(ruta_viaje.nombre::text, 0, "position"(ruta_viaje.nombre::text, '-'::text)))) x;

ALTER TABLE pasajes.departure_vw
    OWNER TO postgres;



-- View: pasajes.itinerary_vw

-- DROP VIEW pasajes.itinerary_vw;

CREATE OR REPLACE VIEW pasajes.itinerary_vw AS
 SELECT c.id,
    a.id AS itineraty_id,
    a.nombre AS name,
    a.hora_salida AS departure_hour,
    a.hora_llegada AS arrivival_hour,
    b.nombre AS service_name,
    c.precio_nivel1 AS price_livel1,
    c.precio_nivel2 AS price_livel2
   FROM pasajes.itinerario a
     JOIN pasajes.tipo_servicio_itinerario b ON a.id_tipo_servicio_viaje = b.id
     JOIN pasajes.precio_vigencia_itinerario c ON a.id = c.id_itinerario AND a.condicion = 1 AND b.condicion = 1 AND c.condicion = 1;

ALTER TABLE pasajes.itinerary_vw
    OWNER TO postgres;

