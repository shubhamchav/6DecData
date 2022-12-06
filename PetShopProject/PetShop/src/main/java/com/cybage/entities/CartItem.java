package com.cybage.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table
public class CartItem {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int cartItemId;
	
	@ManyToMany(mappedBy = "cartItem",cascade = CascadeType.ALL)
	@JsonManagedReference(value = "petJson")
	@JsonIgnore
	private List<Pet> pets;
	
	@ManyToMany(mappedBy = "cartItem",cascade = CascadeType.ALL)
	@JsonManagedReference(value = "petFoodJson")
	@JsonIgnore
	private List<PetFood> petFoods;
	
	@ManyToMany(mappedBy = "cartItem",cascade = CascadeType.ALL)
	@JsonManagedReference(value = "petAccessoriesJson")
	@JsonIgnore
	private List<PetAccessories> petAccessories;
	
	@ManyToOne
	@JoinColumn(name="user_email")
	@JsonBackReference(value = "userJson")
	private User user;

	@ManyToOne
	@JoinColumn(name = "order_id")
	@JsonBackReference(value = "orderJson")
	private Order order;
	
}
