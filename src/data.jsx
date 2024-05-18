// Data.js
export const data = [
  {
    empID: 1,
    name: "Hammad",
    age: 27,
    role: "Software Engineer",
    city: "Islamabad",
  },
  { empID: 2, name: "Saad", age: 32, role: "Accountant", city: "London" },
  { empID: 3, name: "Sarah", age: 30, role: "QA", city: "Chicago" },
  { empID: 4, name: "Ali", age: 30, role: "Code Review", city: "Paris" },
  { empID: 7, name: "Khan", age: 32, role: "QA", city: "Houston" },
  {
    empID: 22,
    name: "Ryan",
    age: 39,
    role: "Software Engineer",
    city: "Chicago",
  },
  { empID: 117, name: "Aaron", age: 42, role: "IT Manager", city: "Berlin" },
  {
    empID: 33,
    name: "Kathy",
    age: 52,
    role: "Project Manager",
    city: "Amsterdam",
  },
];

export const columns = [
  { Header: "Employee ID", accessor: "empID" },
  { Header: "Name", accessor: "name", filterable: false },
  { Header: "Age", accessor: "age" },
  { Header: "Role", accessor: "role" },
  { Header: "City", accessor: "city" },
];
