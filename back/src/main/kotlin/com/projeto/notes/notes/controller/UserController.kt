package com.projeto.notes.notes.controller

import com.projeto.notes.notes.model.User
import com.projeto.notes.notes.service.UserService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api")
class UserController (private val userService: UserService) {
    @GetMapping("/login")
    fun login(): String{
        return "working"
    }
}