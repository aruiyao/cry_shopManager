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

}
