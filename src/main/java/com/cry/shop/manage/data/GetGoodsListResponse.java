package com.cry.shop.manage.data;

import java.util.List;

import com.cry.shop.manage.entity.Goods;

public class GetGoodsListResponse {

    private List < Goods > goodsList;

    public List < Goods > getGoodsList() {
        return goodsList;
    }

    public void setGoodsList(List < Goods > goodsList) {
        this.goodsList = goodsList;
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("GetGoodsListResponse [goodsList=");
        builder.append(goodsList);
        builder.append("]");
        return builder.toString();
    }

}
