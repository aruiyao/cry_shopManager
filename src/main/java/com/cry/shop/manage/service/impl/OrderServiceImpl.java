package com.cry.shop.manage.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cry.shop.manage.entity.Order;
import com.cry.shop.manage.mapper.OrderMapper;
import com.cry.shop.manage.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderMapper orderMapper;

    @Override
    public List < Order > queryOrderList(Order order) {
        return orderMapper.queryOrderList(order);
    }

    @Override
    public void deleteOrder(Order order) {
        orderMapper.deleteOrder(order);
    }

}
