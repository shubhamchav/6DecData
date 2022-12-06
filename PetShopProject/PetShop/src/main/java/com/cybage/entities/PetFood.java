package com.cybage.entities;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table
public class PetFood 
{
	@Id
	@GeneratedValue
	private int foodId;
	@NotBlank(message = "Food name cant be empty!")
	private String foodName;
	@NotBlank(message = "Food category cant be empty!")
	private String foodCategory;
	@Positive(message = "Food price should be greated than 0")
	private double foodPrice;
	private String foodImage;
	@Positive(message = "Food quantity should be greated than 0")
	private int foodQuantity;
	
	@ManyToMany
	@JoinColumn(name = "id")
	@JsonBackReference(value = "petFoodJson")
	private List<FavouriteItem> favouriteItem;
	
	@ManyToMany
	@JoinColumn(name = "cart_item_id")
	@JsonBackReference(value = "petFoodJson")
	private List<CartItem> cartItem;
	
}
