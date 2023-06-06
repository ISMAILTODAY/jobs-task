
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowCard = ({show}) => {
    return (
       <div className='col-4 mt-5'>
         <Card className='w-full'>
        <Card.Img variant="top" src={show.show.image.medium}  />
        <Card.Body>
         <div  className='d-flex justify-content-between'>
         <Card.Title>{show.show.name}</Card.Title>
          <p>{show.show.averageRuntime} minutes</p>
         </div>
         <div className='d-flex justify-content-center mt-5' >
        <Link to={`/details/${show.show.id}`}> <Button variant="primary">More Details</Button></Link>
         </div>
        </Card.Body>
      </Card>

       </div>
    );
};

export default ShowCard;