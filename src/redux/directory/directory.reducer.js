const INITIAL_STATE = {
    sections : [
        {
          title: 'GIRLS WEAR',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/614faj6bWzL._UX522_.jpg',
          id: 1,
          linkUrl: 'shop/girlswear',
          size: 'medium'
        },
        {
          title: 'BOYS WEAR',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61D1gSc-NoL._UX679_.jpg',
          id: 10,
          linkUrl: 'shop/boyswear',
          size: 'medium'
        },
        {
          title: 'TODDLER',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51RSrbZ32FL._SY450_.jpg',
          id: 18,
          linkUrl: 'shop/toddler',
          size: 'medium'
        },
        {
          title: 'GIRLS FOOTWEAR',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51AaSlzx%2B7L._UY575_.jpg',
          id: 23,
          linkUrl: 'shop/girlsFootwear',
          size: 'medium'
        },
        {
          title: 'BOYS FOOTWEAR',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61ep-uBiE3L._UX575_.jpg',
          id: 30,
          linkUrl: 'shop/boysFootwear',
          size: 'medium'
        },
        {
          title: 'TOYS',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91uParqfg8L._SX569_.jpg',
          id: 36,
          linkUrl: 'shop/toys',
          size: 'medium'  
          }]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

export default directoryReducer;