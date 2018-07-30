import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BurgerIngredients/BuldControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OriderSummary'
import axios from '../../axios-order'
import Spinner from '../../components/UI/Spinner/Spinner'

const INGR_PRICE = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.6,
    meat: 1.3
}
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        total: 0.0,
        purchasing: false,
        laoding: false
    }

    purchaseHandler = () => {
        return this.setState({ purchasing: true })
    }

    purchaseCancelHandler = () => {
        return this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        // alert('You continued!')

        this.setState({laoding: true})

        const order = {
            ingradients: this.state.ingredients,
            price: this.state.total,
            customer: {
                name: 'Дядо Мраз',
                address: {
                    street: 'Под липите 3',
                    zipCode: '0001',
                    country: 'Laplands'
                },
                email: 'dqdo.mraz@laplands.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('orders.json', order)
            .then(response => {
                console.log(response)

                this.setState({laoding: false,
                    purchasing: false})
            })
            .catch(error => {
                console.log(error);

                this.setState({laoding: false,
                    purchasing: false})
            })
    }

    addIngredientHandler = (type) => {
        if (this.state.ingredients[type] === 10) {
            return;
        }

        const newIngradients = { ...this.state.ingredients }
        newIngradients[type] = ++newIngradients[type]

        const newTotal = this.state.total + INGR_PRICE[type]

        this.setState({
            ingredients: newIngradients,
            total: newTotal
        })
    }

    removeIngredienteHandelr = (type) => {
        if (!this.state.ingredients[type]) {
            return;
        }

        const newIngradients = { ...this.state.ingredients }
        newIngradients[type] = --newIngradients[type]

        const newTotal = this.state.total - INGR_PRICE[type]

        this.setState({
            ingredients: newIngradients,
            total: newTotal
        })
    }

    render() {

        const disabledInfo = { ...this.state.ingredients }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        disabledInfo.order = this.state.total < 0.5

        console.log('this.state.total', this.state.total)
        console.log('disabledInfo.order', disabledInfo.order)

        let orderSummary = <OrderSummary ingredients={this.state.ingredients}
            modalClosed={this.purchaseCancelHandler}
            continue={this.purchaseContinueHandler}
            total={this.state.total} />

        if(this.state.laoding){
            orderSummary = <Spinner/>
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler} >
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls add={this.addIngredientHandler}
                    remove={this.removeIngredienteHandelr}
                    disabled={disabledInfo}
                    total={this.state.total}
                    purchise={this.purchaseHandler} />
            </Aux>
        )
    }

}

export default BurgerBuilder