package com.golfer.demo.controller;

import com.golfer.demo.models.pojos.Stroke;
import com.golfer.demo.service.StrokeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/stroke")
@CrossOrigin(origins = "http://localhost:3000")
public class StrokeController {

    @Autowired
    private StrokeService service;

    @PostMapping("/addStroke")
    public ResponseEntity<Stroke> add(@RequestBody Stroke stroke){
        var body = service.add(stroke);
        return ResponseEntity.status(HttpStatus.CREATED).body(body);
    }

}
