UPDATE Superheroes
    SET name = $2,
        powers = $3
            WHERE id = $1;