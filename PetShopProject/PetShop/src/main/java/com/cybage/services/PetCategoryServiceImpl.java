package com.cybage.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cybage.daos.PetCategoryRepository;
import com.cybage.entities.PetCategory;
import com.cybage.exceptions.PetCateogryNotFoundException;

@Service
public class PetCategoryServiceImpl implements IPetCategoryService {
	@Autowired
	PetCategoryRepository petCategoryRepository;
	
	@Autowired
	IDiskStorageService diskstorageService;

	@Override
	public void addPetCategory(MultipartFile categoryImage, String categoryName) {
		
		PetCategory petCategory = new PetCategory();
		
		petCategory.setCategoryImage(diskstorageService.store(categoryImage));
		petCategory.setCategoryName(categoryName);
		petCategoryRepository.save(petCategory);
	}

	@Override
	public PetCategory updatePetCategory(MultipartFile categoryImage, int categoryId, String categoryName) {
		PetCategory petCategoryToBeUpdated = petCategoryRepository.findById(categoryId).orElseThrow(
				() -> new PetCateogryNotFoundException("Pet category does not exist for category id " + categoryId));
	
		petCategoryToBeUpdated.setCategoryImage(diskstorageService.store(categoryImage));
		petCategoryToBeUpdated.setCategoryName(categoryName);
		return petCategoryRepository.save(petCategoryToBeUpdated);
	}

	@Override
	public void deletePetCategory(int categoryId) {
		petCategoryRepository.deleteById(categoryId);
	}

	@Override
	public List<PetCategory> getAllPetCategory() {
		return petCategoryRepository.findAll();
	}

	@Override
	public PetCategory findByCategoryId(int categoryId) {
		return petCategoryRepository.findById(categoryId).orElseThrow(
				() -> new PetCateogryNotFoundException("Pet category does not exist for category id " + categoryId));
	}

	@Override
	public PetCategory findByCategoryName(String categoryName) {
		return petCategoryRepository.findByCategoryName(categoryName);
	}

}
