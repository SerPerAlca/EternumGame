package com.eternumgame.persistence.repository;

import com.eternumgame.persistence.entity.ItemEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<ItemEntity, String> {
}
