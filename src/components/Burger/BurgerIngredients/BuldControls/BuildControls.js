import React from 'react'
import BuidControl from './BuldControl/BuildControl'
import classes from './BuildControls.css'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Total price: <strong>{props.total.toFixed(2)}</strong></p>

            {controls.map((control, index) => {
                return <BuidControl
                    label={control.label}
                    key={index}
                    add={() => props.add(control.type)}
                    remove={() => props.remove(control.type)}
                    disabled={props.disabled[control.type]}/>
            })}

            <button className={classes.OrderButton}
                disabled={props.disabled.order}
                onClick={props.purchise}>Order now!</button>
        </div>
    )
}

export default buildControls
