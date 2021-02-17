import React from "react";

import './directory.styles.scss'

import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageurl: 'https://i.ibb.co/cvpntl1/hats.png',
                    id: 1,
                    linkurl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageurl: 'https://i.ibb.co/px2tcc3/jackets.png',
                    id: 2,
                    linkurl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageurl: 'https://i.ibb.co/0jqhpnp/sneakers.png',
                    id: 3,
                    linkurl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageurl: 'https://i.ibb.co/gccdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkurl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageurl: 'https://i.ibb.co/r70vbrq/men.png',
                    size: 'large',
                    id: 5,
                    linkurl: 'shop/mens'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({title, id}) => (
                    <MenuItem key={id} title={title} subtitle='shop now'/>))}
            </div>
        )

    }

}

export default Directory;
