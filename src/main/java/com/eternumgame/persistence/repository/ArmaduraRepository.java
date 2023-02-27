package com.eternumgame.persistence.repository;

import com.eternumgame.persistence.entity.ArmaduraEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ArmaduraRepository extends JpaRepository<ArmaduraEntity, Integer> {

    @Query("SELECT COUNT(armadura.idArmadura) FROM ArmaduraEntity armadura")
    int findCount();

    @Query("SELECT armadura FROM ArmaduraEntity armadura where armadura.idArmadura = ?1")
    ArmaduraEntity findByIdSure(int id);

    @Query("SELECT COUNT(armadura.idArmadura) FROM ArmaduraEntity armadura WHERE armadura.obtenida='N' and armadura.recompensa='S'")
    int findCountDisponibles();
}
