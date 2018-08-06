const { db, gardener, plot, vegetable } = require('./models')

db.sync().then(() => {
  vegetable.bulkCreate([
    {
      name: '',
      color: '',
      planted_on: Date.now()
    },
    {
      name: '',
      color: '',
      planted_on: Date.now()
    },
    {
      name: '',
      color: '',
      planted_on: Date.now()
    }
  ])

  gardener.bulkCreate([
    {
      name: '',
      age: ''
    },
    {
      name: '',
      age: ''
    },
    {
      name: '',
      age: ''
    }
  ])

  plot.bulkCreate([
    {
      size: 0,
      shaded: false,
    },
    {
      size: 0,
      shaded: false
    },
    {
      size: 0,
      shaded: false
    }
  ])
})

// const gardener = db.define('gardener', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   age: {
//     type: Sequelize.INTEGER,
//     allowNull: false
//   }
// })

// const plot = db.define('plot', {
//   size: {
//     type: Sequelize.INTEGER,
//     allowNull: false
//   },
//   shaded: {
//     type: Sequelize.BOOLEAN,
//     allowNull: false
//   }
// })

// const vegetable = db.define('vegetable', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   color: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   planted_on: {
//     type: Sequelize.DATE,
//     allowNull: false
//   }
// })
