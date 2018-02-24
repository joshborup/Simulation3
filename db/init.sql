CREATE TABLE Sim3_users (
    id SERIAL PRIMARY KEY NOT NULL
    , auth0_sub TEXT NOT NULL
    , name TEXT NOT NULL
    , email TEXT NOT NULL
);


CREATE TABLE user_info (
    id SERIAL PRIMARY KEY NOT NULL
    , user_id INTEGER REFERENCES Sim3_users(id)
    , gender TEXT
    , hairColor TEXT
    , eyeColor TEXT
    , hobby TEXT
    , birthday_day INTEGER
    , birthday_month TEXT
    , birthday_year INTEGER
);



