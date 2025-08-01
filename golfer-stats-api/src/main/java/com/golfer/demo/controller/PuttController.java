package com.golfer.demo.controller;

import com.golfer.demo.models.pojos.Putt;
import com.golfer.demo.service.putt.PuttService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/putt")
@CrossOrigin(origins = "http://localhost:3000")
public class PuttController {

    @Autowired
    private PuttService service;

    @PostMapping("/addPutt")
    public ResponseEntity<Putt> add(@RequestBody Putt putt){
        var body = service.add(putt);
        return ResponseEntity.status(HttpStatus.CREATED).body(body);
    }
}
