package com.cry.shop.manage.mapper;

import org.apache.ibatis.annotations.Select;

import com.cry.shop.manage.entity.Goods;

public interface GoodsMapper {
    
    @Select("insert into t_goods (goods_name,goods_price,main_picture,detail_picture,create_time) values (#{goodsName},#{goodsPrice},#{mainPicture},#{detailPicture},#{createTime})")
    public void createGoods(Goods req);

}
