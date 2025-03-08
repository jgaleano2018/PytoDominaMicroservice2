module.exports = (sequelize, Sequelize) => {
    const UserTask = sequelize.define("userTask", {
      id_user: {
        type: Sequelize.id
      },
      id_task: {
        type: Sequelize.id
      }
    });
  
    return UserTask;
  };