package com.cry.shop.manage.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cry.shop.manage.data.LoginRequset;
import com.cry.shop.manage.entity.User;
import com.cry.shop.manage.mapper.LoginMapper;
import com.cry.shop.manage.service.LoginService;

@Service
public class LoginServiceImpl implements LoginService {
	@Autowired
	private LoginMapper loginMapper;
	
	@Override
	public User getAllUsers(LoginRequset req){
		return loginMapper.getAllUsers(req);
	}
}
