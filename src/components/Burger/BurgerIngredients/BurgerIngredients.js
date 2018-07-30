import React, {Component} from 'react'
import classes from './BurgerIngredients.css'
import PropTypes from 'prop-types'

class BurgerIngredient extends Component {
    render (){
        let ingradient = null

    switch (this.props.type) {
        case ('bread-bottom'):
            ingradient = <div className={classes.BreadBottom} />
            break

        case ('bread-top'):
            ingradient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1} />
                    <div className={classes.Seeds2} />
                </div>
            )
            break

        case ('meat'):
            ingradient = <div className={classes.Meat} />
            break

        case ('cheese'):
            ingradient = <div className={classes.Cheese} />
            break;

        case ('salad'):
            ingradient = <div className={classes.Salad} />
            break

        case ('bacon'):
            ingradient = <div className={classes.Bacon} />
            break

        default: ingradient = null
    }

    return ingradient
    }

}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}



export default BurgerIngredient