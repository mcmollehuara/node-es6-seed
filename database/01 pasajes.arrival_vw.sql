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

