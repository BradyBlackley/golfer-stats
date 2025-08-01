package com.golfer.demo.models.pojos;

import com.golfer.demo.models.enums.Club;
import com.golfer.demo.models.enums.PuttResult;

import java.time.LocalDate;

public class Putt {
    private String id;
    private String playerId;
    private Club club;
    private Integer distance;
    private PuttResult puttResult;
    private LocalDate date;

    public Putt(String id, String playerId, Club club, Integer distance, PuttResult puttResult, LocalDate date) {
        this.id = id;
        this.playerId = playerId;
        this.club = club;
        this.distance = distance;
        this.puttResult = puttResult;
        this.date = date;
    }

    public Putt(String playerId, Club club, Integer distance, PuttResult puttResult, LocalDate date) {
        this.playerId = playerId;
        this.club = club;
        this.distance = distance;
        this.puttResult = puttResult;
        this.date = date;
    }

    public Putt(){

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public Integer getDistance() {
        return distance;
    }

    public void setDistance(Integer distance) {
        this.distance = distance;
    }

    public PuttResult getPuttResult() {
        return puttResult;
    }

    public void setPuttResult(PuttResult puttResult) {
        this.puttResult = puttResult;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Putt{" +
                "id='" + id + '\'' +
                ", playerId='" + playerId + '\'' +
                ", club=" + club +
                ", distance=" + distance +
                ", puttResult=" + puttResult +
                ", date=" + date +
                '}';
    }
}
