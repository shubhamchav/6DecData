
package com.cybage.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybage.daos.FavouriteItemRepository;
import com.cybage.daos.PetAccessoriesRepository;
import com.cybage.daos.PetCategoryRepository;
import com.cybage.daos.PetFoodRepository;
import com.cybage.daos.PetRepository;
import com.cybage.daos.UserRepository;
import com.cybage.entities.FavouriteItem;
import com.cybage.entities.Pet;
import com.cybage.entities.PetAccessories;
import com.cybage.entities.PetFood;
import com.cybage.entities.User;

@Service
public class FavouriteListServiceImpl implements IFavouriteListService {

	@Autowired
	FavouriteItemRepository favouriteItemRepository;

	@Autowired
	PetServiceImpl petServiceImpl;

	@Autowired
	PetFoodServiceImpl petFoodServiceImpl;

	@Autowired
	PetAccessoriesServiceImpl petAccessoriesServiceImpl;
	
	@Autowired
	PetCategoryRepository petCategoryRepository;
	
	@Autowired
	PetRepository petRepository;
	
	@Autowired
	PetFoodRepository petFoodRepository;
	
	@Autowired
	PetAccessoriesRepository petAccessoriesRepository;
	
	@Autowired
	UserRepository userRepository;

	@Override
	public FavouriteItem addToFavouriteList(int id , String userEmail) {
		FavouriteItem favouriteItem = new FavouriteItem();
		List<FavouriteItem> favouriteItemList = new ArrayList<>();
		
		List<Pet> petList = new ArrayList<>();
		List<PetFood> petFoodsList = new ArrayList<>();
		List<PetAccessories> petAccessoriesList = new ArrayList<>();
		
		User user = userRepository.findByUserEmail(userEmail);
		
		Pet pet = petRepository.findByPetId(id);
		
		if(pet != null)
		{
			String categoryName = pet.getPetCategory().getCategoryName();
			
			if(categoryName.equals("Dog"))
			{
				petList.add(petServiceImpl.findByPetId(id));
				favouriteItem.setPets(petList);
				favouriteItemList.add(favouriteItem);
			}
			else if(categoryName.equals("Cat"))
			{
				petList.add(petServiceImpl.findByPetId(id));
				favouriteItem.setPets(petList);
				favouriteItemList.add(favouriteItem);
				
			}
			else if(categoryName.equals("Bird"))
			{
				petList.add(petServiceImpl.findByPetId(id));
				favouriteItem.setPets(petList);
				favouriteItemList.add(favouriteItem);
				
			}
			else if(categoryName.equals("Fish"))
			{
				petList.add(petServiceImpl.findByPetId(id));
				favouriteItem.setPets(petList);
				favouriteItemList.add(favouriteItem);
			}
			pet.getFavouriteItem().addAll(favouriteItemList);
		}
		
		PetFood petFood = petFoodRepository.findByFoodId(id);
		
		if(petFood != null)
		{
			String foodCategory = petFood.getFoodCategory();
			
			if(foodCategory.equals("DogFood"))
			{
				petFoodsList.add(petFoodServiceImpl.findByFoodId(id));
				favouriteItem.setPetFoods(petFoodsList);
				favouriteItemList.add(favouriteItem);
			}
			
			else if(foodCategory.equals("CatFood"))
			{
				petFoodsList.add(petFoodServiceImpl.findByFoodId(id));
				favouriteItem.setPetFoods(petFoodsList);
				favouriteItemList.add(favouriteItem);
			}
			else if(foodCategory.equals("BirdFood"))
			{
				petFoodsList.add(petFoodServiceImpl.findByFoodId(id));
				favouriteItem.setPetFoods(petFoodsList);
				favouriteItemList.add(favouriteItem);
			}
			else if(foodCategory.equals("FishFood"))
			{
				petFoodsList.add(petFoodServiceImpl.findByFoodId(id));
				favouriteItem.setPetFoods(petFoodsList);
				favouriteItemList.add(favouriteItem);
			}
			petFood.getFavouriteItem().addAll(favouriteItemList);
		}
		
		
		PetAccessories petAccessories = petAccessoriesRepository.findByItemId(id);
		
		if(petAccessories != null)
		{
			String itemCategory = petAccessories.getItemCategory();
			
			if(itemCategory.equals("DogAccessories"))
			{
				petAccessoriesList.add(petAccessoriesServiceImpl.findByItemId(id));
				favouriteItem.setPetAccessories(petAccessoriesList);
				favouriteItemList.add(favouriteItem);
			}
			else if(itemCategory.equals("CatAccessories"))
			{
				petAccessoriesList.add(petAccessoriesServiceImpl.findByItemId(id));
				favouriteItem.setPetAccessories(petAccessoriesList);
				favouriteItemList.add(favouriteItem);
			}
			else if(itemCategory.equals("BirdAccessories"))
			{
				petAccessoriesList.add(petAccessoriesServiceImpl.findByItemId(id));
				favouriteItem.setPetAccessories(petAccessoriesList);
				favouriteItemList.add(favouriteItem);
			}
			else if(itemCategory.equals("FishAccessories"))
			{
				petAccessoriesList.add(petAccessoriesServiceImpl.findByItemId(id));
				favouriteItem.setPetAccessories(petAccessoriesList);
				favouriteItemList.add(favouriteItem);
			}
			
			petAccessories.getFavouriteItem().addAll(favouriteItemList);
		}
	
		favouriteItem.setUserMail(user);
		
		return favouriteItemRepository.save(favouriteItem);
	}

	@Override
	public List<FavouriteItem> getFavouriteList(String userEmail) {
		return favouriteItemRepository.getFavouriteList(userEmail);
	}


//	@Override
//	public void clearFavouriteList(String sessionToken) {
//		FavouriteList favouriteList = favouriteListRepository.findBySessionToken(sessionToken);
//		favouriteListRepository.delete(favouriteList);
//	}

	@Override
	public void removeFavouriteItem(int id,String userEmail) 
	{
		List<FavouriteItem> favouriteItems = favouriteItemRepository.getFavouriteList(userEmail);
		FavouriteItem item = null;
		for (FavouriteItem item1 : favouriteItems) {
			if (item1.getId() == id) {
				item = item1;
			}
		}
		favouriteItems.remove(item);
		favouriteItemRepository.delete(item);
		favouriteItemRepository.saveAll(favouriteItems);
	}

	@Override
	public void clearFavouriteList(String userEmail) {
		List<FavouriteItem> favouriteList = favouriteItemRepository.getFavouriteList(userEmail);
		favouriteItemRepository.deleteAll(favouriteList);
	}
	
}