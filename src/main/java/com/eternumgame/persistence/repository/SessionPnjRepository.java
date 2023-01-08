package com.eternumgame.persistence.repository;

import com.eternumgame.persistence.entity.SessionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SessionPnjRepository extends JpaRepository<SessionEntity, Integer> {
}
