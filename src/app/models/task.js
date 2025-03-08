module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {
      id: {
        type: Sequelize.id
      },
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Task;
  };