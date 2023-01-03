/* eslint-disable no-unused-vars */
export default function getStudentIdsSum(getListStudents) {
  const arrObj = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  return arrObj.reduce(((reducer, arrObj) => reducer + arrObj.id), 0);
}
