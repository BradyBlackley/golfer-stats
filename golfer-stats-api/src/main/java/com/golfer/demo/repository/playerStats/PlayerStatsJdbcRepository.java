package com.golfer.demo.repository.playerStats;

import com.golfer.demo.models.enums.Club;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class PlayerStatsJdbcRepository implements PlayerStatsRepository {
    private final JdbcTemplate jdbcTemplate;

    public PlayerStatsJdbcRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public Integer getAvgDistance(String playerId, Club club) {
        System.out.println("Attempting to retrieve the average distance from the following player stats data: "
                + playerId + " " + club);

        final String sql = """
                select avg(s.distance)
                from stroke s
                join player p
                on s.player_id = p.id
                join club c
                on s.club_id = c.id
                where s.player_id = ?
                and c.club = ?;""";

        return jdbcTemplate.queryForObject(sql, Integer.class, playerId,
                club.getLabel());
    }

    @Override
    public Integer getPuttingAccuracyFromDistance(String playerId, Integer distance) {
        System.out.println("Attempting to retrieve putting accuracy from a distance of " + distance + " feet" +
                " for the following player: " + playerId);

        final String sql = """
                select
                	(select count(*)
                	from putt pu
                	join player pl
                	on pu.player_id = pl.id
                	join putt_result pr
                	on pu.putt_result_id = pr.id
                	where pu.player_id = ?
                	and pu.distance = ?
                	and pr.putt_result = 'sink') /
                    (select count(*)
                	from putt pu
                	join player pl
                	on pu.player_id = pl.id
                	where pu.player_id = ?
                	and pu.distance = ?) * 100""";

        return jdbcTemplate.queryForObject(sql, Integer.class, playerId, distance, playerId, distance);
    }

    @Override
    public Integer getPuttingChanceToMissWithinTapInRange(String playerId, Integer distance) {
        System.out.println("Attempting to retrieve chance to miss from a distance of " + distance + " feet" +
                "but within tap-in range for the following player: " + playerId);

        final String sql = """
                select
                	(select count(*)
                	from putt pu
                	join player pl
                	on pu.player_id = pl.id
                	join putt_result pr
                	on pu.putt_result_id = pr.id
                	where pu.player_id = ?
                	and pu.distance = ?
                	and pr.putt_result = 'miss - beyond gimme range') /
                    (select count(*)
                	from putt pu
                	join player pl
                	on pu.player_id = pl.id
                	where pu.player_id = ?
                	and pu.distance = ?) * 100""";

        return jdbcTemplate.queryForObject(sql, Integer.class, playerId, distance, playerId, distance);
    }
}
