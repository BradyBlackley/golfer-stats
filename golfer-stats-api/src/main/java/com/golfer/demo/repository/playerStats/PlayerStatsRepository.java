package com.golfer.demo.repository.playerStats;

import com.golfer.demo.models.enums.Club;

public interface PlayerStatsRepository {

    Integer getAvgDistance(String playerId, Club club);

    Integer getPuttingAccuracyFromDistance(String playerId, Integer distance);

    Integer getPuttingChanceToMissWithinTapInRange(String playerId, Integer distance);

}
