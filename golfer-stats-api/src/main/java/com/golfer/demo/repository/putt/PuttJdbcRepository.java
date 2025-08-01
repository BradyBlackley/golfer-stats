package com.golfer.demo.repository.putt;

import com.golfer.demo.models.pojos.Putt;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class PuttJdbcRepository implements PuttRepository {
    private final JdbcTemplate jdbcTemplate;

    public PuttJdbcRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public Putt add(Putt putt) {
        var uuid = java.util.UUID.randomUUID().toString();
        putt.setId(uuid);

        System.out.println("Attempting to save the following putt data: " + putt);

        final String sql =
                "insert into putt " +
                        "(id, player_id, club_id, distance, putt_result_id, `date`) " +
                        "values (?,?,?,?,?,?);";

        jdbcTemplate.update(sql, putt.getId(), putt.getPlayerId(), putt.getClub().getId(), putt.getDistance(),
                putt.getPuttResult().getId(), putt.getDate());

        return putt;
    }
}
