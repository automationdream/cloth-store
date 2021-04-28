const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://cdn.pixabay.com/photo/2016/12/01/19/44/man-1876017_960_720.jpg',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://cdn.pixabay.com/photo/2016/11/29/03/15/man-1867009_960_720.jpg',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'https://media.istockphoto.com/photos/men-wearing-sneakers-picture-id695460988?b=1&k=6&m=695460988&s=170667a&w=0&h=eL7xdtkgFMvcSX8OmYTAnWNlI9dGFBOTzFY4uZpCjdc=',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: 'https://cdn.pixabay.com/photo/2016/03/23/04/11/beautiful-1274064_1280.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://cdn.pixabay.com/photo/2016/01/19/18/04/man-1150058_960_720.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer;
