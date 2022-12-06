package com.cybage.main;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.cybage.daos.PetAccessoriesRepository;
import com.cybage.daos.PetCategoryRepository;
import com.cybage.daos.PetFoodRepository;
import com.cybage.daos.PetRepository;
import com.cybage.daos.UserRepository;
import com.cybage.entities.Pet;
import com.cybage.entities.PetAccessories;
import com.cybage.entities.PetCategory;
import com.cybage.entities.PetFood;
import com.cybage.entities.User;
import com.cybage.entities.UserRole;

@SpringBootTest
class PetShopApplicationTests {

	@Test
	void contextLoads() {
	}

	@Autowired
	PetCategoryRepository petCategoryRepository;

	@Autowired
	PetRepository petRepository;

	@Autowired
	UserRepository userRepository;

	@Autowired
	PetFoodRepository petFoodRepository;

	@Autowired
	PetAccessoriesRepository petAccessoriesRepository;

	@Test
	public void testGetAllUser() {
		List<User> usersList = userRepository.findAll();
		assertThat(usersList).size().isGreaterThan(0);
	}

	@Test
	public void testGetUserByUserEmail() {
		User user = userRepository.findByUserEmail("anuragu@gmail.com");
		assertThat(user).isNotNull();
	}

	@Test
	public void testLoginUserByUserEmailAndUserPassword() {
		User user = userRepository.findByUserEmailAndUserPassword("anuragu@gmail.com", "anurag@1995");
		assertThat(user).isNotNull();
	}

	@Test
	public void testGetAllPetCategory() {
		List<PetCategory> petCategoryList = petCategoryRepository.findAll();
		assertThat(petCategoryList).size().isGreaterThan(0);
	}

	@Test
	public void testGetAllPetCategoryByCategoryName() {
		PetCategory petCategory = petCategoryRepository.findByCategoryName("Dog");
		assertThat(petCategory).isNotNull();
	}

	@Test
	public void testGetAllPets() {
		List<Pet> petsList = petRepository.findAll();
		assertThat(petsList).size().isGreaterThan(0);
	}

	@Test
	public void testGetPetByPetName() {
		Pet pet = petRepository.findByPetName("Cat 1");
		assertThat(pet).isNotNull();
	}

	@Test
	public void testGetAllPetFoods() {
		List<PetFood> petFoodList = petFoodRepository.findAll();
		assertThat(petFoodList).size().isGreaterThan(0);
	}

	@Test
	public void testGetPetFoodsByFoodCategoryName() {
		List<PetFood> petFoodsListByFoodCategory = petFoodRepository.findByFoodCategory("DogFood");
		assertThat(petFoodsListByFoodCategory).size().isGreaterThan(0);
	}

	@Test
	public void testGetPetFoodByFoodName() {
		PetFood petFood = petFoodRepository.findByFoodName("Dog food 1");
		assertThat(petFood).isNotNull();
	}

	@Test
	public void testGetAllPetAccessories() {
		List<PetAccessories> petAccessoriesList = petAccessoriesRepository.findAll();
		assertThat(petAccessoriesList).size().isGreaterThan(0);
	}

	@Test
	public void testGetPetAccessoriesByAccessoriesCategoryName() {
		List<PetAccessories> petAccessoriesListByAccessoriesCategory = petAccessoriesRepository
				.findByItemCategory("CatAccessories");
		assertThat(petAccessoriesListByAccessoriesCategory).size().isGreaterThan(0);
	}

	@Test
	public void testGetPetAccessoriesByAccessoriesName() {
		PetAccessories petAccessories = petAccessoriesRepository.findByItemName("Cat accessories 2");
		assertThat(petAccessories).isNotNull();
	}

	@Test
	public void testAddUser() {
		User user = new User();
		user.setUserFirstName("Suraj");
		user.setUserLastName("Dhale");
		user.setUserEmail("surajd@gmail.com");
		user.setUserPassword("suraj@1995");
		user.setUserRole(UserRole.CUSTOMER);
		userRepository.save(user);
		assertNotNull(userRepository.findByUserEmail("surajd@gmail.com"));
	}

	@Test
	public void testAddPetCategory() {
		PetCategory petCategory = new PetCategory();
		petCategory.setCategoryId(6);
		petCategory.setCategoryName("Ant");
		petCategory.setCategoryImage("dog3.jpg");
		petCategoryRepository.save(petCategory);
		assertNotNull(petCategoryRepository.findByCategoryName("Ant").getClass());
	}

//	@Test
//	public void testDeletePetCategory() {
//		petCategoryRepository.deleteById(46);
//		assertThat(petCategoryRepository.existsById(46)).isFalse();
//	}
//
//	@Test
//	public void testUpdatePetCategory() {
//		PetCategory petCategory = petCategoryRepository.findByCategoryId(45);
//		petCategory.setCategoryName("New girrafe");
//		petCategory.setCategoryImage("dog1.jpg");
//		petCategoryRepository.save(petCategory);
//		assertNotEquals("dog", petCategoryRepository.findByCategoryId(45).getCategoryName());
//	}

}
