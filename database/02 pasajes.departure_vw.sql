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



