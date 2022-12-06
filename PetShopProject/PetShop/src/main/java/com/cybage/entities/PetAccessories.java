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
public class PetAccessories 
{
	@Id
	@GeneratedValue
	private int itemId;
	@NotBlank(message = "Pet accessory name should not be null!")
	private String itemName;
	@NotBlank(message = "Pet accessory category name should not be null!")
	private String itemCategory;
	@Positive(message = "Pet accessory price should be greated than 0")
	private double itemPrice;
	private String itemImage;
	@Positive(message = "Pet accessory quantity should be greated than 0")
	private int itemQuantity;
	
	@ManyToMany
	@JoinColumn(name = "id")
	@JsonBackReference(value = "petAccessoriesJson")
	private List<FavouriteItem> favouriteItem;
	
	@ManyToMany
	@JoinColumn(name = "cart_item_id")
	@JsonBackReference(value = "petAccessoriesJson")
	private List<CartItem> cartItem;
	
}
