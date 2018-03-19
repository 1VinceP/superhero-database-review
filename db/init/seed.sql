DROP TABLE IF EXISTS Superheroes;

CREATE TABLE Superheroes
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(60),
    powers VARCHAR(100),
    faction VARCHAR(10),
    good BOOLEAN
);

INSERT INTO Superheroes
    ( name, powers, faction, good )
    VALUES
        ( 'Spiderman', 'Webs', 'Marvel', true ),
        ( 'Venom', 'Fangs', 'Marvel', false ),
        ( 'Batman', 'Money', 'DC', true),
        ( 'Joker', 'Psycho', 'DC', false );