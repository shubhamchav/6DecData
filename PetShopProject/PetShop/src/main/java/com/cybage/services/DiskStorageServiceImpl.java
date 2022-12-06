package com.cybage.services;

import java.io.File;
import java.io.FileOutputStream;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

@Component
public class DiskStorageServiceImpl implements IDiskStorageService {
	@Value("${disk.upload.basepath}")
	private String BASEPATH;

//	@Override
//	public List<String> loadAll() {
//		File dirPath = new File(BASEPATH);
//		return List.of(dirPath.list());
//	}

	@Override
	public String store(MultipartFile file) {
		// GUID =globally unique identifier
		// UUID =Universal Unique identifier
		// String fileName = UUID.randomUUID().toString().replaceAll("-", "");
		String fileName = file.getOriginalFilename();
		File filePath = new File(BASEPATH, fileName);
		try (FileOutputStream out = new FileOutputStream(filePath)) {
			FileCopyUtils.copy(file.getInputStream(), out);
			return fileName;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

//	@Override
//	public Resource load(String fileName) {
//		File filePath = new File(BASEPATH, fileName);
//		if (filePath.exists())
//			return new FileSystemResource(filePath);
//		return null;
//	}
//
//	@Override
//	public void delete(String fileName) {
//		File filePath = new File(BASEPATH, fileName);
//		if (filePath.exists())
//			filePath.delete();
//	}

}
