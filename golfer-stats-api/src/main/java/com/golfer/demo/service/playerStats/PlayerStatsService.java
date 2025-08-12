package com.golfer.demo.service.playerStats;

import com.golfer.demo.models.enums.Club;

public interface PlayerStatsService {

    Integer getAvgDistance(String playerId, Club club);

    Integer getPuttingAccuracyFromDistance(String playerId, Integer distance);

    Integer puttingChanceToMissWithinTapInRange(String playerId, Integer distance);

}
