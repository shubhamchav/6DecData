package com.cybage.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

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
public class PetCategory 
{
	@Id
	@GeneratedValue
	private int categoryId;
	@NotBlank(message = "Pet category should not be null!")
	private String categoryName;
	private String categoryImage;
	
	@OneToMany(mappedBy = "petCategory",cascade = CascadeType.ALL)
	@JsonManagedReference(value = "petCategoryJson")
	@JsonIgnore
	private List<Pet> pets;
}

