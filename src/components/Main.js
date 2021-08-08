import React, { Component } from 'react';

class Main extends Component {

    render() {
        return ( <
            div id = "content" >
            <
            h1 > Add Campaign < /h1> <
            form onSubmit = {
                (event) => {
                    event.preventDefault()
                    const name = this.productName.value
                    const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
                    const quantity = window.web3.utils.toWei(this.productQuantity.value.toString(), 'Ether')
                    this.props.createProduct(name, price, quantity)
                }
            } >
            <
            div className = "form-group mr-sm-2" >
            <
            input id = "productName"
            type = "text"
            ref = {
                (input) => { this.productName = input }
            }
            className = "form-control"
            placeholder = "Name Campaign"
            required / >
            <
            /div> <
            div className = "form-group mr-sm-2" >
            <
            input id = "productPrice"
            type = "text"
            ref = {
                (input) => { this.productPrice = input }
            }
            className = "form-control"
            placeholder = "Price Campaign"
            required / >
            <
            /div> <
            div className = "form-group mr-sm-2" >
            <
            input id = "productQuantity"
            type = "text"
            ref = {
                (input) => { this.productQuantity = input }
            }
            className = "form-control"
            placeholder = "Quantity Campaign"
            required / >
            <
            /div> <
            button type = "submit"
            className = "btn btn-primary" > Add Campaign < /button> < /
            form > <
            h2 > List Campaign < /h2> <
            table className = "table" >
            <
            thead >
            <
            tr >
            <
            th scope = "col" > # < /th> <
            th scope = "col" > Name < /th> <
            th scope = "col" > Price < /th> <
            th scope = "col" > Quantity < /th> <
            th scope = "col" > Owner < /th> <
            th scope = "col" > < /th> < /
            tr > <
            /thead> <
            tbody id = "productList" > {
                this.props.products.map((product, key) => {
                    return ( <
                        tr key = { key } >
                        <
                        th scope = "row" > { product.id.toString() } < /th> <
                        td > { product.name } < /td> <
                        td > { window.web3.utils.fromWei(product.price.toString(), 'Ether') }
                        Eth < /td> <
                        td > { window.web3.utils.fromWei(product.quantity.toString(), 'Ether') } < /td> <
                        td > { product.owner } < /td> <
                        td > {!product.purchased ?
                            <
                            button
                            name = { product.id }
                            value = { product.price }
                            onClick = {
                                (event) => {
                                    this.props.purchaseProduct(event.target.name, event.target.value)
                                }
                            } >
                            Buy <
                            /button>: <
                            button
                            name = { product.id }
                            value = { product.price }
                            onClick = {
                                (event) => {
                                    this.props.purchaseProduct(event.target.name, event.target.value)
                                }
                            } >
                            Escrow <
                            /button>
                        } <
                        /td> < /
                        tr >
                    )
                })
            } <
            /tbody> < /
            table > <
            /div>
        );
    }
}

export default Main;