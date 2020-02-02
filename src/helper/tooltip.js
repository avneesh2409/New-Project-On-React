import React from 'react'
import '../static/tooltip.module.css'

export const TooltipRight = (props) => {
    return (
        <div className='title'>
            {props.children}
            <div class="right">
                <h3>Lorem Ipsum</h3>
                <p>Dolor sit amet, consectetur adipiscing elit.</p>
                <i></i>

            </div>
        </div>

    )
}

export const TooltipTop = (props) => {
    return (
        <div className='title1'>
            {props.children}
            <div class="top">
                <h3>Lorem Ipsum</h3>
                <p>Dolor sit amet, consectetur adipiscing elit.</p>
                <i></i>

            </div>
        </div>

    )
}


export const TooltipBottom = (props) => {
    return (
        <div className='title2'>
            {props.children}
            <div class="bottom">
                <h3>Lorem Ipsum</h3>
                <p>Dolor sit amet, consectetur adipiscing elit.</p>
                <i></i>

            </div>
        </div>

    )
}


export const TooltipLeft = (props) => {
    return (
        <div className='title3'>
            {props.children}
            <div class="left">
                <h3>Lorem Ipsum</h3>
                <p>Dolor sit amet, consectetur adipiscing elit.</p>
                <i></i>

            </div>
        </div>

    )
}