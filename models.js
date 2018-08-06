const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/plantr', {
  logging: false
})

const gardener = db.define('gardener', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

const plot = db.define('plot', {
  size: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  shaded: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})

const vegetable = db.define('vegetable', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false
  },
  planted_on: {
    type: Sequelize.DATE,
    allowNull: false
  }
})




gardener.hasOne(plot)
gardener.belongsTo(vegetable, { as: 'favorite_vegetable' })
vegetable.belongsToMany(plot, { through: 'vegetable_plot' })
plot.belongsToMany(vegetable, { through: 'vegetable_plot' })

db.sync().then()

module.exports = { db, gardener, plot, vegetable }
