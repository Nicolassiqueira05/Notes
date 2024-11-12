package com.projeto.notes.notes.model

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import java.util.Date

@Entity
data class Duser(
        @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Int? = null,
        val username: String,
        val email: String,
        val userpassword: String,
        val dateC: Date,
        val token: String
)