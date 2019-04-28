package com.cry.shop.manage.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.cry.shop.manage.entity.Goods;

public interface GoodsMapper {

    @Select("insert into t_goods (goods_name,goods_price,main_picture,detail_picture,create_time,goods_status) values (#{goodsName},#{goodsPrice},#{mainPicture},#{detailPicture},#{createTime},#{goodsStatus})")
    public void createGoods(Goods req);

    @Select({
        "<script>",
        "select * from t_goods where 1=1",
        "<if test='id!=null and id!=\"\"'>",
        "and id=#{id}",
        "</if>",
        "<if test='goodsName!=null and goodsName!=\"\"'>", 
        "and goods_name like CONCAT(CONCAT('%', #{goodsName}), '%')", 
        "</if>",
        "<if test='goodsStatus!=null and goodsStatus!=\"\"'>",
        "and goods_status=#{goodsStatus}",
        "</if>",
        "order by create_time desc",
        "</script>" 
    }) 
    public List < Goods > getGoodsList(Goods req);

    @Select("select * from t_goods where id=#{id}")
    public Goods queryGoodsDetail(Goods req);
    
    @Update({"<script>",
        "update t_goods",
        "<set>",
            "<if test='goodsName!=null'>",
            "goods_name=#{goodsName},", 
            "</if>",
            "<if test='goodsPrice!=null'>",
            "goods_price=#{goodsPrice},",
            "</if>",
            "<if test='mainPicture!=null'>",
            "main_picture=#{mainPicture},",
            "</if>",
            "<if test='detailPicture!=null'>",
            "detail_picture=#{detailPicture},",
            "</if>",
            "<if test='goodsStatus!=null'>",
            "goods_status=#{goodsStatus},",
            "</if>",
        "</set>",
        "where id=#{id}",
        "</script>" 
    })
    public void updateGoods(Goods req);
    
    @Delete("delete from t_goods where id=#{0}")
    public void deleteGoods(Integer id);

}
