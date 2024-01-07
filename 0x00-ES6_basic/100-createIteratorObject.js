export default function iterateThroughObject(reportWithIterator) {
    let names = [];
    for (let department in reportWithIterator.allEmployees) {
        names.push(...reportWithIterator.allEmployees[department]);
    }
    return names.join(' | ');
}
