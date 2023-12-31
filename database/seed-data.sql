/* Initialize DB with some seed data */
USE `music_library_api_db`;

-- DONT MODIFY THIS MIGRATION
-- it is used by Xest local development pipeline
INSERT INTO `migrations` (
  name,
  run_on
) VALUES (
  "/20211107064324-seed-data",
  "20211107064324"
);

-- YOU CAN MODIFY BELOW THIS LINE
INSERT INTO user_types (user_type_id, user_type)
VALUES (1, "admin");
INSERT INTO user_types (user_type_id, user_type)
VALUES (2, "user");

INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (1, "Ahmet", "Akinsql", "ahmet@akinsql.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 1, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (2, "Joe", "Bloggs","joebloggs@gmail.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 2, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (3, "Jim", "Bloggs" , "jimbloggs@yahoo.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 2, "2020-11-20 12:00:00");

INSERT INTO artists (name, genre)
VALUES ("Tame Impala", "Electronic");
INSERT INTO artists (name, genre)
VALUES ("Zhu", "EDM");
INSERT INTO artists (name, genre)
VALUES ("Hayden James", "EDM");

INSERT INTO albums (name, year, artist_id)
VALUES ("Currents", 2015, 1);
INSERT INTO albums (name, year, artist_id)
VALUES ("The Slow Rush", 2020, 1);
INSERT INTO albums (name, year, artist_id)
VALUES ("GenerationWhy", 2016, 2);
INSERT INTO albums (name, year, artist_id)
VALUES ("Between Us", 2019, 3);

INSERT INTO songs (name, artist_id, album_id)
VALUES ("Just Friends", 3, 4);
INSERT INTO songs (name, artist_id, album_id)
VALUES ("Numb", 3, 4);
INSERT INTO songs (name, artist_id, album_id)
VALUES ("NoWhere To Go", 3, 4);
INSERT INTO songs (name, artist_id, album_id)
VALUES ("Good Life", 2, 3);