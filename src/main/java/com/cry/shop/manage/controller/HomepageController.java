package com.cry.shop.manage.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomepageController {
    /**   
     * @Title: home   
     * @Description: TODO(这里用一句话描述这个方法的作用)   
     * @param name
     * @return      
     * @throws   
     */
    @RequestMapping("/")
    public String home(String name) {
        System.out.println(11111111);
        return "redirect:/view/login/login.html";
    }

}
