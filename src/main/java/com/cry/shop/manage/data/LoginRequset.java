/**
 * 
 */
package com.cry.shop.manage.data;

import java.util.Map;

import com.cry.shop.manage.entity.User;

/**
 * @author CRY
 *
 */
public class LoginRequset {
    private User user;

    private Map < String, Object > extInfo;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Map < String, Object > getExtInfo() {
        return extInfo;
    }

    public void setExtInfo(Map < String, Object > extInfo) {
        this.extInfo = extInfo;
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("LoginRequset [user=");
        builder.append(user);
        builder.append(", extInfo=");
        builder.append(extInfo);
        builder.append("]");
        return builder.toString();
    }

}
