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
import org.springframework.web.bind.annotation.RestController;

import com.cybage.dtos.PetDto;
import com.cybage.entities.Pet;
import com.cybage.services.PetServiceImpl;

@RestController
@CrossOrigin
@RequestMapping("/pet")
public class PetController {
	@Autowired
	PetServiceImpl petServiceImpl;
	//@RolesAllowed("ROLE_ADMIN")
	@PostMapping("/addPet")
	public ResponseEntity<Pet> addPet(PetDto petDto) {
		return new ResponseEntity<Pet>(petServiceImpl.addPet(petDto), HttpStatus.CREATED);
	}

	//@RolesAllowed("ROLE_ADMIN")
	@PutMapping("/updatePet/{petId}")
	public ResponseEntity<String> updatePet(@PathVariable int petId, PetDto petDto) {
		petServiceImpl.updatePet(petId, petDto);
		return new ResponseEntity<String>("Pet details updated successfully!", HttpStatus.OK);
	}

	//@RolesAllowed("ROLE_ADMIN")
	@DeleteMapping("/deletePet/{petId}")
	public ResponseEntity<String> deletePet(@PathVariable int petId) {
		petServiceImpl.deletePet(petId);
		return new ResponseEntity<String>("Pet details deleted successfully for pet id " + petId, HttpStatus.OK);
	}

	//@RolesAllowed({"ROLE_ADMIN","ROLE_CUSTOMER"})
	@GetMapping("/getAllPets")
	public ResponseEntity<List<Pet>> getAllPets() {
		return new ResponseEntity<List<Pet>>(petServiceImpl.getAllPets(), HttpStatus.OK);
	}

	@GetMapping("/findByPetId/{petId}")
	public ResponseEntity<Pet> findByPetId(@PathVariable int petId) {
		return new ResponseEntity<Pet>(petServiceImpl.findByPetId(petId), HttpStatus.OK);
	}

	@GetMapping("/findByPetName/{petName}")
	public ResponseEntity<Pet> findByPetName(@PathVariable String petName) {
		return new ResponseEntity<Pet>(petServiceImpl.findByPetName(petName), HttpStatus.OK);
	}

}
