
import React, { Component } from 'react';

var filterText = '';
class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filterText: filterText
        }
    }

    render() {
        return (
            <div>
                <div>
                    <input value={this.state.filterText} />
                </div>
                <div>
                    <input type='checkbox' />
                    <span>only show products in stock</span>
                </div>
            </div>
        )
    }
}

class ProductCategoryRow extends Component {
    render() {
        return (
            <tr>
                <td colSpan='2' style={{ fontWeight: 'bold' }}>{this.props.category}</td>
            </tr >
        )
    }
}

class ProductRow extends Component {

    render() {
        return (
            <tr style={this.props.row.stocked ? { color: 'green' } : { color: 'red' }}>
                <td>{this.props.row.name}</td>
                <td>{this.props.row.price}</td>
            </tr>
        )
    }
}

class ProductTable extends Component {

    // constructor(props) {
    // }

    render() {

        let table = [];
        let cate = '';
        let preCate = '';
        this.props.products.forEach((item) => {

            cate = item.category;
            if (cate != preCate) {
                table.push(
                    <ProductCategoryRow category={item.category}></ProductCategoryRow>
                )
            }
            preCate = cate;

            table.push(
                <ProductRow row={item}></ProductRow>
            );

        })

        return (
            <div>
                <SearchBar></SearchBar>
                <table style={{ margin: 'auto' }}>

                    <th>Name</th><th>Price</th>

                    {/* <ProductCategoryRow category='asfd'></ProductCategoryRow> */}
                    {
                        table
                    }

                </table>
            </div>

        )
    }

}

let PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

class FilterableProductTable extends Component {

    // constructor(props) {
    // }

    render() {
        return (
            <ProductTable products={PRODUCTS} ></ ProductTable>
        )
    }

}

let styles = {

}

export default FilterableProductTable;