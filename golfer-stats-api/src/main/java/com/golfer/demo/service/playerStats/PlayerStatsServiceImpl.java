package com.golfer.demo.service.playerStats;

import com.golfer.demo.models.enums.Club;
import com.golfer.demo.repository.playerStats.PlayerStatsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PlayerStatsServiceImpl implements PlayerStatsService {

    @Autowired
    PlayerStatsRepository repository;

    @Override
    public Integer getAvgDistance(String playerId, Club club) {
        return repository.getAvgDistance(playerId, club);
    }

    @Override
    public Integer getPuttingAccuracyFromDistance(String playerId, Integer distance) {
        return repository.getPuttingAccuracyFromDistance(playerId, distance);
    }

    @Override
    public Integer puttingChanceToMissWithinTapInRange(String playerId, Integer distance) {
        return repository.getPuttingChanceToMissWithinTapInRange(playerId, distance);
    }
}
