package com.golfer.demo.controller;

import com.golfer.demo.models.enums.Club;
import com.golfer.demo.service.playerStats.PlayerStatsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/player/stats")
@CrossOrigin(origins = "http://localhost:3000")
public class PlayerStatsController {

    @Autowired
    private PlayerStatsService service;

    @GetMapping("/avgDistance")
    public ResponseEntity<Integer> getAverageDistanceByClub(@RequestParam String playerId, @RequestParam Club club) {
        return ResponseEntity.status(HttpStatus.OK).body(service.getAvgDistance(playerId, club));
    }

    @GetMapping("/puttingAccuracy")
    public ResponseEntity<Integer> getPuttingAccuracyFromDistance(@RequestParam String playerId, @RequestParam Integer distance){
        return ResponseEntity.status(HttpStatus.OK).body(service.getPuttingAccuracyFromDistance(playerId, distance));
    }

    @GetMapping("/puttingChanceToMissWithinTapInRange")
    public ResponseEntity<Integer> getPuttingChanceToMissWithinTapInRange(@RequestParam String playerId, @RequestParam Integer distance){
        return ResponseEntity.status(HttpStatus.OK).body(service.getPuttingAccuracyFromDistance(playerId, distance));
    }

}
