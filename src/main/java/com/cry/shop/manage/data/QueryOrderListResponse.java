package com.cry.shop.manage.data;

import java.util.List;

import com.cry.shop.manage.entity.Order;

public class QueryOrderListResponse {

    private List < Order > orderList;

    public List < Order > getOrderList() {
        return orderList;
    }

    public void setOrderList(List < Order > orderList) {
        this.orderList = orderList;
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("queryOrderListResponse [orderList=");
        builder.append(orderList);
        builder.append("]");
        return builder.toString();
    }

}
