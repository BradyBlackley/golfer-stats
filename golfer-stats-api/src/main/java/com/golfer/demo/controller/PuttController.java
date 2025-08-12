package com.golfer.demo.controller;

import com.golfer.demo.models.pojos.Putt;
import com.golfer.demo.service.putt.PuttService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/putt")
@CrossOrigin(origins = "http://localhost:3000")
public class PuttController {

    @Autowired
    private PuttService service;

    @PostMapping("/addPutt")
    public ResponseEntity<?> add(@RequestBody Putt putt){
        var created = service.add(putt);

        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Putt data added successfully!");
        response.put("data", created);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
