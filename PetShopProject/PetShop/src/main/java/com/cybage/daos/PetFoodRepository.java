package com.cybage.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cybage.entities.PetFood;

@Repository
public interface PetFoodRepository extends JpaRepository<PetFood, Integer> {

	// Method to find pet food by name
	public PetFood findByFoodName(String foodName);

	// Method to find pet food by pet id
	public PetFood findByFoodId(int foodId);
	
	public List<PetFood> findByFoodCategory(String foodCategory);
	
	@Query(value = "SELECT food_category FROM pet_food where food_id=?1", nativeQuery = true)
	public String findFoodCategoryByFoodId(int foodId);

}
