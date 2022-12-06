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

import com.cybage.entities.PetCategory;
import com.cybage.services.PetCategoryServiceImpl;

@RestController
@CrossOrigin
@RequestMapping("/petCategory")
public class PetCategoryController {
	@Autowired
	PetCategoryServiceImpl petCategoryServiceImpl;

	//@RolesAllowed("ROLE_ADMIN")
	@PostMapping("/addPetCategory")
	public ResponseEntity<String> addPetCategory(@RequestParam("categoryImage") MultipartFile file,
			@RequestParam("categoryName") String categoryName) {
		petCategoryServiceImpl.addPetCategory(file, categoryName);
		return new ResponseEntity<String>("Pet category details added!", HttpStatus.OK);
	}

	//@RolesAllowed("ROLE_ADMIN")
	@PutMapping("/updatePetCategory/{categoryId}")
	public ResponseEntity<PetCategory> updatePetCategory(@PathVariable int categoryId,
			@RequestParam("categoryImage") MultipartFile file, @RequestParam("categoryName") String categoryName) {
		return new ResponseEntity<PetCategory>(petCategoryServiceImpl.updatePetCategory(file, categoryId, categoryName),
				HttpStatus.OK);
	}

	//@RolesAllowed("ROLE_ADMIN")
	@DeleteMapping("/deletePetCategory/{categoryId}")
	public ResponseEntity<String> deletePetCategory(@PathVariable int categoryId) {
		petCategoryServiceImpl.deletePetCategory(categoryId);
		return new ResponseEntity<String>("Pet category details deleted successfully for pet category id " + categoryId,
				HttpStatus.OK);
	}
	//@RolesAllowed({"ROLE_ADMIN","ROLE_CUSTOMER"})
	@GetMapping("/getAllPetCategory")
	public ResponseEntity<List<PetCategory>> getAllPetCategory() {
		return new ResponseEntity<List<PetCategory>>(petCategoryServiceImpl.getAllPetCategory(), HttpStatus.OK);
	}

	@GetMapping("/findByCategoryId/{categoryId}")
	public ResponseEntity<PetCategory> findByCategoryId(@PathVariable int categoryId) {
		return new ResponseEntity<PetCategory>(petCategoryServiceImpl.findByCategoryId(categoryId), HttpStatus.OK);
	}

	@GetMapping("/findByCategoryName/{categoryName}")
	public ResponseEntity<PetCategory> findByCategoryName(@PathVariable String categoryName) {
		return new ResponseEntity<PetCategory>(petCategoryServiceImpl.findByCategoryName(categoryName), HttpStatus.OK);
	}

}
