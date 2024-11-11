package com.projeto.notes.notes.service

import com.projeto.notes.notes.model.User
import com.projeto.notes.notes.repository.UserRepository

class UserService (private val UserRepository: UserRepository){
    fun login(username: String, password: String) : String{
        val user: User? = UserRepository.findByUsername(username)

        if(user == null){return "User not found"}

        if(user != null && password == user.password)
        {
            return user.token
        }
        else
        {
            return "wrong password"
        }
    }
}