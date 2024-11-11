package com.projeto.notes.notes.model

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import java.math.BigInteger
import java.util.Date

@Entity
data class User(
        @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Int? = null,
        val username: String,
        val email: String,
        val userpassword: String,
        val dateC: Date,
        val token: String
)