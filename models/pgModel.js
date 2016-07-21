var PgModel = function (data) {
    this.data = data;
};

PgModel.prototype.data = {};

PgModel.prototype.changeName = function (name) {
    this.data.name = name;
};

PgModel.findById = function (id, table, callback) {
    db.get(table, {id: id}).run(function (err, data) {
        if (err) return callback(err);
        callback(null, new User(data));
    });
};

module.exports = PgModel;
