package com.golfer.demo.controller;

import com.golfer.demo.models.io.AverageDistanceByClubInput;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/player/stats")
@CrossOrigin(origins = "http://localhost:3000")
public class PlayerStatsController {
//
//    @Autowired
//    private PlayerStatsService service;
//
//    @GetMapping("/avgDistance")
//    public ResponseEntity<String> getAverageDistanceByClub(@RequestBody AverageDistanceByClubInput input){
//        var body = "";
//        //service.get(stroke);
//        return ResponseEntity.status(HttpStatus.OK).body(body);
//    }
//
}
