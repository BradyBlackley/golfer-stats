package com.golfer.demo.service.stroke;

import com.golfer.demo.models.pojos.Stroke;
import com.golfer.demo.repository.stroke.StrokeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StrokeServiceImpl implements StrokeService {

    @Autowired
    StrokeRepository repository;

    @Override
    public Stroke add(Stroke stroke) {
        return repository.add(stroke);
    }
}
