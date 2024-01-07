export default function createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);
  let departmentIndex = 0;
  let employeeIndex = 0;

  return {
    [Symbol.iterator]() {
      return {
        next() {
          const department = departments[departmentIndex];
          if (department === undefined
              || report.allEmployees[department][employeeIndex] === undefined) {
            return { done: true };
          }

          const value = report.allEmployees[department][employeeIndex];
          employeeIndex += 1;

          if (employeeIndex >= report.allEmployees[department].length) {
            departmentIndex += 1;
            employeeIndex = 0;
          }

          return { value, done: false };
        },
      };
    },
  };
}
