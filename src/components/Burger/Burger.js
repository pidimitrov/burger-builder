import React from 'react'
import classes from './Burger.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const burger = (props) => {
    const transfIngrs = Object.keys(props.ingredients)
        .map(key => {
            return [...Array(props.ingredients[key])].map((_, index) => {
                return <BurgerIngredients key={key + index} type={key}/>
            })
        }).reduce((arr, element) => {
            return arr.concat(element)
        }, [])

    if(!transfIngrs.length){
        transfIngrs.push(<p key="1">Please choose ingredients</p>)
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            {transfIngrs}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    )
}

export default burger