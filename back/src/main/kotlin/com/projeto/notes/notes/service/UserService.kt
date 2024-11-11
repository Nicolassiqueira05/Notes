package com.projeto.notes.notes.service

import com.projeto.notes.notes.model.User
import com.projeto.notes.notes.repository.UserRepository
import org.springframework.stereotype.Service
import org.springframework.beans.factory.annotation.Autowired

@Service
class UserService (private val UserRepository: UserRepository){
    fun login(username: String, password: String) : String{
        val user: User? = UserRepository.findByUsername(username)

        if(user == null){return "User not found"}

        if(user != null && password == user.userpassword)
        {
            return user.token
        }
        else
        {
            return "wrong password"
        }
    }
}