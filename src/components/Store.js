import React from 'react';
import dataImageShop from '../img/dataImageShop'
import CardView from './CardsView';
import IconSwitch from './IconSwitch';
import ListView from './ListView';


class Store extends React.Component {
    state = {
        switch: 'view_module'
    };

    constructor(props) {
        super(props);
        this.handlerSwitch = this.handlerSwitch.bind(this);
        this.viewCardOrList = this.viewCardOrList.bind(this);
        this.dataImage = dataImageShop;
    }

    handlerSwitch() {
        const view = this.state.switch == 'view_list' ? 'view_module' : 'view_list';
        this.setState((state) => state.switch = view);
    }

    viewCardOrList() {
        if (this.state.switch === 'view_list') {
            return <ListView items={this.dataImage} />
        } else {
            return <CardView cards={this.dataImage} />
        }
    }

    render() {
        return (
            <>
                <IconSwitch
                    icon={this.state.switch}
                    onSwitch={this.handlerSwitch}
                />
                {this.viewCardOrList()}
            </>
        );
    }

}

export default Store;