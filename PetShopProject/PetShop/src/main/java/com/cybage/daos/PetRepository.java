package com.cybage.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cybage.entities.Pet;

@Repository
public interface PetRepository extends JpaRepository<Pet, Integer> {
	// Method to find pet by id
	public Pet findByPetId(int petId);

	// Method to find pet by name
	public Pet findByPetName(String petName);

	// Method to find
	@Query(value = "SELECT pcat.category_name FROM pet p left join pet_category pcat on p.category_id=pcat.category_id where p.pet_id=?1", nativeQuery = true)
	public String findPetCategoryByPetId(int petId);
}
