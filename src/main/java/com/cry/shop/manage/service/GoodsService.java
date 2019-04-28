package com.cry.shop.manage.service;

import java.util.List;

import com.cry.shop.manage.entity.Goods;

public interface GoodsService {

    void createGoods(Goods req);

    List < Goods > getGoodsList(Goods req);

    Goods queryGoodsDetail(Goods req);

    void updateGoods(Goods req);

    void deleteGoods(Integer id);
    
}