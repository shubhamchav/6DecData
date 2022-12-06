package com.cybage.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybage.daos.PetRepository;
import com.cybage.dtos.PetDto;
import com.cybage.entities.Pet;
import com.cybage.entities.PetCategory;
import com.cybage.exceptions.PetNotFoundException;

@Service
public class PetServiceImpl implements IPetService {

	@Autowired
	PetRepository petRepository;

	@Autowired
	PetDto petDto;
	
	@Autowired
	IDiskStorageService diskstorageService;

	@Override
	public Pet addPet(PetDto petDto) {
		List<Pet> petsList = new ArrayList<>();
		Pet pet = new Pet();
		pet.setPetId(petDto.getPetId());
		pet.setPetName(petDto.getPetName());
		pet.setPetDescription(petDto.getPetDescription());
		pet.setPetPrice(petDto.getPetPrice());
		pet.setGender(petDto.getGender());
		pet.setPetImage(diskstorageService.store(petDto.getPetImage()));
		
		petsList.add(pet);

		PetCategory petCategory = new PetCategory();

		petCategory.setCategoryId(petDto.getCategoryId());

		pet.setPetCategory(petCategory);
		petCategory.setPets(petsList);

		return petRepository.save(pet);
	}

	@Override
	public Pet updatePet(int petId, PetDto petDto) {
		Pet petToBeUpdated = petRepository.findByPetId(petId);

		petToBeUpdated.setPetId(petDto.getPetId());
		petToBeUpdated.setPetName(petDto.getPetName());
		petToBeUpdated.setPetDescription(petDto.getPetDescription());
		petToBeUpdated.setPetPrice(petDto.getPetPrice());
		petToBeUpdated.setGender(petDto.getGender());
		petToBeUpdated.setPetImage(diskstorageService.store(petDto.getPetImage()));

		return petRepository.save(petToBeUpdated);
	}

	@Override
	public void deletePet(int petId) {
		petRepository.deleteById(petId);
	}

	@Override
	public List<Pet> getAllPets() {
		return petRepository.findAll();
	}

	@Override
	public Pet findByPetId(int petId) {
		return petRepository.findById(petId)
				.orElseThrow(() -> new PetNotFoundException("Pet does not exist for id " + petId));

	}

	@Override
	public Pet findByPetName(String petName) {
		return petRepository.findByPetName(petName);
	}

}
