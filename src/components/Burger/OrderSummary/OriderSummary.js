import React, {Component} from 'react'
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    componentWillUpdate (){
        console.log('OrderSymmary.componentWillUpdate();')
    }

    // shouldComponentUpdate 
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients).map((key) => {
            return (
                <li key={key}>
                    <span style={{textTransform: 'capitalize'}}>{key}</span>: {this.props.ingredients[key]} times.
                </li>
            ) 
        })
        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
    
                 <p>Total price: <strong>{this.props.total.toFixed(2)}</strong></p>
                 
                <p>Continue to checkout?</p>
    
                <Button btnType="Danger"
                    clicked={this.props.modalClosed}>CANCEL</Button>
                <Button btnType="Success"
                    clicked={this.props.continue}>CONTINUE</Button>
            </Aux>    
        )
    }

    
}

export default OrderSummary