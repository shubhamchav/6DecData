package com.cybage.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@SuppressWarnings("serial")
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class FavouritePetNotFoundException extends RuntimeException 
{
	public FavouritePetNotFoundException(String message) 
	{
		super(message);
	}
	
}
