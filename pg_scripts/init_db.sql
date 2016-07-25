-- DROP DATABASE IF EXISTS comics_blog;
-- CREATE DATABASE comics_blog;
--
-- \c comics_blog; -- Change to our new database

CREATE TABLE characters (
  id INT PRIMARY KEY, -- Using external unique key supplied from ComicVine
  name VARCHAR,
  birth TIMESTAMP, -- e.g. "Dec 4, 1920", gets parsed into TIMESTAMP
  count_of_issue_appearances INT8, -- Could just use INT, but I'm being pedantic for the sake of the assignment :)
  deck VARCHAR,
  description TEXT, -- These can be massive
  gender CHAR(6), -- Female, Male, Other. **comes in as int (2,1,0)
  first_appeared_in_issue INT,
  origin_id INT,
  publisher_id INT,
  aliases VARCHAR,
  real_name VARCHAR,
  date_last_updated TIMESTAMP
);

CREATE INDEX character_name_index ON characters(name);
CREATE INDEX origin_id_index ON characters(origin_id);
CREATE INDEX publisher_id_index ON characters(publisher_id);
CREATE INDEX characters_last_updated_index ON characters(date_last_updated);
CREATE INDEX gender_index ON characters(gender);

-- JOIN table for character_friends: has-many to has-many SELF JOIN
CREATE TABLE join_characters (
  join_reason CHAR(30),
  join_entity CHAR(40),
  join_id INT,
  character_id INT
);

CREATE INDEX charjoin_reason_index ON join_characters(join_reason);
CREATE INDEX charjoin_entity_index ON join_characters(join_entity);
CREATE INDEX charjoin_join_id_index ON join_characters(join_id);
CREATE INDEX charjoin_character_id_index ON join_characters(character_id);

-- Table & JOIN table for powers. has-many to has-many relationship with characters
CREATE TABLE powers (
  id INT4 PRIMARY KEY, -- Current ceiling is ~130. I would be astounded if they ever got past 300
  name VARCHAR,
  date_last_updated TIMESTAMP,
  description TEXT
);

CREATE INDEX power_name_index ON powers(name);
CREATE INDEX powers_last_updated_index ON powers(date_last_updated);

CREATE TABLE character_powers (
  character_id INT,
  power_id INT
);

CREATE INDEX character_id_index ON character_powers(character_id);
CREATE INDEX power_id_index ON character_powers(power_id);

CREATE TABLE issues (
  id INT PRIMARY KEY,
  name VARCHAR,
  aliases VARCHAR,
  cover_date TIMESTAMP,
  date_last_updated TIMESTAMP,
  deck VARCHAR,
  description TEXT,
  issue_number INT8,
  volume_id INT
);

CREATE INDEX issues_name_index ON issues(name);
CREATE INDEX issues_last_updated_index ON issues(date_last_updated);
CREATE INDEX issues_volume_index ON issues(volume_id);

CREATE TABLE join_issues (
  join_reason CHAR(30),
  join_entity CHAR(40),
  join_id INT,
  issue_id INT
);

CREATE INDEX issuejoin_reason_index ON join_issues(join_reason);
CREATE INDEX issuejoin_entity_index ON join_issues(join_entity);
CREATE INDEX issuejoin_join_id_index ON join_issues(join_id);
CREATE INDEX issuejoin_issue_id_index ON join_issues(issue_id);

-- table and POLYMORPHIC JOIN table for people: has-many to has-many, multiple join opportunities
CREATE TABLE people (
  id INT PRIMARY KEY,
  name CHAR(100)
);

CREATE INDEX people_id_index ON people(id);
CREATE INDEX people_name_index ON people(name);

CREATE TABLE join_people (
  join_reason CHAR(30),
  join_entity CHAR(40),
  join_id INT,
  person_id INT
);

CREATE INDEX peoplejoin_reason_index ON join_people(join_reason);
CREATE INDEX peoplejoin_entity_index ON join_people(join_entity);
CREATE INDEX peoplejoin_join_id_index ON join_people(join_id);
CREATE INDEX peoplejoin_character_id_index ON join_people(person_id);

CREATE TABLE concepts (
  id INT PRIMARY KEY,
  name VARCHAR,
  aliases VARCHAR,
  cover_date TIMESTAMP,
  date_last_updated TIMESTAMP,
  deck VARCHAR,
  description TEXT,
  count_of_isssue_appearances INT8,
  publisher_id INT,
  first_appeared_in_issue INT8,
  start_year INT4
);

CREATE INDEX concepts_name_index ON concepts(name);
CREATE INDEX concepts_last_updated_index ON concepts(date_last_updated);
CREATE INDEX concepts_count_of_issue_appearance_index ON concepts(count_of_isssue_appearances);
CREATE INDEX concepts_publisher_index ON concepts(publisher_id);
CREATE INDEX concepts_start_year_index ON concepts(start_year);

CREATE TABLE movies (
  id INT PRIMARY KEY,
  name VARCHAR,
  box_office_revenue INT, -- in dollars
  budget INT4, -- in millions
  date_last_updated TIMESTAMP,
  deck VARCHAR,
  description TEXT,
  rating CHAR(1), -- e.g. 'R'
  release_date TIMESTAMP,
  runtime INT4, -- minutes
  total_revenue INT --dollars
);

CREATE INDEX movies_name_index ON movies(name);
CREATE INDEX movies_bo_revenue_index ON movies(box_office_revenue);
CREATE INDEX movies_budget_index ON movies(budget);
CREATE INDEX movies_last_updated_index ON movies(date_last_updated);
CREATE INDEX movies_rating_index ON movies(rating);
CREATE INDEX movies_release_date_index ON movies(release_date);
CREATE INDEX movies_runtime_index ON movies(runtime);
CREATE INDEX movies_total_revenue_index ON movies(total_revenue);

CREATE TABLE join_movies (
  join_reason CHAR(30),
  join_entity CHAR(40),
  join_id INT,
  movie_id INT
);

CREATE INDEX moviesjoin_reason_index ON join_movies(join_reason);
CREATE INDEX moviesjoin_entity_index ON join_movies(join_entity);
CREATE INDEX moviesjoin_join_id_index ON join_movies(join_id);
CREATE INDEX moviesjoin_character_id_index ON join_movies(movie_id);

CREATE TABLE publishers (
  id INT PRIMARY KEY,
  name VARCHAR,
  aliases VARCHAR,
  date_last_updated TIMESTAMP,
  deck VARCHAR,
  description TEXT,
  location_address VARCHAR,
  location_city VARCHAR,
  location_state VARCHAR
);

CREATE INDEX publishers_name_index ON publishers(name);
CREATE INDEX publisher_last_updated_index ON publishers(date_last_updated);

CREATE TABLE series (
  id INT PRIMARY KEY,
  count_of_episodes INT8,
  name VARCHAR,
  aliases VARCHAR,
  date_last_updated TIMESTAMP,
  deck VARCHAR,
  description TEXT,
  start_year INT4,
  first_episode_id INT, -- extrapolated
  last_episode_id INT,
  publisher_id INT
);

CREATE INDEX series_ep_count_index ON series(count_of_episodes);
CREATE INDEX series_name_index ON series(name);
CREATE INDEX series_last_updated_index ON series(date_last_updated);
CREATE INDEX series_start_year_index ON series(start_year);
CREATE INDEX series_publisher_id ON series(publisher_id);

CREATE TABLE story_arcs (
  id INT PRIMARY KEY,
  name VARCHAR,
  aliases VARCHAR,
  cover_date TIMESTAMP,
  date_last_updated TIMESTAMP,
  deck VARCHAR,
  description TEXT,
  count_of_isssue_appearances INT8,
  first_appeared_in_episode_id INT,
  first_appeared_in_issue_id INT,
  publisher_id INT
);

CREATE INDEX storyarc_name_index ON story_arcs(name);
CREATE INDEX storyarc_last_updated_index ON story_arcs(date_last_updated);
CREATE INDEX storyarc_coverdate_index ON story_arcs(cover_date);
CREATE INDEX storyarc_count_issues_index ON story_arcs(count_of_isssue_appearances);
CREATE INDEX storyarc_publisher_id_index ON story_arcs(publisher_id);

CREATE TABLE teams (
  id INT PRIMARY KEY,
  name VARCHAR,
  aliases VARCHAR,
  cover_date TIMESTAMP,
  date_last_updated TIMESTAMP,
  deck VARCHAR,
  description TEXT,
  count_of_isssue_appearances INT8,
  publisher_id INT
);

CREATE INDEX teams_name_index ON teams(name);
CREATE INDEX teams_last_updated_index ON teams(date_last_updated);
CREATE INDEX teams_issue_appearances_index ON teams(count_of_isssue_appearances);
CREATE INDEX teams_publisher_index ON teams(publisher_id);

CREATE TABLE types (
  id INT PRIMARY KEY,
  detail_resource_name CHAR(40),
  list_resource_name CHAR(40)
);

CREATE TABLE volumes (
  id INT PRIMARY KEY,
  name VARCHAR,
  aliases VARCHAR,
  date_last_updated TIMESTAMP,
  deck VARCHAR,
  description TEXT,
  count_of_isssues INT8,
  first_issue_id INT, -- Extrapolated
  last_issue_id INT, -- Extrapolated
  publisher_id INT, -- Extrapolated
  start_year INT4
);

CREATE INDEX volumes_name_index ON volumes(name);
CREATE INDEX volumes_last_updated_index ON volumes(date_last_updated);
CREATE INDEX volumes_issue_count_index ON volumes(count_of_isssues);
CREATE INDEX volumes_publisher_index ON volumes(publisher_id);
CREATE INDEX volumes_start_year_index ON volumes(start_year);

CREATE TABLE images (
  id INT PRIMARY KEY,
  image_for CHAR(30),
  image_type CHAR(30),
  image_url VARCHAR -- This needs to move to AWS S3 quick or I'll get rate-limited
);

CREATE INDEX images_for_index ON images(image_for);
CREATE INDEX images_type_index ON images(image_type);

-- Will support these in the future
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
