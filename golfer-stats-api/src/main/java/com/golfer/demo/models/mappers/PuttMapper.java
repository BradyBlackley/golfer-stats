package com.golfer.demo.models.mappers;

import com.golfer.demo.models.enums.Club;
import com.golfer.demo.models.enums.PuttResult;
import com.golfer.demo.models.pojos.Putt;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PuttMapper implements RowMapper<Putt> {
    @Override
    public Putt mapRow(ResultSet rs, int i) throws SQLException {
        Putt putt = new Putt();
        putt.setId(rs.getString("id"));
        putt.setPlayerId(rs.getString("player_id"));
        putt.setClub(Club.fromId(rs.getInt("club_id")));
        putt.setDistance(rs.getInt("distance"));
        putt.setPuttResult(PuttResult.fromId(rs.getInt("putt_result_id")));
        putt.setDate(rs.getDate("`date`").toLocalDate());
        return putt;
    }
}
