package com.golfer.demo.models.io;

import com.golfer.demo.models.enums.Club;

public class AverageDistanceByClubInput {
    private String playerId;
    private Club club;

    public AverageDistanceByClubInput(String playerId, Club club) {
        this.playerId = playerId;
        this.club = club;
    }

    public AverageDistanceByClubInput() {

    }

    public String getPlayerId() {
        return playerId;
    }

    public void setPlayerId(String playerId) {
        this.playerId = playerId;
    }

    public Club getClub() {
        return club;
    }

    public void setClub(Club club) {
        this.club = club;
    }

    @Override
    public String toString() {
        return "AverageDistanceByClubInput{" +
                "playerId='" + playerId + '\'' +
                ", club=" + club +
                '}';
    }
}
