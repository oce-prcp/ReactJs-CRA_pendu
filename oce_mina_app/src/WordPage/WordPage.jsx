import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  ListGroup,
  Form,
  FormControl,
  FormLabel,
  FormGroup,
  Select,
  Col,
  Container,
  Table,
  Row,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import {WordProvider } from "./../Provider/WordProvider";


export default function WordPage() {
  const [word, setWord] = useState([]);
  const [wordFilter, setWordFilter] = useState([]);
  const [search, setSearch] = useState("");

  const wordProvider = new WordProvider();
  useEffect(() => {
    let datas =wordProvider.getword()
    
    setWord(datas)
      
  }, [])
  var word_counter = word.length
  console.log(word_counter)


  function remove(word) {
    let rep = window.confirm(
      `Etes-vous sur de vouloir supprimer le mot`
    );
    if (rep) {
     wordProvider.remove(word);
      let datas =wordProvider.getword();
      setWord(datas);
    }
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Gestion des mots</h1>
            <hr />
          </Col>
        </Row>

        <Row>

          <Col md={12}>
            <div>
              <Button as={Link} to="/AddWordPage">
                Ajouter un mot
              </Button>
            </div>

            <Table className="table-t" striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Mots</th>
                  <br></br>
                  <th>Modifier</th>
                  <th>Supprimer</th>
                </tr>
              </thead>

              <tbody>
                {word
                  .map((word, indice) => (
                    <tr key={"word-" + word.id}>
                      <td>{word.mots}</td>
                      <td
                        id="output-wordpage"
                        
                      ></td>

                      <td>
                        <Button
                          as={Link}
                          to={"/EditWordPage/:id" + word.id}
                          variant="success"
                        >
                          Modifier
                        </Button>
                      </td>
                      <td>
                        <Button variant="danger" onClick={() => remove(word)}>
                          Supprimer
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}
//{displayword}
