import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Table, Label, Image, Menu } from 'semantic-ui-react';

const ProductCart = (props) => {

    return (<Table.Row>
            {console.log(props, "from prodcutcart")}
            <Table.Cell>{props.product.id}</Table.Cell>
            <Table.Cell><Image  src={props.product.image} size="small" rounded /></Table.Cell>
            <Table.Cell>{props.product.title}</Table.Cell>
            <Table.Cell>{props.product.price}</Table.Cell>
            </Table.Row>
  );
}


// class CartPage extends React.Component{
//     constructor(props){
//         super(props);

//         this.state = {
//             id: props.cartItem,
//             product: [{id:1, title: "HElo WOrld", image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}],
//             grandTotal: 0,
//             itemCount: 0
//         }
//     }

//     componentDidMount(){
//         let filteredID = this.state.id;
//         axios.get("https://fakestoreapi.com/products/category/men's%20clothing")
//         .then((data) => {
//             //console.log(data.data);
//             let tempData = data.data;
//             let proData =[];
//             if(localStorage.getItem("cart")){
//                 filteredID = JSON.parse(localStorage.getItem("cart"));
//             }
//             let total = 0;
//             let count = 0;
//             if(filteredID !== undefined)
//                 filteredID.forEach(id => {
//                     proData.push(tempData[id-1]);
//                     total += tempData[id-1].price;
//                     count++;
//                 });

//             this.setState({
//                 product: proData,
//                 id: filteredID,
//                 grandTotal: total,
//                 itemCount : count,
//             })
//         }
//         )
//     }

//     render(){
//         return (
//             <Container>
//             <Table celled>
//                 <Table.Header>
//                     <Table.Row>
//                         <Table.HeaderCell>Id</Table.HeaderCell>
//                         <Table.HeaderCell>Picture</Table.HeaderCell>
//                         <Table.HeaderCell>Name</Table.HeaderCell>
//                         <Table.HeaderCell>Price</Table.HeaderCell>
//                     </Table.Row>
//                 </Table.Header>

//                 <Table.Body>
//                     {/* {this.productList()} */}
//                     {this.state.product.map(data => (
//                         <ProductCart product={data}/>
//                     ))}
                    
//                 </Table.Body>

//                 <Table.Footer>
//                     <Table.Row>
//                         <Table.HeaderCell colSpan='4'>
//                         <Menu floated="right" >
//                             <Menu.Item>
//                             <Table.Cell>Grand Total: {this.state.grandTotal}</Table.Cell>
//                             </Menu.Item>
//                         </Menu>
//                         </Table.HeaderCell>
//                     </Table.Row>
//                 </Table.Footer>
//             </Table>
//             </Container>

//         );
//     }
// }

const CartPage = (props) => {
    const [id, setId] = useState(props.cartItem);
    const [product, setProduct] = useState([]);
    const [grandTotal, setGrandTotal] = useState(0);

    useEffect(() => {
        let filteredID = id;
        axios.get("https://fakestoreapi.com/products/category/men's%20clothing")
        .then((data) => {
            //console.log(data.data);
            let tempData = data.data;
            let proData =[];
            if(localStorage.getItem("cart")){
                filteredID = JSON.parse(localStorage.getItem("cart"));
            }
            let total = 0;
            let count = 0;
            if(filteredID !== undefined)
                filteredID.forEach(id => {
                    proData.push(tempData[id-1]);
                    total += tempData[id-1].price;
                    count++;
                });
                
            setProduct(proData);
            setId(filteredID);
            setGrandTotal(total);
            
        }
        )
    }, [])

    return (
        <Container>
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.HeaderCell>Picture</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {/* {this.productList()} */}
                {product.map(data => (
                    <ProductCart product={data}/>
                ))}
                
            </Table.Body>

            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='4'>
                    <Menu floated="right" >
                        <Menu.Item>
                        <Table.Cell>Grand Total: {grandTotal}</Table.Cell>
                        </Menu.Item>
                    </Menu>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
        </Container>

    );
}

export default CartPage;