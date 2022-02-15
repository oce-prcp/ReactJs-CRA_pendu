import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  Col,
  Container,
  Row
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { WordProvider } from "./../Provider/WordProvider";

// DE BASE MON TABLEAU EST VIDE ET DONC MES STATES AUSSI ...
export default function AddWordPage() {
  const [wordAdd, setWordAdd] = useState({
    id: "",
    mots: "",
   
  });

  
  const wordProvider = new WordProvider();
  const navigate = useNavigate();

  function add(e) {
    e.preventDefault();
    wordProvider.add(wordAdd);
    navigate("/WordPage/:id");
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Ajouter un Mot</h1>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form onSubmit={e => add(e)}>
              <Form.Group className="mb-3">
                <Form.Label>Titre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrer un mot"
                  value={wordAdd.mots}
                  onChange={e => {
                    let tmp = { ...wordAdd }
                    tmp.mots = e.target.value
                    setWordAdd(tmp)
                  }}
                  required
                />
              </Form.Group>
              
            

              <hr />

              <Button variant="light" as={Link} to="/WordPage/:id">
                Retour
              </Button>

              <Button
                variant="outline-secondary"
                className="float-end mx-2"
                type="reset"
              >
                Annuler
              </Button>

              <Button variant="success" type="submit" className="float-end" >
                Enregistrer
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}
