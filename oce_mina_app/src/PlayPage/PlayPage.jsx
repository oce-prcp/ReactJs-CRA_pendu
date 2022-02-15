import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Form,
 Col,Container,Row,InputGroup,FormControl
} from "react-bootstrap";
import { useState, useEffect } from "react";

export default function (){
    return(
        <div>
            <header>Jouer</header>

          <InputGroup className="mb-3">
            <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
             Ajouter une lettre
            </Button>
        </InputGroup>
        </div>
    )
}