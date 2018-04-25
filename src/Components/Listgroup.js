import React from 'react'
import { ListGroup, ListGroupItem, Row, Col, Button } from 'reactstrap';
import styled from 'styled-components'

const MySpan = styled.span`
    &.done{
        position: relative;
        &::before {
            border-bottom: 3px solid green;
            position: absolute;
            content: "";
            width: 100%;
            height: 70%;
        }
    }
`

const MyListGroup = (props) => {
    let listGroupItem = <ListGroupItem>Empty Todo</ListGroupItem>
    if (props.toDo.length > 0) {
        listGroupItem = props.toDo.map((td, id) => {
            return (
                <ListGroupItem key={id}>
                    <Row>
                        <Col sm={2}>
                            <label>
                                <input 
                                    type="checkbox" 
                                    checked={td.done}
                                    onChange={() => props.onDoneCheck(td.ID)}
                                /> 
                                Done 
                            </label>
                        </Col>
                        <Col sm={8}>
                            <MySpan className={td.done? "done" : ""} >{td.toDo}</MySpan>
                        </Col>
                        <Col sm={2}>
                            <Button onClick={() => props.onDeleteClick(td.ID)} color="danger">Delete</Button>
                        </Col>
                    </Row>
                </ListGroupItem>
                )
        })
    }
    return (
        <ListGroup className = "mt-2">
            {listGroupItem}
            {/* <ListGroupItem>Empty Todo</ListGroupItem> */}
        </ListGroup>
    )
}

export default MyListGroup