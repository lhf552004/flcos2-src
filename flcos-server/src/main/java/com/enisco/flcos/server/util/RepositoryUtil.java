package com.enisco.flcos.server.util;

import com.enisco.flcos.server.documents.DocumentBase;
import com.enisco.flcos.server.entities.EntityBase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
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

    public static void create(MongoRepository repository, DocumentBase document) {
        assignCreator(document);
        repository.save(document);
    }

    public static void update(MongoRepository repository, DocumentBase document) {
        assignModifiedBy(document);
        repository.save(document);
    }

    public static void assignCreator(@NotNull EntityBase entity) {
        entity.setCreatedBy(getCurrentUser());
        entity.setLastModifiedDate(new Date());
    }

    public static void assignModifiedBy(@NotNull EntityBase entity) {
        entity.setModifiedBy(getCurrentUser());
        entity.setLastModifiedDate(new Date());
    }

    public static void assignCreator(@NotNull DocumentBase document) {
        document.setCreatedBy(getCurrentUser());
        document.setLastModifiedDate(new Date());
    }

    public static void assignModifiedBy(@NotNull DocumentBase document) {
        document.setModifiedBy(getCurrentUser());
        document.setLastModifiedDate(new Date());
    }
}
