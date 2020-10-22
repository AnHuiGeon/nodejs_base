const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Article = require('./article')(sequelize, Sequelize);
db.Store = require('./store')(sequelize, Sequelize);
db.Welfareorg = require('./welfareorg')(sequelize, Sequelize);

db.User.hasOne(db.Store, { foreignKey: 'user_id', sourceKey: 'id' });
db.Store.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'id' });
db.User.hasOne(db.Welfareorg, {foreignKey: 'user_id', sourceKey: 'id' });
db.Welfareorg.belongsTo(db.User, { foreignKey:'user_id', sourceKey:'id' });
db.User.hasMany(db.Article, { foreignKey: 'user_id', sourceKey: 'id' });
db.Article.belongsTo(db.User, { foreignKey: 'user_id', sourceKey: 'id' });

module.exports = db;