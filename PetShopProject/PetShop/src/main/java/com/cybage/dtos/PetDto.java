package com.cybage.dtos;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.cybage.entities.Gender;
import com.cybage.entities.Pet;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PetDto 
{
	private int categoryId;
	private int petId;
	private String petName;
	private Gender gender;
	private double petPrice;
	private String petDescription;
	private MultipartFile petImage;
	
	public PetDto toPetDto(Pet pet)
	{
		PetDto petDto = new PetDto();
		petDto.setPetId(pet.getPetId());
		petDto.setPetName(pet.getPetName());
		petDto.setGender(pet.getGender());
		petDto.setPetPrice(pet.getPetPrice());
		petDto.setPetDescription(pet.getPetDescription());
		petDto.setCategoryId(pet.getPetCategory().getCategoryId());
		return petDto;
	}

}
