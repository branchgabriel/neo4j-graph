package org.branchgabriel;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

@EnableAutoConfiguration
public class SpringApp {

    public static void main(String[] args) throws Exception {
        SpringApplication.run(SpringApp.class, args);
    }
}
