CREATE DATABASE trabalho_final;

CREATE TABLE restaurants(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name varchar(50) not null,
    location varchar(50) not null,
    price_range int not null CHECK (price_range >=1 and price_range <=5)
);

CREATE TABLE reviews(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL CHECK (rating >=1 and rating <=5)
);

--GET ALL restaurants
select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id;

--GET ONE restaurants
select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1;
select * from reviews where restaurant_id = $1;

--Create Review from Restaurants 
INSERT INTO reviews (restaurant_id, name, review, rating) VALUES ($1 , $2, $3, $4 ) returning *;

--Create a Restaurants
INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *;

--Update Restaurants
UPDATE restaurants SET name =$1, location =$2, price_range =$3 where id = $4 RETURNING *;

--Delete Restaurants
DELETE FROM restaurants WHERE id = $1;