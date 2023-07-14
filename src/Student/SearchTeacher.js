import React, { useState } from "react";
import { rb } from "../Firebase";
import { getDatabase, ref, child, get } from "firebase/database";
import { Form, Button, Table } from "react-bootstrap";

function SearchTeacher() {
  const [department, setDepartment] = useState("");
  const [teachers, setTeachers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const db = getDatabase(rb);
    const teacherRef = ref(db, "teachers");
    const departmentRef = child(teacherRef, department);
    const snapshot = await get(departmentRef);

    if (snapshot.exists()) {
      setTeachers(Object.values(snapshot.val()));
    } else {
      setTeachers([]);
    }
  };

  return (
    <div
      className="App"
      style={{ padding: "15px", color: "white", fontFamily: "Poppins" }}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Department : </Form.Label>
          <Form.Control
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
      <div
        style={{
          marginTop: "30px",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "35px",
          fontFamily: "Playfair",
        }}
      >
        Teacher - List
      </div>
      <Table striped bordered hover style={{ marginTop: 50 }}>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.name}>
              <td>{teacher.name}</td>
              <td>{teacher.department}</td>
              <td>{teacher.subject}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default SearchTeacher;
