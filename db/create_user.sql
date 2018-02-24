INSERT INTO Sim3_users (auth0_sub, name, email) VALUES ($1, $2, $3)
RETURNING *;