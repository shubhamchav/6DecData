package com.cybage.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table
public class Pet
{
	@Id
	@GeneratedValue
	private int petId;
	
	@NotBlank(message = "Pet name cant be empty!")
	private String petName;
	
	@Enumerated(EnumType.STRING)
	private Gender gender;
	
	@Min(value = 1000)
    @Max(value = 5000)
	private double petPrice;
	
	@Size(max = 100)
	@NotBlank(message = "Pet description cant be empty!")
	private String petDescription;
	
	
	private String petImage;
	
	@ManyToOne
	@JoinColumn(name="category_id")
	@JsonBackReference(value = "petCategoryJson")
	private PetCategory petCategory;
	
	@ManyToMany
	@JoinColumn(name = "id")
	@JsonBackReference(value = "petJson")
	private List<FavouriteItem> favouriteItem;
	
	@ManyToMany
	@JoinColumn(name = "cart_item_id")
	@JsonBackReference(value = "petJson")
	private List<CartItem> cartItem;
	
}
