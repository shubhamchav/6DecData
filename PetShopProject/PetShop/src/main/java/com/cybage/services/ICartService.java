package com.cybage.services;

import java.util.List;

import com.cybage.entities.CartItem;

public interface ICartService {
		
	public CartItem addToCartList(int id, String userEmail);

	public List<CartItem> getCartList(String userEmail);
	
	public void removeCartItem(int id,String userEmail);
	
	public void clearCartList(String userEmail);
}
