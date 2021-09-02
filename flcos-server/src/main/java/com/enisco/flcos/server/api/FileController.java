package com.enisco.flcos.server.api;

import com.enisco.flcos.server.util.ExcelExporter;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@RequestMapping("api/v1/files")
@RestController
public class FileController {
	private String fileLocation;

	@SuppressWarnings("deprecation")
	@PostMapping("/uploadExcelFile")
	public String uploadFile(Model model, MultipartFile file) throws IOException {
	    InputStream in = file.getInputStream();
	    Workbook workbook = new XSSFWorkbook(in);
        Sheet firstSheet = workbook.getSheetAt(0);
        Iterator<Row> iterator = firstSheet.iterator();
         
        while (iterator.hasNext()) {
            Row nextRow = iterator.next();
            Iterator<Cell> cellIterator = nextRow.cellIterator();
             
            while (cellIterator.hasNext()) {
                Cell cell = cellIterator.next();
                 
                switch (cell.getCellType()) {
                    case Cell.CELL_TYPE_STRING:
                        System.out.print(cell.getStringCellValue());
                        break;
                    case Cell.CELL_TYPE_BOOLEAN:
                        System.out.print(cell.getBooleanCellValue());
                        break;
                    case Cell.CELL_TYPE_NUMERIC:
                        System.out.print(cell.getNumericCellValue());
                        break;
                }
                System.out.print(" - ");
            }
            System.out.println();
        }
         
        workbook.close();
        in.close();
	    return "excel";
	}
	
	@GetMapping("download")
	public void downloadExcel(HttpServletResponse response) throws IOException {
		response.setContentType("application/octet-stream");
		String headerKey = "Content-Disposition";
		String headerValue = "attachment; filename=employee.xlsx";
		response.setHeader(headerKey, headerValue);
		List<String> listEmployees = new ArrayList<String>();
		listEmployees.add("Allen");
		listEmployees.add("Calvin");
		listEmployees.add("Cedric");
		
		ExcelExporter exporter = new ExcelExporter(listEmployees);
		exporter.export(response);
	}
	
}
