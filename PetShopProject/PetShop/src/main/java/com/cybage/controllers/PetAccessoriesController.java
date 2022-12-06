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

import com.cybage.entities.PetAccessories;
import com.cybage.services.PetAccessoriesServiceImpl;

@RestController
@CrossOrigin
@RequestMapping("/petAccessories")
public class PetAccessoriesController {

	@Autowired
	PetAccessoriesServiceImpl petAccessoriesServiceImpl;

	//@RolesAllowed("ROLE_ADMIN")
	@PostMapping("/addPetAccessories")
	public ResponseEntity<String> addPetAccessories(@RequestParam("itemImage") MultipartFile file,
			@RequestParam("itemName") String itemName, @RequestParam("itemCategory") String itemCategory,
			@RequestParam("itemPrice") double itemPrice, @RequestParam("itemQuantity") int itemQuantity) {
		petAccessoriesServiceImpl.addPetAccessories(file, itemName, itemCategory, itemPrice, itemQuantity);
		return new ResponseEntity<String>("Pet accessories details added successfully!", HttpStatus.CREATED);
	}

	//@RolesAllowed("ROLE_ADMIN")
	@PutMapping("/updatePetAccessories/{itemId}")
	public ResponseEntity<String> updatePetAccessories(@PathVariable int itemId,
			@RequestParam("itemImage") MultipartFile file, @RequestParam("itemName") String itemName,
			@RequestParam("itemCategory") String itemCategory, @RequestParam("itemPrice") double itemPrice,
			@RequestParam("itemQuantity") int itemQuantity) {
		petAccessoriesServiceImpl.updatePetAccessories(itemId, file, itemName, itemCategory, itemPrice, itemQuantity);
		return new ResponseEntity<String>("Pet Accessories details updated successfully!", HttpStatus.OK);
	}

	//@RolesAllowed("ROLE_ADMIN")
	@DeleteMapping("/deletePetAccessories/{itemId}")
	public ResponseEntity<String> deletePetAccessories(@PathVariable int itemId) {
		petAccessoriesServiceImpl.deletePetAccessories(itemId);
		return new ResponseEntity<String>("Pet Accessories details deleted successfully for Accessories id " + itemId,
				HttpStatus.OK);
	}
	//@RolesAllowed({"ROLE_ADMIN","ROLE_CUSTOMER"})
	@GetMapping("/getAllAccessories")
	public ResponseEntity<List<PetAccessories>> getAllAccessories() {
		return new ResponseEntity<List<PetAccessories>>(petAccessoriesServiceImpl.getAllAccessories(), HttpStatus.OK);
	}

	@GetMapping("/findByItemName/{itemName}")
	public ResponseEntity<PetAccessories> findByItemName(@PathVariable String itemName) {
		return new ResponseEntity<PetAccessories>(petAccessoriesServiceImpl.findByItemName(itemName), HttpStatus.OK);
	}

	@GetMapping("/findByItemId/{itemId}")
	public ResponseEntity<PetAccessories> findByItemId(@PathVariable int itemId) {
		return new ResponseEntity<PetAccessories>(petAccessoriesServiceImpl.findByItemId(itemId), HttpStatus.OK);
	}

	@GetMapping("/findByItemCategory/{itemCategory}")
	public ResponseEntity<List<PetAccessories>> findByItemCategory(@PathVariable String itemCategory) {
		return new ResponseEntity<List<PetAccessories>>(petAccessoriesServiceImpl.findByItemCategory(itemCategory),
				HttpStatus.OK);
	}

}
