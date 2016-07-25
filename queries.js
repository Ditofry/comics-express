/*
* This is basically a resource for my final project in CSCI 3287: Database and Information Systems.
* This design pattern is basically in place temporarily to illustrate the queries
* in a way that's convenient for grading
*/

// pg-promise opts
var options = {
  promiseLib: require('bluebird')
};

var pgp = require('pg-promise')(options);
// var db = pgp(process.env.DATABASE_URL || 'postgres://localhost:5432/comics_blog');
var cn = {
    host: 'localhost',
    port: 5432,
    database: 'comics_blog',
    user: 'brandon'
};

var db = pgp(cn);

module.exports = {
  // Basic Selections
  getTypeList: getTypeList,
  getCharacterPowers: getCharacterPowers,
  // Basic Selection and Projection
  getCharacterList: getCharacterList,
  getIssueList: getIssueList,
  // Theta Joins
  getCharacters: getCharacters,
  getCharacter: getCharacter,
  getIssues: getIssues,
  getMovies: getMovies,
  // Aggregation/Grouping Queries
  getCharacterGenderBreakdown: getCharacterGenderBreakdown,
  getNumCharactersByPublisher: getNumCharactersByPublisher, // e.g. Marvel: trillion, DC: trillion and one
  // Arithmetic Queries
  getEpisodeProbOfCharacterDeath: getEpisodeProbOfCharacterDeath, // %chance that character will die in any given episode of each t.v. series
  getIssueProbOfCharacterDeath: getIssueProbOfCharacterDeath, // same as above but for 'printed' comic books
  getAverageNumEnemies: getAverageNumEnemies, // supply character name
  // Advanced Queries (requiring many of the above types of operations)
  getCharsMoreHatedThanLoved: getCharsMoreHatedThanLoved, // Characters who appear in more enemy lists than friends list
  getCultClassicCharacters: getCultClassicCharacters, // Characters whose box office proceeds are an order of magnitude lower than their total earnings
  // Advanced Queries using Views
  getRebelCharacters: getRebelCharacters, // Analyses the description for hints that these characters can't be controlled. Generates a view if one doesn't exist
  getLadyRebels: getLadyRebels,
  getGentlemanRebels: getGentlemanRebels,
  // Inserts
  addCharacter: addCharacter,
  addPower: addPower,
  addIssue: addIssue,
  addPerson: addPerson,
  addMovie: addMovie,
  addPublisher: addPublisher,
  addSeries: addSeries,
  addStoryArc: addStoryArc,
  addTeam: addTeam,
  addType: addType,
  addVolume: addVolume,
  addImage: addImage
};

function getTypeList(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getCharacter(characterAttrs) {
  var q = 'SELECT * FROM characters, p.name AS publisher_name'
        	+ 'LEFT JOIN publishers AS p'
        	+ 'ON p.id = characters.publisher_id'
        	+ 'WHERE character.name = ${name}';
  db.any(q, characterAttrs)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved Character'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getCharacterPowers(characterAttrs) {
  var q = 'SELECT name, description FROM powers AS p'
        	+ 'JOIN character_powers AS cp'
        	+	'ON cp.power_id = p.id'
        	+	'AND cp.character_id = ${id}';
  db.any(q, characterAttrs)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getCharacterList(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getIssueList(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getCharacters(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getCharacter(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getIssues(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getIssue(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getMovies(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getMovie(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getCharacterGenderBreakdown(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getNumCharactersByPublisher(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getEpisodeProbOfCharacterDeath(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getIssueProbOfCharacterDeath(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getAverageNumEnemies(characterAttrs) {
  var q = 'SELECT AVG(num_enemies) '
            + 'FROM ('
            +	'SELECT COUNT(*) AS num_enemies '
            +	'FROM characters '
            +	'JOIN join_characters AS jc ON jc.join_reason = "enemies"'
            +		'AND jc.join_entity = "characters"'
            +		'AND jc.character_id = ${id}'
            +	'JOIN characters AS c ON c.id = jc.entity_id'
            + ') JoinEnemies';
  db.any(q, characterAttrs)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Average number of enemies by character'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getCharsMoreHatedThanLoved(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getCultClassicCharacters(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getRebelCharacters(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getLadyRebels(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getGentlemanRebels(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function addCharacter(characterAttrs) {
  // TODO: This isn't the best place for this concern, I don't think...
  // I would like this function to just take an object and save it.  Time constraints ¯\_(ツ)_/¯
  characterAttrs.first_appeared_in_issue = characterAttrs.first_appeared_in_issue ? characterAttrs.first_appeared_in_issue.id : 0;
  characterAttrs.origin_id = characterAttrs.origin ? characterAttrs.origin.id : null;
  characterAttrs.publisher_id = characterAttrs.publisher ? characterAttrs.publisher.id : null;

  // I left this as a single line in clase you wanted to CP/Paste.  Unfortunately line breaks will break the interpreter
  var q = "INSERT INTO characters (id, name, birth, count_of_issue_appearances, deck, description, gender, first_appeared_in_issue, origin_id, publisher_id, aliases, real_name, date_last_updated) VALUES(${id}, ${name}, ${birth}, ${count_of_issue_appearances}, ${deck}, ${description}, ${gender}, ${first_appeared_in_issue}, ${origin_id}, ${publisher_id}, ${aliases}, ${real_name}, ${date_last_updated})";
  db.none(q, characterAttrs)
    .then(function () {
      console.log("added " + characterAttrs["name"] + " to database");
    })
    .catch(function (error) {
      console.log(error);
    });
}

function addPower(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function addIssue(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function addPerson(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function addMovie(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function addPublisher(req, res, next) {
  var q = 'INSERT INTO characters (id, name, birth, deck, description, aliases, location_address, location_city, location_state, date_last_updated) VALUES(${id}, ${name}, ${birth}, ${deck}, ${description}, ${aliases}, ${location_address}, ${location_city}, ${location_state}, ${date_last_updated})')
  db.none(q, characterAttrs)
    .then(function () {
      console.log("added publisher " + characterAttrs["name"] + " to database");
    })
    .catch(function (error) {
      console.log(error);
    });
}

function addSeries(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function addStoryArc(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function addTeam(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function addType(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function addVolume(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function addImage(req, res, next) {
  db.any('SELECT * FROM whatever')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all of whatever'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}
