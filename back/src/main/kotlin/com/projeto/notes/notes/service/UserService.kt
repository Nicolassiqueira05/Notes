package com.projeto.notes.notes.service

import com.projeto.notes.notes.model.Duser
import com.projeto.notes.notes.repository.UserRepository
import org.springframework.stereotype.Service
import org.springframework.beans.factory.annotation.Autowired

import com.projeto.notes.notes.service.LoginResponse

@Service
class UserService(private val userRepository: UserRepository) {
    fun login(username: String, password: String): LoginResponse {
        val user: Duser? = userRepository.findByUsername(username)

        if (user == null) {
            return LoginResponse(false, "user not found")
        }

        if (user.userpassword == password) {
            return LoginResponse(true, "Login successful", user.token)
        } else {
            return LoginResponse(false, "Incorrect password")
        }
    }
}