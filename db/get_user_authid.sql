SELECT * FROM Sim3_users
WHERE auth0_sub = $1 LIMIT 1;