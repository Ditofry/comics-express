DROP DATABASE IF EXISTS comics_blog;
CREATE DATABASE comics_blog;

\c comics_blog; # Change to our new database

#####
#
#
# TODO: Split into separate files and put relationship descriptions into comments?
# This is probably only necessary if I break joins out into many tables.
#
#
#####

CREATE TABLE characters (
  id PRIMARY KEY INT, # Using external unique key supplied from ComicVine
  name CHAR 100,
  birth VARCHAR 20, # e.g. "Dec 4, 1920"
  count_of_issue_appearances INT8, # Could just use INT, but I'm being pedantic for the sake of the assignment :)
  deck VARCHAR,
  description TEXT, # These can be massive
  gender CHAR 6, # Female, Male, Other. **comes in as int (2,1,0)
  first_appeared_in_issue: INT,
  origin_id INT,
  publisher_id INT,
  aliases VARCHAR 400,
  real_name VARCHAR 100,
  date_last_updated TIMESTAMP
);

# Table & JOIN table for powers. has-many to has-many relationship with characters
CREATE TABLE powers (
  id PRIMARY KEY INT4, # Current ceiling is ~130. I would be astounded if they ever got past 300
  name CHAR 100,
  date_last_updated TIMESTAMP,
  description TEXT
);

CREATE TABLE character_powers (
  character_id INT,
  power_id INT
);

CREATE INDEX character_id_index ON character_powers(character_id);
CREATE INDEX power_id_index ON character_powers(power_id);

# JOIN table for character_friends: has-many to has-many SELF JOIN
CREATE TABLE join_characters (
  join_reason CHAR 30,
  join_entity CHAR 40,
  join_id INT,
  character_id INT
);

-- movies , ## Needs to be separate table
-- story_arc_credits
-- team_enemies ,## Needs to be separate table
-- team_friends ,## Needs to be separate table
-- teams ,## Needs to be separate table
-- volume_credits ## Needs to be separate table
CREATE TABLE issues (
  id INT,
  name CHAR 100,
  aliases VARCHAR 400,
  cover_date TIMESTAMP,
  date_last_updated TIMESTAMP,
  deck VARCHAR,
  description TEXT,
  issue_number INT8,
  volume_id INT
);

CREATE TABLE join_issues (
  join_reason CHAR 30,
  join_entity CHAR 40,
  join_id INT,
  issue_id INT
);

# table and POLYMORPHIC JOIN table for people: has-many to has-many, multiple join opportunities
CREATE TABLE people (
  character_id INT,
  enemy_id INT # SELF JOIN character_id
);

CREATE TABLE join_people (
  join_reason CHAR 30,
  join_entity CHAR 40,
  join_id INT,
  person_id INT
);

CREATE TABLE concepts (
  id INT PRIMARY KEY,
  name CHAR 100,
  aliases VARCHAR 400,
  cover_date TIMESTAMP,
  date_last_updated TIMESTAMP,
  deck VARCHAR,
  description TEXT,
  count_of_isssue_appearances INT8,
  publisher_id INT,
  first_appeared_in_issue INT8,
  start_year INT4
);


CREATE TABLE movies (
  id INT,
  name CHAR 100,
  box_office_revenue INT, # in dollars
  budget INT4, # in millions
  date_last_updated TIMESTAMP,
  deck VARCHAR,
  description TEXT,
  rating CHAR 1, # e.g. 'R'
  release_date TIMESTAMP,
  runtime INT4, # minutes
  total_revenue INT #dollars
);

CREATE TABLE join_movies (
  join_reason CHAR 30,
  join_entity CHAR 40,
  join_id INT,
  movie_id INT
);

CREATE TABLE publishers (
  id INT PRIMARY KEY,
  name: CHAR 100,
  aliases VARCHAR 400,
  date_last_updated TIMESTAMP,
  deck VARCHAR,
  description TEXT,
  location_address CHAR 100,
  location_city CHAR 100,
  location_state CHAR 100
);

CREATE TABLE series (
  id INT PRIMARY KEY,
  count_of_episodes INT8,
  name: CHAR 100,
  aliases VARCHAR 400,
  date_last_updated TIMESTAMP,
  deck VARCHAR,
  description TEXT,
  start_year INT4,
  first_episode_id INT, # extrapolated
  last_episode_id INT,
  publisher_id INT
);

CREATE TABLE story_arcs (
  id INT PRIMARY KEY,
  name CHAR 100,
  aliases VARCHAR 400,
  cover_date TIMESTAMP,
  date_last_updated TIMESTAMP,
  deck VARCHAR,
  description TEXT,
  count_of_isssue_appearances INT8,
  first_appeared_in_episode_id INT,
  first_appeared_in_issue_id INT,
  publisher_id INT
);

CREATE TABLE teams (
  id INT PRIMARY KEY,
  name CHAR 100,
  aliases VARCHAR 400,
  cover_date TIMESTAMP,
  date_last_updated TIMESTAMP,
  deck VARCHAR,
  description TEXT,
  count_of_isssue_appearances INT8,
  publisher_id INT
);

CREATE TABLE types (
  id INT PRIMARY KEY
  detail_resource_name CHAR 40,
  list_resource_name CHAR 40
);

CREATE TABLE volumes (
  id INT PRIMARY KEY,
  name CHAR 100,
  aliases VARCHAR 400,
  date_last_updated TIMESTAMP,
  deck VARCHAR,
  description TEXT,
  count_of_isssues INT8,
  first_issue_id INT, # Extrapolated
  last_issue_id INT, # Extrapolated
  publisher_id INT, # Extrapolated
  start_year INT4
);

CREATE TABLE images (
  id INT PRIMARY KEY,
  image_for CHAR 30,
  image_type CHAR 30,
  image_url VARCHAR # This needs to move to AWS S3 quick or I'll get rate-limited
);

# Will support these in the future
-- CREATE TABLE locations (
--   id INT PRIMARY KEY
-- );
--
-- CREATE TABLE objects (
--   id INT PRIMARY KEY
-- );

-- CREATE TABLE origins (
--   id INT PRIMARY KEY
-- );

-- CREATE TABLE promos (
--   id INT PRIMARY KEY
-- );
