package com.cry.shop.manage.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cry.shop.manage.entity.Goods;
import com.cry.shop.manage.mapper.GoodsMapper;
import com.cry.shop.manage.service.GoodsService;

@Service
public class GoodsServiceImpl implements GoodsService {
    @Autowired
    private GoodsMapper goodsMapper;

    @Override
    public void createGoods(Goods req) {
        goodsMapper.createGoods(req);
    }

    @Override
    public List < Goods > getGoodsList() {
        return goodsMapper.getGoodsList();
    }

    @Override
    public Goods queryGoodsDetail(Goods req) {
        return goodsMapper.queryGoodsDetail(req);
    }

    @Override
    public void updateGoods(Goods req) {
        System.out.println(req);
        goodsMapper.updateGoods(req);
    }
}
