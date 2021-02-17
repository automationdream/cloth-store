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
                    imageurl: 'https://cdn.pixabay.com/photo/2016/11/29/03/15/back-1867009_960_720.jpg',
                    id: 1,
                    linkurl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageurl: 'https://cdn.pixabay.com/photo/2016/11/29/01/34/fashion-1866572_960_720.jpg',
                    id: 2,
                    linkurl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageurl: 'https://media.istockphoto.com/photos/men-wearing-sneakers-picture-id695460988?b=1&k=6&m=695460988&s=170667a&w=0&h=eL7xdtkgFMvcSX8OmYTAnWNlI9dGFBOTzFY4uZpCjdc=',
                    id: 3,
                    linkurl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageurl: 'https://cdn.pixabay.com/photo/2018/01/15/07/52/portrait-3083402_960_720.jpg',
                    size: 'large',
                    id: 4,
                    linkurl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageurl: 'https://cdn.pixabay.com/photo/2016/01/19/18/04/man-1150058_960_720.jpg',
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
                {this.state.sections.map(({title, id, imageurl}) => (
                    <MenuItem key={id} title={title} imageURL={imageurl} subtitle='shop now'/>))}
            </div>
        )

    }

}

export default Directory;
