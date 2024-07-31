package com.enisco.flcos.opc.server.config;

import com.enisco.flcos.opc.server.filters.JwtRequestFilter;
import com.enisco.flcos.opc.server.services.MyUserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
public class SecurityConfigurer extends WebSecurityConfigurerAdapter {
    @Autowired
    MyUserDetailService userDetailsService;

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.headers().httpStrictTransportSecurity()
                .maxAgeInSeconds(0)
                .includeSubDomains(true);
        http.csrf().disable()
                .authorizeRequests().antMatchers("/authenticate",
                		"/api/v1/files/**",
                		"/v2/api-docs",
                        "/configuration/ui",
                        "/swagger-resources/**",
                        "/configuration/security",
                        "/swagger-ui.html",
                        "/webjars/**").permitAll().
                antMatchers(HttpMethod.GET, "api/v1/menus/**").permitAll().
                antMatchers(HttpMethod.POST,"/api/v1/users/**",
                        "/api/v1/roles/**",
                        "/api/v1/menus/**").hasRole("ADMIN").
                antMatchers(HttpMethod.DELETE,"/api/v1/users/**",
                        "/api/v1/roles/**",
                        "/api/v1/menus/**").hasRole("ADMIN").
                antMatchers(HttpMethod.GET, "/api/v1/users/**").hasAnyRole("USER", "ADMIN").
                antMatchers(HttpMethod.PUT, "/api/v1/users/**").hasAnyRole("USER", "ADMIN").
                antMatchers("/api/v1/jobs/**").hasAnyRole("JOB", "ADMIN").
                antMatchers("/api/v1/orders/**").hasAnyRole("ORDER", "ADMIN").
                antMatchers("/api/v1/products/**").hasAnyRole("PRODUCT", "ADMIN").
                antMatchers("/api/v1/equipments/**").hasAnyRole("EQUIPMENT", "ADMIN").
                antMatchers("/api/v1/diagnostics/**").hasAnyRole("DIAGNOSTICS", "ADMIN").
                anyRequest().authenticated().and().
                exceptionHandling().and().sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
