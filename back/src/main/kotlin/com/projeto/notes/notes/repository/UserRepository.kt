package com.projeto.notes.notes.repository

import com.projeto.notes.notes.model.Duser
import org.springframework.data.jpa.repository.JpaRepository

interface UserRepository : JpaRepository<Duser, Long> {
    fun findByUsername(username: String): Duser?
}