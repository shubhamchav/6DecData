package com.cybage.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cybage.entities.CartItem;
import com.cybage.services.CartServiceImpl;

@RestController
@CrossOrigin
@RequestMapping("/cart")
public class CartController {
	@Autowired
	CartServiceImpl cartServiceImpl;
	
	@PostMapping("/addToCart/{id}/{userEmail}")
	public ResponseEntity<CartItem> addToCartList(@PathVariable int id, @PathVariable String userEmail)
	{
		return new ResponseEntity<CartItem>(cartServiceImpl.addToCartList(id, userEmail), HttpStatus.CREATED);
	}

	@GetMapping("/getCartList/{userEmail}")
	public ResponseEntity<List<CartItem>> getCartList(@PathVariable String userEmail)
	{
		return new ResponseEntity<List<CartItem>>(cartServiceImpl.getCartList(userEmail), HttpStatus.OK);
	}
	
	@DeleteMapping("/removeCartItem/{id}/{userEmail}")
	public ResponseEntity<String> removeCartItem(@PathVariable int id, @PathVariable String userEmail)
	{
		cartServiceImpl.removeCartItem(id, userEmail);
		return new ResponseEntity<String>("item removed from cart", HttpStatus.OK);
	}
	
	@DeleteMapping("/clearCartList/{userEmail}")
	public ResponseEntity<String> clearCartList(@PathVariable String userEmail)
	{
		cartServiceImpl.clearCartList(userEmail);
		return new ResponseEntity<String>("cart list cleared", HttpStatus.OK);
	}
}
