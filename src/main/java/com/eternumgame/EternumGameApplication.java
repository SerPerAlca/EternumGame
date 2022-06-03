package com.eternumgame;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.eternumgame")
public class EternumGameApplication {

	public static void main(String[] args) {

		SpringApplication.run(EternumGameApplication.class, args);
		 
		  
	}

}
