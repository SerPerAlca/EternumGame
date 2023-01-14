package com.eternumgame.persistence.repository;

import com.eternumgame.persistence.entity.ZonaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ZonaRepository extends JpaRepository<ZonaEntity, Integer> {

    @Query("SELECT z FROM ZonaEntity z WHERE z.nombreZona = ?1")
    ZonaEntity findByName(String name);

}
