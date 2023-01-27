package com.eternumgame.persistence.repository;

import com.eternumgame.persistence.entity.ArmaduraEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ArmaduraRepository extends JpaRepository<ArmaduraEntity, Integer> {

    @Query("SELECT COUNT(armadura.idArmadura) FROM ArmaduraEntity armadura")
    int findCount();
}
