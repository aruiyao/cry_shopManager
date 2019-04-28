package com.cry.shop.manage.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cry.shop.manage.data.QueryOrderListResponse;
import com.cry.shop.manage.entity.Order;
import com.cry.shop.manage.service.OrderService;

@Controller
public class OrderController {
    @Autowired
    private OrderService orderService;

    /**   
     * @Title: 查询订单列表   
     * @Description: TODO(这里用一句话描述这个方法的作用)   
     * @param order
     * @return      
     * @throws   
     */
    @GetMapping(value = "/queryOrderList")
    @ResponseBody
    public QueryOrderListResponse queryOrderList(Order order) {
        QueryOrderListResponse rsp = new QueryOrderListResponse();
        List < Order > orderList = orderService.queryOrderList(order);
        rsp.setOrderList(orderList);
        return rsp;
    }
    
    @PostMapping(value = "/deleteOrder")
    @ResponseBody
    public void deleteOrder(@RequestBody Order order) {
        orderService.deleteOrder(order);
    }

}
