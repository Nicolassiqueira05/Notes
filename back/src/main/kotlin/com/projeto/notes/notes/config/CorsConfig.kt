import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import org.springframework.web.filter.CorsFilter

@Configuration
class CorsConfig {
    @Bean
    fun corsFilter(): CorsFilter {
        val corsConfig = CorsConfiguration()

        corsConfig.allowedOrigins = listOf("http://localhost:3000")

        corsConfig.allowedMethods = listOf("GET", "POST", "PUT", "DELETE", "OPTIONS")

        corsConfig.allowedHeaders = listOf( "Content-Type", "Authorization")

        corsConfig.allowCredentials = true

        corsConfig.maxAge = 3600L

        // Configuração de rotas para aplicar o CORS
        val source = UrlBasedCorsConfigurationSource()
        source.registerCorsConfiguration("/**", corsConfig)

        return CorsFilter(source)
    }
}
