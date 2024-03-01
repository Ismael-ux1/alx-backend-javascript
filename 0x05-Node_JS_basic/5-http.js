const http = require('http');
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n');
    const students = lines.filter((line) => line).map((line) => line.split(','));
    const numberOfStudents = students.length;

    const fields = {};
    for (let i = 0; i < students.length; i += 1) {
      const field = students[i][3];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(students[i][0]);
    }

    let output = `Number of students: ${numberOfStudents}\n`;
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }
    }
    return output;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const studentCount = await countStudents('database.csv');
      res.end(`This is the list of our students\n${studentCount}`);
    } catch (err) {
      res.end(err.message);
    }
  } else {
    res.end('Page not found');
  }
});

app.listen(1245);

module.exports = app;
