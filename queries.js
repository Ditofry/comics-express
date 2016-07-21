/*
* This is basically a resource for my final project in CSCI 3287: Database and Information Systems.
* This design pattern is basically in place temporarily to illustrate the queries
* in a way that's convenient for grading
*/

// pg-promise opts
var options = {
  promiseLib: require('bluebird')
};

var pgp = require('pg-promise');
var db = pgp(process.env.DATABASE_URL || 'postgres://localhost:5432/comics_blog');

module.exports = {
  // Basic Selections
  getTypeList: getTypeList,
  getPowersList: getPowersList,
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

function getPowersList(req, res, next) {
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

function getAverageNumEnemies(req, res, next) {
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

function addCharacter(req, res, next) {
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
