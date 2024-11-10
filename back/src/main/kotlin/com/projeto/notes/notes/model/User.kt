package com.projeto.notes.notes.model

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import java.util.Date

@Entity
data class User(
        @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Int? = null,
        val nome: String,
        val email: String,
        val password: String,
        val dateC: Date,
)