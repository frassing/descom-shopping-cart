	useEffect(() => {
		console.log("ativo no effect")
	}, [estado que está observando])

    payload: {assim que coloca na action}


### Estado Global
```
{
    type: null,
    activeProduct: [],
    cartItems: [],

    mode: true | false,

}
```
-----
Products page

botão add to cart -> get cartItems(localStorage) -> get active product -> add product to cart -> save again in localStorage ->  open modal added to cart

modal open -> show active product -> botões 'continuar' e 'finalizar' 
    botão continuar -> open cart page -> get cartItems
    botão finalizar -> close modal


-----
Cart page

get cart()

productInCart -> botões + e -, qtd, subtotal, removeItem
botão + -> increment qtd by 1 -> update qtd -> update subtotal
botão - -> decrement qtd by 1 -> update qtd -> update subtotal
subtotal -> qtd * productPrice
removeItem -> remove from cartItems(localStorage) -> update subtotal

total -> sum subtotals

----

Services
get cartItems
addItemToCart
removeItemFromCart

Actions
AddToCartStartAction
    type: start add to cart

AddToCartProcessAction(dispatch, product)
    dispatch(AddToCart_StartAction());
    get CartItems();
    dispatch(GetActiveItem_Action(product));
    addItemToCart(product);
    dispatch(AddToCart_CompleteAction(product));
    
AddToCartCompleteOpenModalAction(prod)
    type: added to cart,
    mode: true

GetActiveItemAction(activeProd)
    type: get active product
    payload: activeProd