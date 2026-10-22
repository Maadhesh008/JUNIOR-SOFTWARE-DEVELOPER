package com.maadheshspring.demoproject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.*;


@Controller
public class MaadheshController {
 @GetMapping("/api/")
 public String myMethod(Model model)
 {
	 model.addAttribute("name","MAADHESH FROM KUMBBAKOMAM");
	 return "index";
 }
	
	
}
