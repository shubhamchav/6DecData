package com.cybage.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cybage.entities.CartItem;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Integer> {
	@Query(value = "select * from cart_item where user_email=?1" , nativeQuery = true)
	public List<CartItem> getCartList(String userEmail);
}
