import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const Product = (props) => (
    // <>
    // {console.log(props, "HElow")}
    // {console.log(props.product.category), "title"}
    // </>
  <Card>
    <Image src={props.product.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.product.title}</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>
        {props.product.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='dollar sign' />
        {props.product.price}
      </a>
      &emsp;
      <Button onClick={() => props.addtoCart(props.product.id)}>
          <Icon name='cart' />
          Add to Cart
      </Button>
    </Card.Content>
  </Card>
)

export default Product;