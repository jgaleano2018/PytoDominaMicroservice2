import mysql from 'mysql2'

const db = mysql.createConnection({
    host: 'localhost',
    port: 4306,
    user: 'root',
    password: '',
    database: 'bddomina',
});

// Create and Save a new Task
export const postUserTask = (req, res, next) => {
    const { id_user, id_task } = req.body;
    db.query('INSERT INTO userTask (id_user, id_task) VALUES (?, ?)', [id_user, id_task], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Task added successfully', id: result.insertId });
    });
};

// Retrieve all Tasks from the database.
export const getUserTask = (req, res, next) => {
    db.query('SELECT * FROM userTask', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

// Find a single Task with an id
export const getUserTaskById = (req, res, next) => {
    const { id_user, id_task } = req.params;
    db.query('SELECT * FROM userTask WHERE id_user = ? And id_task = ?', [id_user, id_task], (err, results) => {
      if (err) throw err;
      res.json(results[0]);
    });
};

// Delete a Task with the specified id in the request
export const deleteUserTask = (req, res, next) => {
    const { id_user, id_task } = req.params;
    db.query('DELETE FROM userTask WHERE id_user = ? And id_task = ?', [id_user, id_task], (err) => {
      if (err) throw err;
      res.json({ message: 'Task deleted successfully' });
    });
};
