package com.cybage.controllers;

import java.util.List;

import javax.annotation.security.RolesAllowed;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cybage.entities.PetFood;
import com.cybage.services.PetFoodServiceImpl;

@RestController
@CrossOrigin
@RequestMapping("/petFood")
public class PetFoodController {

	@Autowired
	PetFoodServiceImpl petFoodServiceImpl;
	//@RolesAllowed("ROLE_ADMIN")
	@PostMapping("/addPetFood")
	public ResponseEntity<String> addPetFood(@RequestParam("foodImage") MultipartFile file,
			@RequestParam("foodName") String foodName, @RequestParam("foodCategory") String foodCategory,
			@RequestParam("foodPrice") double foodPrice, @RequestParam("foodQuantity") int foodQuantity) {
		petFoodServiceImpl.addPetFood(file, foodName, foodCategory, foodPrice, foodQuantity);
		return new ResponseEntity<String>("Pet food details added successfully!", HttpStatus.CREATED);
	}
	//@RolesAllowed("ROLE_ADMIN")
	@PutMapping("/updatePetFood/{foodId}")
	public ResponseEntity<String> updatePetFood(@PathVariable int foodId, @RequestParam("foodImage") MultipartFile file,
			@RequestParam("foodName") String foodName, @RequestParam("foodCategory") String foodCategory,
			@RequestParam("foodPrice") double foodPrice, @RequestParam("foodQuantity") int foodQuantity) {
		petFoodServiceImpl.updatePetFood(foodId, file, foodName, foodCategory, foodPrice, foodQuantity);
		return new ResponseEntity<String>("Pet food details updated successfully!", HttpStatus.OK);
	}
	//@RolesAllowed("ROLE_ADMIN")
	@DeleteMapping("/deletePetFood/{foodId}")
	public ResponseEntity<String> deletePetFood(@PathVariable int foodId) {
		petFoodServiceImpl.deletePetFood(foodId);
		return new ResponseEntity<String>("Pet food details deleted successfully for food id " + foodId, HttpStatus.OK);
	}
	
	@GetMapping("/getAllFood")
	public ResponseEntity<List<PetFood>> getAllFood() {
		return new ResponseEntity<List<PetFood>>(petFoodServiceImpl.getAllFood(), HttpStatus.OK);
	}

	@GetMapping("/findByFoodName/{foodName}")
	public ResponseEntity<PetFood> findByFoodName(@PathVariable String foodName) {
		return new ResponseEntity<PetFood>(petFoodServiceImpl.findByFoodName(foodName), HttpStatus.OK);
	}

	@GetMapping("/findByFoodId/{foodId}")
	public ResponseEntity<PetFood> findByFoodId(@PathVariable int foodId) {
		return new ResponseEntity<PetFood>(petFoodServiceImpl.findByFoodId(foodId), HttpStatus.OK);
	}
	
	@GetMapping("/findByFoodCategory/{foodCategory}")
	public ResponseEntity<List<PetFood>> findByFoodCategory(@PathVariable String foodCategory)
	{
		return new ResponseEntity<>(petFoodServiceImpl.findByFoodCategory(foodCategory), HttpStatus.OK);
	}

}
