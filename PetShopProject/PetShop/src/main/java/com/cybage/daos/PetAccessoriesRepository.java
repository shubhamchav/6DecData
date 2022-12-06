package com.cybage.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cybage.entities.PetAccessories;

@Repository
public interface PetAccessoriesRepository extends JpaRepository<PetAccessories, Integer> {

	public PetAccessories findByItemName(String itemName);

	public PetAccessories findByItemId(int itemId);

	public List<PetAccessories> findByItemCategory(String itemCategory);

	@Query(value = "SELECT item_category FROM pet_accessories where item_id=?1", nativeQuery = true)
	public String findItemCategoryByItemId(int id);
}
