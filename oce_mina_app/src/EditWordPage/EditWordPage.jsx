import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { WordProvider } from "./../Provider/WordProvider";

export default function ModificationPage() {
  const [word,setWord] = useState({});
  const [wordModif,setWordModif] = useState({
    id: "",
    mots:"",
  });
  const wordProvider = new WordProvider()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    let tmpword = wordProvider.getwordsById(id)

    if (!tmpword) {
      alert('word non trouvé dans la base')
      navigate('/WordPage/:id')
    } else {
     setWord(tmpword)
     setWordModif(tmpword)
    }
  }, [id, navigate])

  function update(e) {
    e.preventDefault()
    let res = wordProvider.update(wordModif)
    if (res) navigate('/WordPage/:id')
    else alert("Erreur lors de l'enregistrement")
  }

  function reset() {
    setWordModif(word)
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Modifier un mot</h1>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form onSubmit={e => update(e)}>
              <Form.Group className="mb-3">
                <Form.Label>Titre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrer un mot"
                  value={wordModif.mots}
                  onChange={e => {
                    let tmp = { ...wordModif }
                    tmp.mots = e.target.value
                    setWordModif(tmp)
                  }}
                  required
                />
              </Form.Group>
              
              <hr />

              <Button variant="light" as={Link} to="/WordPage">
                Retour
              </Button>

              <Button
                variant="outline-secondary"
                className="float-end mx-2"
                type="reset"
                onClick={reset}
              >
                Annuler
              </Button>

              <Button variant="success" type="submit" className="float-end">
                Enregistrer
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}
