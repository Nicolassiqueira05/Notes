package com.projeto.notes.notes.repository

import com.projeto.notes.notes.model.User
import org.springframework.data.jpa.repository.JpaRepository

interface repository : JpaRepository<User, Int>