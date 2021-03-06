import React from 'react'
import { Card} from 'react-bootstrap';

const MovieCard = ({list}) => {
  
  return (
    <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={list.posterUrl} />
  <Card.Body>
    <Card.Title>{list.title}</Card.Title>
    <Card.Text>
      Description: {list.description}
    </Card.Text>
    <Card.Text>
      Rate: {list.rate}
    </Card.Text>
    <iframe width="560" height="315" src={list.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </Card.Body>
  
  </Card>
    </div>
    
  );
};

export default MovieCard;