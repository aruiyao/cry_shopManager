package com.cry.shop.manage.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@EnableAutoConfiguration
@ComponentScan(value = { "com.cry.shop.manage.controller", "com.cry.shop.manage.service.impl" })
@MapperScan(value = "com.cry.shop.manage.mapper")
public class ManageApplication {
	public static void main(String[] args) {
		SpringApplication.run(ManageApplication.class, args);
	}
}
