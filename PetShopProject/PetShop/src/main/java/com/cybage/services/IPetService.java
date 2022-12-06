package com.cybage.services;

import java.util.List;

import com.cybage.dtos.PetDto;
import com.cybage.entities.Pet;

public interface IPetService {
	// Method to add pet details
	public Pet addPet(PetDto petDto);

	public Pet updatePet(int petId, PetDto petDto);

	// Method to delete pet details
	public void deletePet(int petId);

	// Method to get all pets details
	public List<Pet> getAllPets();

	// Method to find pet by id
	public Pet findByPetId(int petId);

	// Method to find pet by name
	public Pet findByPetName(String petName);


}
