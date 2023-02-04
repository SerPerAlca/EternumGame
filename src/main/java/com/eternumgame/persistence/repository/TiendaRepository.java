package com.eternumgame.persistence.repository;

import com.eternumgame.persistence.entity.TiendaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TiendaRepository extends JpaRepository<TiendaEntity, Integer> {

    @Query("SELECT shop FROM TiendaEntity shop where shop.idTienda = ?1")
    TiendaEntity findById(int id);
}
