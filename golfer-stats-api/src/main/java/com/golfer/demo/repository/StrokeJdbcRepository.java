package com.golfer.demo.repository;

import com.golfer.demo.models.pojos.Stroke;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class StrokeJdbcRepository implements StrokeRepository {
    private final JdbcTemplate jdbcTemplate;

    public StrokeJdbcRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public Stroke add(Stroke stroke) {
        var uuid = java.util.UUID.randomUUID().toString();
        stroke.setId(uuid);

        System.out.println("Attempting to save the following stroke data: " + stroke);

        final String sql =
                "insert into stroke " +
                        "(id, player_id, club_id, distance, contact_type_id, ball_flight_type_id, `date`) " +
                        "values (?,?,?,?,?,?,?);";
        jdbcTemplate.update(sql, stroke.getId(), stroke.getPlayerId(), stroke.getClub().getId(), stroke.getDistance(),
                stroke.getContactType().getId(), stroke.getBallFlightType().getId(), stroke.getDate());
        return stroke;
    }
}
