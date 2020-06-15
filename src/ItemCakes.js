import React from 'react'
import { Card, Col } from 'antd'

function ItemCakes(props) {
    const getMappedTopping = props.topping.map((dt) => {
        return(
            <li key={dt.id}>{dt.type}</li>
        )
    })
    return (
        <Col span={8}>
            <Card title={props.name} bordered={false}>
                <p>Type : {props.type}</p>
                <h4>Topping : </h4>
                <ul>
                    {getMappedTopping}
                </ul>
            </Card>
        </Col>
    )
}

export default ItemCakes;