package com.projeto.notes.notes.service

data class LoginResponse(
    val success: Boolean,
    val message: String,
    val token: String? = null
)