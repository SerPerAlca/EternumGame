package com.eternumgame.persistence.repository;

import com.eternumgame.persistence.entity.EnemigoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface EnemigoRepository  extends JpaRepository<EnemigoEntity, Integer> {

    @Query("SELECT enemy FROM EnemigoEntity enemy where enemy.nombreEnemigo = ?1")
    EnemigoEntity findByName(String nombreEnemigo);
}
