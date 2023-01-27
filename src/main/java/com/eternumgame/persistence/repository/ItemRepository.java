package com.eternumgame.persistence.repository;

import com.eternumgame.persistence.entity.ItemEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ItemRepository extends JpaRepository<ItemEntity, Integer> {

    @Query("SELECT COUNT(item.idItem) FROM ItemEntity item")
    int findCount();
}
