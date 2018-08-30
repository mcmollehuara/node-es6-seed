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

