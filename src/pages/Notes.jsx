import React, { useState, useEffect } from "react";
import { Button, Container, Modal, InputGroup, Form } from "react-bootstrap";
import Note from "../components/Note";
import api from "../Api";

const Notes = () => {
    const [show, setShow] = useState(false);
    const [noteList, setNoteList] = useState([]);

    const [note, setNote] = useState({
        date:'',
        title:'',
        description:''
    })

    function handleInputChange(event){
        const { name, value } = event.target;
        setNote({
            ...note,
            [name]: value
        })
    }

    async function SaveNote() {
        if (!note.date || !note.title || !note.description){
            alert("Por favor, preencha todos os campos!");
            return;
        }

        await api.post("/notes", note);
        GetAll();

        //setNoteList([...noteList, note])
        setShow(false);

        setNote({
            date: '',
            title: '',
            description: ''
        })
    }


    async function GetAll() {
        var res = await api.get("/notes");
        setNoteList(res.data);
        console.log(noteList)
    }

    useEffect(function(){
        GetAll();
    }, []);

    return(
        <>
            <Container className="p-5 bg-light my-4 rounded-3">
                <h1>Minhas Anotações</h1>
                <p>
                Use essa janela para adicionar anotações e lembretes.
                </p>
                <Button variant="primary" onClick={()=> setShow(true)}>Criar nova anotação</Button>
            </Container>

            <Container>
                {Array.isArray(noteList) && noteList.map(item => 
                
                <Note 
                    key = {item.id}
                    title={item.title} 
                    date={item.date} 
                    description={item.description}  
                    id={item.id}
                    getAll={GetAll}
                    />
                    )}
            </Container>

            <Modal show ={show}>
                <Modal.Header>
                    <Modal.Title> Nova anotação</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <InputGroup>
                        <InputGroup.Text>Data</InputGroup.Text>
                        <Form.Control
                            type="date"
                            value={note.date}
                            name="date"
                            onChange={handleInputChange}
                        />
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroup.Text>Título</InputGroup.Text>
                        <Form.Control
                            value={note.title}
                            name="title"
                            onChange={handleInputChange}
                        />
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroup.Text>Descrição</InputGroup.Text>
                        <Form.Control
                            as="textarea"
                            value={note.description}
                            name="description"
                            onChange={handleInputChange}
                        />
                    </InputGroup>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="info" onClick={ () => setShow(false)}>Cancelar</Button>
                    <Button variant="dark" onClick={SaveNote}>Adicionar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Notes