package com.cybage.services;

import org.springframework.web.multipart.MultipartFile;

public interface IDiskStorageService {
//	List<String> loadAll();

	String store(MultipartFile file);

//	Resource load(String fileName);
//
//	void delete(String fileName);
}
