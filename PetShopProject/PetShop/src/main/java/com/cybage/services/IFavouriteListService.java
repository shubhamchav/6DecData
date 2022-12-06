package com.cybage.services;

import java.util.List;

import com.cybage.entities.FavouriteItem;

public interface IFavouriteListService {
	public FavouriteItem addToFavouriteList(int id, String userEmail);

	public List<FavouriteItem> getFavouriteList(String userEmail);

	public void removeFavouriteItem(int id,String userEmail);

	public void clearFavouriteList(String userEmail);
}
