package com.cry.shop.manage.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cry.shop.manage.entity.Goods;
import com.cry.shop.manage.service.GoodsService;

@Controller
public class GoodsController {
    @Autowired
    private GoodsService goodsService;

    @PostMapping(value = "/createGoods")
    @ResponseBody
    public void createGoods(@RequestBody Goods req) {
       goodsService.createGoods(req);
    }
    
}
