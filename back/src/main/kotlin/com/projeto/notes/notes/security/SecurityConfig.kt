import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.provisioning.InMemoryUserDetailsManager
import org.springframework.security.web.SecurityFilterChain

@Configuration
class SecurityConfig {

    @Bean
    fun securityFilterChain(http: HttpSecurity): SecurityFilterChain {
        http
            .authorizeHttpRequests {
                it.anyRequest().authenticated()
            }
            .formLogin()
            .loginPage("/login") // Ajuste conforme necessário
            .and()
            .httpBasic() // Autenticação básica (ou configure o tipo que deseja)
            .and()
            .csrf().disable() // Desabilita CSRF para APIs REST
        return http.build()
    }
    @Bean
    fun userDetailsService(): UserDetailsService {
        // Define usuários e senhas personalizadas
        val user = User.withUsername("admin")
            .password("123")
            .roles("USER")
            .build()

        return InMemoryUserDetailsManager(user)
    }
}
