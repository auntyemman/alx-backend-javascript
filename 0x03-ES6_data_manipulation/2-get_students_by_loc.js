export default function getStudentsByLocation(getListStudents, city) {
  const arrObj = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  return arrObj.filter((arrObj) => arrObj.location === city);
}
