package com.cry.shop.manage.service;

import com.cry.shop.manage.data.LoginRequset;
import com.cry.shop.manage.entity.User;

public interface LoginService {

    User getAllUsers(LoginRequset req);

}