package com.projeto.notes.notes.controller

import com.projeto.notes.notes.model.User
import com.projeto.notes.notes.service.UserService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api")
class UserController (private val userService: UserService) {
    @GetMapping("/login")
    fun login(@RequestParam userName: String, @RequestParam userPassword: String): ResponseEntity<String>{
        if(userName == "nicolas"){
            return ResponseEntity.ok("Login suscessful")
        }else{
            return ResponseEntity.ok("Login failed")
        }

    }
}