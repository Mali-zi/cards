import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

type Props = {
  title: string,
  text: string,
  buttonHref: string,
  children?: React.ReactNode
};

export default function BasicCard({children, ...props}: Props) {
  return(
    <Card style={{ width: '18rem' }} className='cardStyle'>
        {children}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant="primary" href={props.buttonHref}>Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}