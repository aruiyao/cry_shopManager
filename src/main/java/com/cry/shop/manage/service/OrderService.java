package com.cry.shop.manage.service;

import java.util.List;

import com.cry.shop.manage.entity.Order;

public interface OrderService {

    List < Order > queryOrderList(Order order);

    void deleteOrder(Order order);
}