package com.golfer.demo.models.pojos;

public class Player {
    private String ID;

    public Player(String ID) {
        this.ID = ID;
    }

    public String getID() {
        return ID;
    }

    public void setID(String ID) {
        this.ID = ID;
    }

    @Override
    public String toString() {
        return "Player{" +
                "ID='" + ID + '\'' +
                '}';
    }
}
