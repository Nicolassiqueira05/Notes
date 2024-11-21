package com.projeto.notes.notes.controller

import com.projeto.notes.notes.model.Duser
import com.projeto.notes.notes.service.LoginResponse
import com.projeto.notes.notes.service.UserService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api")
class UserController (private val userService: UserService) {

    @CrossOrigin
    @PostMapping("/login")
    fun login(@RequestParam userName: String, @RequestParam userPassword: String): LoginResponse{
        return userService.login(userName, userPassword)
    }
}