package com.cybage.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybage.daos.CartItemRepository;
import com.cybage.daos.PetAccessoriesRepository;
import com.cybage.daos.PetFoodRepository;
import com.cybage.daos.PetRepository;
import com.cybage.daos.UserRepository;
import com.cybage.entities.CartItem;
import com.cybage.entities.Pet;
import com.cybage.entities.PetAccessories;
import com.cybage.entities.PetFood;
import com.cybage.entities.User;

@Service
public class CartServiceImpl implements ICartService {

	@Autowired
	CartItemRepository cartItemRepository;

	@Autowired
	PetRepository petRepository;

	@Autowired
	PetFoodRepository petFoodRepository;

	@Autowired
	PetAccessoriesRepository petAccessoriesRepository;

	@Autowired
	UserRepository userRepository;

	@Autowired
	PetServiceImpl petServiceImpl;

	@Autowired
	PetFoodServiceImpl petFoodServiceImpl;

	@Autowired
	PetAccessoriesServiceImpl petAccessoriesServiceImpl;

	@Override
	public CartItem addToCartList(int id, String userEmail) {
		CartItem cartItem = new CartItem();
		List<CartItem> cartItemList = new ArrayList<>();

		List<Pet> petList = new ArrayList<>();
		List<PetFood> petFoodsList = new ArrayList<>();
		List<PetAccessories> petAccessoriesList = new ArrayList<>();

		User user = userRepository.findByUserEmail(userEmail);

		Pet pet = petRepository.findByPetId(id);

		if (pet != null) {
			String categoryName = pet.getPetCategory().getCategoryName();

			if (categoryName.equals("Dog")) {
				petList.add(petServiceImpl.findByPetId(id));
				cartItem.setPets(petList);
				cartItemList.add(cartItem);
			} else if (categoryName.equals("Cat")) {
				petList.add(petServiceImpl.findByPetId(id));
				cartItem.setPets(petList);
				cartItemList.add(cartItem);

			} else if (categoryName.equals("Bird")) {
				petList.add(petServiceImpl.findByPetId(id));
				cartItem.setPets(petList);
				cartItemList.add(cartItem);

			} else if (categoryName.equals("Fish")) {
				petList.add(petServiceImpl.findByPetId(id));
				cartItem.setPets(petList);
				cartItemList.add(cartItem);
			}

			pet.getCartItem().addAll(cartItemList);
		}

		PetFood petFood = petFoodRepository.findByFoodId(id);

		if (petFood != null) {
			String foodCategory = petFood.getFoodCategory();

			if (foodCategory.equals("Dog food")) {
				petFoodsList.add(petFoodServiceImpl.findByFoodId(id));
				cartItem.setPetFoods(petFoodsList);
				cartItemList.add(cartItem);
			}

			else if (foodCategory.equals("Cat food")) {
				petFoodsList.add(petFoodServiceImpl.findByFoodId(id));
				cartItem.setPetFoods(petFoodsList);
				cartItemList.add(cartItem);
			} else if (foodCategory.equals("Bird food")) {
				petFoodsList.add(petFoodServiceImpl.findByFoodId(id));
				cartItem.setPetFoods(petFoodsList);
				cartItemList.add(cartItem);
			} else if (foodCategory.equals("Fish food")) {
				petFoodsList.add(petFoodServiceImpl.findByFoodId(id));
				cartItem.setPetFoods(petFoodsList);
				cartItemList.add(cartItem);
			}

			petFood.getCartItem().addAll(cartItemList);

		}

		PetAccessories petAccessories = petAccessoriesRepository.findByItemId(id);

		if (petAccessories != null) {
			String itemCategory = petAccessories.getItemCategory();

			if (itemCategory.equals("Dog accessories")) {
				petAccessoriesList.add(petAccessoriesServiceImpl.findByItemId(id));
				cartItem.setPetAccessories(petAccessoriesList);
				cartItemList.add(cartItem);
			} else if (itemCategory.equals("Cat accessories")) {
				petAccessoriesList.add(petAccessoriesServiceImpl.findByItemId(id));
				cartItem.setPetAccessories(petAccessoriesList);
				cartItemList.add(cartItem);
			} else if (itemCategory.equals("Bird accessories")) {
				petAccessoriesList.add(petAccessoriesServiceImpl.findByItemId(id));
				cartItem.setPetAccessories(petAccessoriesList);
				cartItemList.add(cartItem);
			} else if (itemCategory.equals("Fish accessories")) {
				petAccessoriesList.add(petAccessoriesServiceImpl.findByItemId(id));
				cartItem.setPetAccessories(petAccessoriesList);
				cartItemList.add(cartItem);
			}

			petAccessories.getCartItem().addAll(cartItemList);

		}

		cartItem.setUser(user);

		return cartItemRepository.save(cartItem);
	}

	@Override
	public List<CartItem> getCartList(String userEmail) {
		return cartItemRepository.getCartList(userEmail);
	}

	@Override
	public void removeCartItem(int id, String userEmail) {

		List<CartItem> cartItems = cartItemRepository.getCartList(userEmail);
		CartItem item = null;
		for (CartItem item1 : cartItems) {
			if (item1.getCartItemId() == id) {
				item = item1;
			}
		}
		cartItems.remove(item);
		cartItemRepository.delete(item);
		cartItemRepository.saveAll(cartItems);

	}

	@Override
	public void clearCartList(String userEmail) {
		List<CartItem> cartItems = cartItemRepository.getCartList(userEmail);
		cartItemRepository.deleteAll(cartItems);
	}

}
