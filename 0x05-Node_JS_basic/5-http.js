const http = require('http');
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const db = await fs.readFile(path, 'utf8');
    const students = db.split('\n').filter((line) => line.trim() !== '');
    const totalStudents = students.length - 1;

    const fields = {};
    students.slice(1).forEach((student) => {
      const [name, , , field] = student.split(',').map((item) => item.trim());
      if (field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(name);
      }
    });

    let studentList = `Number of students: ${totalStudents}\n`;
    for (const fieldName in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, fieldName)) {
        studentList += `Number of students in ${fieldName}: ${fields[fieldName].length}. List: ${fields[fieldName].join(', ')}\n`;
      }
    }

    return studentList;
  } catch (err) {
    return 'Cannot load the database';
  }
}

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const studentCount = await countStudents('database.csv');
    res.end(`This is the list of our students\n${studentCount}`);
  } else {
    res.end('Page not found');
  }
});

app.listen(1245);

module.exports = app;
