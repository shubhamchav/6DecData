package com.cybage.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cybage.daos.PetFoodRepository;
import com.cybage.entities.PetFood;
import com.cybage.exceptions.PetFoodNotFoundException;

@Service
public class PetFoodServiceImpl implements IPetFoodService {

	@Autowired
	PetFoodRepository petFoodRepository;
	
	@Autowired
	IDiskStorageService diskstorageService;

	@Override
	public void addPetFood(MultipartFile foodImage, String foodName, String foodCategory, double foodPrice,
			int foodQuantity) {

		PetFood petFood = new PetFood();
		
		petFood.setFoodImage(diskstorageService.store(foodImage));
		petFood.setFoodName(foodName);
		petFood.setFoodCategory(foodCategory);
		petFood.setFoodPrice(foodPrice);
		petFood.setFoodQuantity(foodQuantity);

		petFoodRepository.save(petFood);

	}

	@Override
	public void updatePetFood(int foodId, MultipartFile foodImage, String foodName, String foodCategory, double foodPrice,
			int foodQuantity) {
		PetFood petFoodToBeUpdated = petFoodRepository.findById(foodId)
				.orElseThrow(() -> new PetFoodNotFoundException("Pet Food does not exist for id" + foodId));
		
		petFoodToBeUpdated.setFoodImage(diskstorageService.store(foodImage));
		petFoodToBeUpdated.setFoodName(foodName);
		petFoodToBeUpdated.setFoodCategory(foodCategory);
		petFoodToBeUpdated.setFoodPrice(foodPrice);
		petFoodToBeUpdated.setFoodQuantity(foodQuantity);

		petFoodRepository.save(petFoodToBeUpdated);

	}

	@Override
	public void deletePetFood(int foodId) {
		petFoodRepository.deleteById(foodId);
	}

	@Override
	public List<PetFood> getAllFood() {
		return petFoodRepository.findAll();
	}

	@Override
	public PetFood findByFoodName(String foodName) {
		return petFoodRepository.findByFoodName(foodName);
	}

	@Override
	public PetFood findByFoodId(int foodId) {
		return petFoodRepository.findByFoodId(foodId);
	}

	@Override
	public List<PetFood> findByFoodCategory(String foodCategory) {
		return petFoodRepository.findByFoodCategory(foodCategory);
	}

}
