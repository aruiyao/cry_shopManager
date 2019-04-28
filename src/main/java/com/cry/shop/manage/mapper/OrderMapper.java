package com.cry.shop.manage.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Select;

import com.cry.shop.manage.entity.Order;

/**
 * 订单sql类
 * @author CRY
 *
 */
public interface OrderMapper {
   
    @Select({
        "<script>",
        "select * from t_order where 1=1",
        "<if test='id!=null and id!=\"\"'>",
        "and id=#{id}",
        "</if>",
        "order by create_time desc",
        "</script>" 
    })
    public List<Order> queryOrderList(Order order);
    
    @Delete("delete from t_order where id=#{id}")
    public void deleteOrder (Order order);

}
