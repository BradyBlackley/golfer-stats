package com.golfer.demo.service.putt;

import com.golfer.demo.models.pojos.Putt;
import com.golfer.demo.repository.putt.PuttRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PuttServiceImpl implements PuttService {

    @Autowired
    PuttRepository repository;

    @Override
    public Putt add(Putt putt) {
        return repository.add(putt);
    }
}
