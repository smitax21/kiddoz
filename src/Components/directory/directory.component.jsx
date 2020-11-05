import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();
            this.state = {
                sections : [
                    {
                      title: 'GIRLS WEAR',
                      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/614faj6bWzL._UX522_.jpg',
                      id: 1,
                      linkUrl: 'girlswear',
                      size: 'medium'
                    },
                    {
                      title: 'BOYS WEAR',
                      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61D1gSc-NoL._UX679_.jpg',
                      id: 2,
                      linkUrl: 'boyswear',
                      size: 'medium'
                    },
                    {
                      title: 'TODDLER',
                      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51RSrbZ32FL._SY450_.jpg',
                      id: 3,
                      linkUrl: 'toddler',
                      size: 'medium'
                    },
                    {
                      title: 'GIRLS FOOTWEAR',
                      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51AaSlzx%2B7L._UY575_.jpg',
                      id: 4,
                      linkUrl: 'girlsFootWear',
                      size: 'medium'
                    },
                    {
                      title: 'BOYS FOOTWEAR',
                      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61ep-uBiE3L._UX575_.jpg',
                      id: 5,
                      linkUrl: 'boysFootWear',
                      size: 'medium'
                    },
                    {
                        title: 'TOYS',
                        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91uParqfg8L._SX569_.jpg',
                        id: 6,
                        linkUrl: 'toys',
                        size: 'medium'
                      }]
                    }
                }

    render() {
        return (
        <div className='directory-menu'>
            {
                this.state.sections.map(({id, ...otherSectionsProp }) => (
                    <MenuItem key={id} {...otherSectionsProp} />
                ) )
            }
        </div>
        )
    }
}

export default Directory;