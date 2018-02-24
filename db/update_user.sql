UPDATE sim3_users
SET name = $1
WHERE auth0_sub = $2;