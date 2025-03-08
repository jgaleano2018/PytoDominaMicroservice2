import mysql from 'mysql2'

const db = mysql.createConnection({
    host: 'localhost',
    port: 4306,
    user: 'root',
    password: '',
    database: 'bddomina',
});

// Create and Save a new Task
export const postTask = (req, res, next) => {

    const { name } = req.body;
    
    db.query('INSERT INTO task (name) VALUES (?)', [name], function(error, response, fields) {
        if (error) throw error;
        res.json({ message: 'Task added successfully', id: response.insertId });
    })

};

// Retrieve all Tasks from the database.
export const getTask = (req, res, next) => {
    
    db.query('SELECT * FROM task', function(error, response, fields) {
        if (error) throw error;
        console.log('response:', response);
        res.status(200).json(response);
    });

};

// Find a single Task with an id
export const getTaskById = (req, res, next) => {

    const { id } = req.params;

    db.query('SELECT * FROM task WHERE id = ?', [id], function(error, response, fields) {
        if (error) throw error;
        console.log('response:', response);
        res.status(200).json(response);
    });

};

// Update a Task by the id in the request
export const putTask = (req, res, next) => {

    const { id } = req.params;
    const { name } = req.body;

    db.query('UPDATE task SET name = ? WHERE id = ?', [name, id], (err) => {
      if (err) throw err;
      res.json({ message: 'Task updated successfully' });
    });

};

// Delete a Task with the specified id in the request
export const deleteTask = (req, res, next) => {

    const { id } = req.params;

    db.query('DELETE FROM task WHERE id = ?', [id], (err) => {
      if (err) throw err;
      res.json({ message: 'Task deleted successfully' });
    });
    
};