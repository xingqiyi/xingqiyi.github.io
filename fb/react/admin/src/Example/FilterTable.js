
import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.onCheckChange = this.onCheckChange.bind(this);
    }
    onInputChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }
    onCheckChange(e) {
        this.props.onFilterCheckChange(e.target.checked);
    }

    render() {
        return (
            <div>
                <div>
                    <input value={this.props.filterText} onChange={this.onInputChange} />
                </div>
                <div>
                    <input type='checkbox' onChange={this.onCheckChange} />
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

    render() {

        let rows = [];
        let cate = '';
        let preCate = '';



        this.props.products.forEach((item) => {

            if (item.name.indexOf(this.props.filterText) < 0) {
                return;
            }
            if (this.props.filterCheck && !item.stocked) {
                return;
            }

            cate = item.category;
            if (cate !== preCate) {
                rows.push(
                    <ProductCategoryRow category={item.category} key={item.category}></ProductCategoryRow>
                )
            }
            preCate = cate;

            rows.push(
                <ProductRow row={item} key={item.name}></ProductRow>
            );

        })

        return (
            <table style={{ margin: 'auto' }}>
                <thead>
                    <tr>
                        <th>Name</th><th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    {rows}
                </tbody>
            </table>
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


    constructor(props) {
        super(props);

        this.onFilterTextChangeHandler = this.onFilterTextChangeHandler.bind(this);
        this.onFilterCheckChangeHandler = this.onFilterCheckChangeHandler.bind(this);

        this.state = {
            filterText: '',
            filterCheck: false
        }
    }


    onFilterTextChangeHandler(inputText) {
        this.setState({
            filterText: inputText
        });
    }
    onFilterCheckChangeHandler(check) {
        this.setState({
            filterCheck: check
        });
    }
    render() {
        return (
            <div>
                <SearchBar
                    onFilterTextChange={this.onFilterTextChangeHandler}
                    onFilterCheckChange={this.onFilterCheckChangeHandler}
                />
                <ProductTable
                    products={PRODUCTS}
                    filterText={this.state.filterText}
                    filterCheck={this.state.filterCheck}
                />
            </div>

        )
    }

}


export default FilterableProductTable;