package com.cybage.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cybage.entities.PetCategory;

@Repository
public interface PetCategoryRepository extends JpaRepository<PetCategory, Integer> {
	// Method to find pet category by id
	public PetCategory findByCategoryId(int categoryId);

	// Method to find pet category by name
	public PetCategory findByCategoryName(String categoryName);

}
