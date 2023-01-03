/*-----Using Map method in a function-----*/
export default function getListStudentIds(arg) {
  const arrObj = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
    ];
  const mapArrObj = arrObj.map((property) => property.id);
  if (Array.isArray(arg)) {
    return mapArrObj;
  }
  return [];
}
