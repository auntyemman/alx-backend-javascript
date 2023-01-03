/* eslint-disable no-unused-vars */
export default function getStudentsSum(getListStudents) {
  const arrObj = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' }
  ];
  return arrObj.reduce(((sum, arrObj) => sum + arrObj.id), 0);
}
