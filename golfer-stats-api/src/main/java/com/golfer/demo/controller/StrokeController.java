package com.golfer.demo.controller;

import com.golfer.demo.models.pojos.Stroke;
import com.golfer.demo.service.stroke.StrokeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/stroke")
@CrossOrigin(origins = "http://localhost:3000")
public class StrokeController {

    @Autowired
    private StrokeService service;

    @PostMapping("/addStroke")
    public ResponseEntity<?> add(@RequestBody Stroke stroke) {
        var created = service.add(stroke);

        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Shot data added successfully!");
        response.put("data", created);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

}
