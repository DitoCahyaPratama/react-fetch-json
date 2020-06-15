import React, { Component } from 'react'
import { Row, Select } from 'antd';
import ItemCakes from './ItemCakes';
import data from './data/data.json';

const { Option } = Select;

class ItemCake extends Component {
    render() {
        const newData = data.map((dt) => {
            console.log(dt);
            return(
                <ItemCakes key={dt.id} name={dt.name} type={dt.type} topping={dt.topping}/>
            )
        });
        return (
            <div>
                <div className="p-4">
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                </div>
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        {newData}
                    </Row>
                </div>
            </div>
        )
    }
}

export default ItemCake