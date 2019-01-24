package com.cry.shop.manage.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cry.shop.manage.data.GetGoodsListResponse;
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

    @GetMapping(value = "/getGoodsList")
    @ResponseBody
    public GetGoodsListResponse getGoodsList() {
        GetGoodsListResponse rsp = new GetGoodsListResponse();
        List < Goods > goodsList = goodsService.getGoodsList();
        rsp.setGoodsList(goodsList);
        return rsp;
    }

    @GetMapping(value = "/queryGoodsDetail")
    @ResponseBody
    public Goods queryGoodsDetail(Goods req) {
        Goods goods = goodsService.queryGoodsDetail(req);
        return goods;
    }

    @PostMapping(value = "/updateGoods")
    @ResponseBody
    public void updateGoods(@RequestBody Goods req) {
        goodsService.updateGoods(req);
    }
}
