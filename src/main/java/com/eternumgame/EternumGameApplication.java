package com.eternumgame;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = {"com.eternumgame.persistence.entity"})
@EnableJpaRepositories(basePackages = "com.eternumgame.persistence.repository")
public class EternumGameApplication {

	public static void main(String[] args) {

		SpringApplication.run(EternumGameApplication.class, args);
		 
		  
	}

}
