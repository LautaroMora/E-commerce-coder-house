/*
    const existsCart = () => {
        return ( cartList.length > 0 )
    }

    const totalPrice = () => {
        return cartList.reduce( (acc, item) => { return acc + (item.cart * item.precio) }, 0)
    }


    const calcItemCant = () =>{
        let cant = cartList.map (item => item.cant);
        return cant.reduce(((previousValue, currentValue)=>previousValue + currentValue),0);
    } 


    
    const cartProduct = (id) => {
        return cartList.find( itemCart => itemCart.id === id ).cart
    }

    const setQuantity = ( id, quantity ) => {
        cartList[ findIndex(id) ].cart = quantity;
        setCartList([...cartList]);
    }




    const isInCart = ( id ) => {
        let isIn = false
        cartList.forEach( cartItem => (cartItem.id === id) && (isIn = true) );
        return isIn
    }

    const findIndex = (id) =>{
        return cartList.findIndex( itemCart => itemCart.idProduct === id);
    }


    const updateItem = ( id, quantity ) => {
        cartList[ findIndex(id) ].cart += quantity;
        setCartList([...cartList]);
    }



    const addItem = (product,cant,id)=>{
        if( isInCart(id) ){
            updateItem(id, cant)
        }
        setCartList([...cartList, product]);
    }
    
    //----------------------------------------

    const removeItem = (id) =>{
        setCartList(cartList.filter(item=>item.id !== id))

    }

    const clear = () =>{
        setCartList ([])
    }