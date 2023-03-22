package fr.wcs.improangularspring.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.annotation.RequestScope;

@Controller
@CrossOrigin(origins = "*")
public class ImproController {

    String value = "initial value";

    @GetMapping(path = "/impro", produces = "text/plain")
    @ResponseBody
    public ResponseEntity<String> getImproText() {
        var response = ResponseEntity.ok(value);
        
//        response.getHeaders().add("Access-Control-Allow-Origin", "*");

        return response;
    }

    @PutMapping(path = "/impro", consumes = "text/plain")
    @ResponseBody
    public String setImproText(@RequestBody String newVal) {
        this.value = newVal;
        return this.value;
    }

}