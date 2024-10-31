import React from "react";
import { Card, Button } from "react-bootstrap";
import api from "../Api";
import { format } from 'date-fns';

const Note = (props) => {

    async function DeleteNote() {
        await api.request({
            url: '/notes',
            method: 'delete',
            data: { id: props.id }
        })

        props.getAll();
    }
    return(
        <> <Card>
                <Card.Body>
                    <Card.Title> {props.title}</Card.Title>
                    <Card.Subtitle> {format(new Date(props.date), 'dd/MM/yyyy')}</Card.Subtitle>
                    <Card.Text>{props.description} </Card.Text>
                    <Button variant="danger" onClick={DeleteNote}>Excluir</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Note;