import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const MyForm = (props) => {
    return (
        <Form inline className="justify-content-center mt-2">
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleEmail" className="mr-sm-2">ToDo :</Label>
                <Input type="text" 
                    name="todo" 
                    id="todo" 
                    placeholder="something you want to do" 
                    value={props.input}
                    onChange = {(event) => props.onInputChange(event)}
                    />
            </FormGroup>
            <Button 
                color="success"
                onClick = {() => props.onClickSubmit()}
                >
                Submit
            </Button>
        </Form>
    )
}

export default MyForm