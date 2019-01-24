package com.cry.shop.manage.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.cry.shop.manage.entity.Goods;

public interface GoodsMapper {

    @Select("insert into t_goods (goods_name,goods_price,main_picture,detail_picture,create_time,goods_status) values (#{goodsName},#{goodsPrice},#{mainPicture},#{detailPicture},#{createTime},#{goodsStatus})")
    public void createGoods(Goods req);

    @Select("select * from t_goods")
    public List < Goods > getGoodsList();

    @Select("select * from t_goods where id=#{id}")
    public Goods queryGoodsDetail(Goods req);
    
    @Update("update t_goods set goods_name=#{goodsName},goods_price=#{goodsPrice},main_picture=#{mainPicture},detail_picture=#{detailPicture},goods_status=#{goodsStatus} where id=#{id}")
    public void updateGoods(Goods req);

}
