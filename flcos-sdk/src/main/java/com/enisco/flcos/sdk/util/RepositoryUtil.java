package com.enisco.flcos.sdk.util;

import com.enisco.flcos.sdk.entities.EntityBase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import javax.validation.constraints.NotNull;
import java.util.Date;

public class RepositoryUtil {
    protected static String getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && !(authentication instanceof AnonymousAuthenticationToken)) {
            String currentUserName = authentication.getName();
            return currentUserName;
        } else
            return "Anonymous";
    }

    public static void create(JpaRepository repository, EntityBase entity) {
        assignCreator(entity);
        repository.save(entity);
    }

    public static void update(JpaRepository repository, EntityBase entity) {
        assignModifiedBy(entity);
        repository.save(entity);
    }

    private static void assignCreator(@NotNull EntityBase entity) {
        entity.setCreatedBy(getCurrentUser());
        entity.setLastModifiedDate(new Date());
    }

    private static void assignModifiedBy(@NotNull EntityBase entity) {
        entity.setModifiedBy(getCurrentUser());
        entity.setLastModifiedDate(new Date());
    }
}
