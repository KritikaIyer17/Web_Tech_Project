
import { Button} from 'react-bootstrap';

function FoodCourt() {
    return (
      <div className="App">
        <h1> Welcome to Food Court </h1>  
        <>
  <Button href="#">YOUR ORDERS</Button> 
  <Button type="submit">PiR CUBE MENU</Button>{' '}
  <Button as="input" type="button" value="13TH FLOOR MENU" />{' '}
  <Button as="input" type="submit" value="VARIETIES" />{' '}
  <Button as="input" type="reset" value="SPECIALS" />
</>     
      </div>


         
    );
  }
  
  export default FoodCourt;

 