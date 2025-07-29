package com.golfer.demo.models.mappers;

import com.golfer.demo.models.enums.BallFlightType;
import com.golfer.demo.models.enums.Club;
import com.golfer.demo.models.enums.ContactType;
import com.golfer.demo.models.pojos.Stroke;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class StrokeMapper implements RowMapper<Stroke> {
    @Override
    public Stroke mapRow(ResultSet rs, int i) throws SQLException {
        Stroke stroke = new Stroke();
        stroke.setId(rs.getString("id"));
        stroke.setPlayerId(rs.getString("player_id"));
        stroke.setClub(Club.fromId(rs.getInt("club_id")));
        stroke.setDistance(rs.getInt("distance"));
        stroke.setContactType(ContactType.fromId(rs.getInt("contact_type_id")));
        stroke.setBallFlightType(BallFlightType.fromId(rs.getInt("ball_flight_type_id")));
        stroke.setDate(rs.getDate("`date`").toLocalDate());
        return stroke;
    }
}
