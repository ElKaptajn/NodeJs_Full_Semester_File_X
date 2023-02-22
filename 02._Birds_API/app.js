const express = require('express');
const db = require('./db');

const app = express();

const PORT = 8080;

app.use(express.json()); // Makes express parse data as JSON and put it in req.body

// GET all
app.get('/birds', (req, res) => {
  const sql = 'SELECT * FROM bird_info';
  db.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.status(404).send('No birds found');
      return;
    }
    res.json(result);
  });
});

// GET by id
app.get('/birds/:id', (req, res) => {
  const id = Number(req.params.id);
  const sql = `SELECT * FROM bird_info WHERE id = ${id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.status(404).send(`Bird with the id of ${id} wasn't found.`);
      return;
    }
    res.send(result);
  });
});

// POST
app.post('/birds', (req, res) => {
  const sql = `INSERT INTO bird_info (name, wingspan) VALUES ('${req.body.name}', ${req.body.wingspan})`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    if (result.affectedRows === 0) {
      res.status(404).send('The bird was not added to the database');
      return;
    }
    res.send(`Bird added: ${req.body.name}`);
  });
});

// PUT
app.put('/birds/:id', (req, res) => {
  const id = Number(req.params.id);
  const sql = `UPDATE bird_info SET name = '${req.body.name}', wingspan = ${req.body.wingspan} WHERE id = ${id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    if (result.affectedRows === 0) {
      res.status(404).send(`Bird with the id of ${id} not found`);
      return;
    }
    res.send(`Bird with the id of ${id} has been updated to: ${req.body.name}, ${req.body.wingspan}`);
  });
});

// DELETE
app.delete('/birds/:id', (req, res) => {
  const id = Number(req.params.id);
  const sql = `DELETE FROM bird_info WHERE id = ${id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    if (result.affectedRows === 0) {
      res.status(404).send(`Bird with the id of ${id} not found`);
      return;
    }
    res.send(`Bird with the id of ${id} has been deleted.`);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
