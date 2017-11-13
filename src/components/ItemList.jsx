import React from 'react';

class ItemList extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            items: [{purchased: false, name: 'JASON', price: 'too expensive'}]
        }
    }
    
    render() {
        return (
            <div>

                <ul>
                    {this.state.items.map((item, i) => {
                        return (
                            <Item myItem={item}/>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default ItemList;