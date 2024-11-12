package com.projeto.notes.notes.service

import com.projeto.notes.notes.model.Duser
import com.projeto.notes.notes.repository.UserRepository
import org.springframework.stereotype.Service
import org.springframework.beans.factory.annotation.Autowired

@Service
class UserService(private val userRepository: UserRepository) {
    fun login(username: String, password: String): String {
        val user: Duser? = userRepository.findByUsername(username)

        if (user == null) {
            return "User not found"
        }

        return if (user.userpassword == password) {
            user.token
        } else {
            "wrong password"
        }
    }
}