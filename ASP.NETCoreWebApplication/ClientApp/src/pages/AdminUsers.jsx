import React, {useState, useContext} from 'react';
import axios from "axios"
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {EntityContext} from '../context/EntityContext';
import PsLoading from '../components/Loading';


export const AdminUsers = () => {
    const {entities, fetchData, loading} = useContext(EntityContext)
    const [name, setName] = useState("");
    const [id, setId] = useState(false);
    const [privileges, setPrivileges] = useState('Read access');
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);

    const handleClose = () => setShow(false);

    const handleEdit = (user) => {
        setId(user.id);
        setName(user.name);
        setPrivileges(user.privileges);
        setShow(true);
        setEdit(true);
    }
    const handleAdd = () => {
        setShow(true);
        setEdit(false);
        setName("");
    }

    const handleSubmit = async () => {
        //SetLoading = true => Få på no kul loading animation
        edit ? axios.put(`https://localhost:5001/user/edit`, {id, name, privileges}).then(fetchData).then(() => handleClose())
            : axios.post('https://localhost:5001/user/create', {name, privileges}).then(fetchData).then(() => handleClose())
    }

    const handleDelete = async () => axios.delete(`https://localhost:5001/user/delete/${id}`).then(fetchData).then(() => handleClose());

    const generateUser = () => {
        return entities[0].map((user, key) => (

            <tr className="text-left" key={key} onClick={() => handleEdit(user)}>
                <td>{user.name}</td>
                <td>{user.privileges}</td>
            </tr>
        ));
    };

    return (
                <Container>
                    <h1>Users</h1>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{edit ? 'Edit user' : 'Add new user'}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form className="text-left">
                                <Form.Group>
                                    <Form.Control type="text" placeholder={edit ? name : "Enter name"} value={name}
                                                  onChange={(e) => setName(e.target.value)}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Example select</Form.Label>
                                    <Form.Control as="select"
                                                  placeholder={edit ? privileges : "Read access"}
                                                  onChange={(e) => setPrivileges(e.target.value)}
                                                  value={privileges}>
                                        <option value='Read access'>Read access</option>
                                        <option value='Write access'>Write access</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            {edit &&
                            <Button variant="danger" onClick={handleDelete}>
                                Delete
                            </Button>
                            }
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <Button className="mt-4" onClick={handleAdd}>Add user</Button>
                    {  loading ? <PsLoading/> :
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th className="text-left">Name</th>
                            <th className="text-left">Privileges</th>
                        </tr>
                        </thead>
                        <tbody>

                        {generateUser()}
                        </tbody>
                    </Table>
                    }
                </Container>
    );
};