package com.eternumgame.persistence.repository;

import com.eternumgame.persistence.entity.ArmaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ArmaRepository extends JpaRepository<ArmaEntity, Integer> {

    @Query("SELECT COUNT(arma.idArma) FROM ArmaEntity arma")
    int findCount();
}