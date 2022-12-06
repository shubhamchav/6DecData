package com.cybage.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@SuppressWarnings("serial")
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class PetFoodNotFoundException extends RuntimeException {
	public PetFoodNotFoundException(String message) 
	{
		super(message);
	}
}
