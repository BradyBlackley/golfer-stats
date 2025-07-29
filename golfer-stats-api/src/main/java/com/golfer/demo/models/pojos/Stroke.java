package com.golfer.demo.models.pojos;

import com.golfer.demo.models.enums.BallFlightType;
import com.golfer.demo.models.enums.Club;
import com.golfer.demo.models.enums.ContactType;

import java.time.LocalDate;

public class Stroke {
    private String id;
    private String playerId;
    private Club club;
    private Integer distance;
    private ContactType contactType;
    private BallFlightType ballFlightType;
    private LocalDate date;

    public Stroke(String id, String playerId, Club club, Integer distance, ContactType contactType, BallFlightType ballFlightType, LocalDate date) {
        this.id = id;
        this.playerId = playerId;
        this.club = club;
        this.distance = distance;
        this.contactType = contactType;
        this.ballFlightType = ballFlightType;
        this.date = date;
    }

    public Stroke(String playerId, Club club, Integer distance, ContactType contactType, BallFlightType ballFlightType, LocalDate date) {
        this.playerId = playerId;
        this.club = club;
        this.distance = distance;
        this.contactType = contactType;
        this.ballFlightType = ballFlightType;
        this.date = date;
    }

    public Stroke() {
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

    public ContactType getContactType() {
        return contactType;
    }

    public void setContactType(ContactType contactType) {
        this.contactType = contactType;
    }

    public BallFlightType getBallFlightType() {
        return ballFlightType;
    }

    public void setBallFlightType(BallFlightType ballFlightType) {
        this.ballFlightType = ballFlightType;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Stroke{" +
                "id='" + id + '\'' +
                ", playerId='" + playerId + '\'' +
                ", club=" + club +
                ", distance=" + distance +
                ", contactType=" + contactType +
                ", ballFlightType=" + ballFlightType +
                ", date=" + date +
                '}';
    }
}
