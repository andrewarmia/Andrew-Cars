import HomePage from "./HomePage"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-elastic-carousel'

import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const CARDAPIS = () => {
   var andrew = ["a", "b", "c", "d", "e", "f"];
   const Points = [
    { width: 1, itemsToShow: 1 },
    { width: 300, itemsToShow: 4, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]
    return (
        <div>
            <Container>
                <h2>Actions</h2>
                <Row>
                    <Carousel breakPoints={Points}>
                        {
                            andrew.map((andrew111) => {
                                return (


                                    <Card>
                                        <Card.Img variant="top" src="./assets/images/gtrr34.png" />
                                        <Card.Body>
                                            <Card.Title>{andrew111}</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>

                                )
                            })
                        }
                    </Carousel>
                </Row>
            </Container>

        </div>
    )
}
export default CARDAPIS
