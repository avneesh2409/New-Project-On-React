import React, { Component } from 'react'
import { TooltipTop, TooltipRight, TooltipBottom, TooltipLeft } from '../helper/tooltip'
import { Image } from './image'
const Background1 = require("./images/icon1.png")
const Background2 = require("./images/icon2.png")
const Background3 = require("./images/icon3.png")
const Background4 = require("./images/icon4.png")

export default class Home extends Component {
    render() {

        return (
            <div>
                <TooltipTop >
                    <Image Background={Background1} />
                </TooltipTop>
                <TooltipRight >
                    <Image Background={Background2} />
                </TooltipRight>
                <TooltipBottom >
                    <Image Background={Background3} />
                </TooltipBottom>
                <TooltipLeft>
                    <Image Background={Background4} />
                </TooltipLeft>
            </div>
        )
    }
}
