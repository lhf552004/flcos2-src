INSERT into f_role (id, name)
SELECT 1, 'ROLE_ADMIN'
 WHERE NOT EXISTS (SELECT * FROM f_role WHERE name='ROLE_ADMIN');

INSERT INTO f_user (id, user_name, password, enabled, token_expired, email, first_name, last_name)
SELECT 1, 'flcos', '$2a$10$FyV5bi5a5l1yjWvBG7b8ceZFEm0QHcUkiKuESMKikANuJwCKFVYrm', true, false, 'enico@enisco.com', 'Enisco', 'Forcam'
    WHERE 'flcos' NOT IN (SELECT user_name FROM f_user);

INSERT into users_roles (user_id, role_id)
SELECT 1, 1
 WHERE NOT EXISTS (SELECT * FROM users_roles WHERE user_id=1 and role_id=1);
