const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const students = lines.filter((line) => line).map((line) => line.split(','));
    const numberOfStudents = students.length;
    console.log(`Number of students: ${numberOfStudents}`);

    const fields = {};
    for (let i = 0; i < students.length; i += 1) {
      const field = students[i][3];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(students[i][0]);
    }

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
