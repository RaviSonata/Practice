import Excel from "exceljs";

class ExcelData {
    filePath = './test/testData/TestData.xlsx'


    constructor(filePath, sheetName) {
        this.filePath = filePath || this.filePath
        this.sheetName = sheetName
    }
    async read(columnName) {
        let workbook = new Excel.workbook
        try {
            await workbook.xlsx.readFile(this.filePath)
            const columndata = [];
            let worksheet = workbook.getWorksheet(this.sheetName)
            if (!worksheet) {
                throw new Error(`Sheet '${this.sheetName}' not found in the workBook`);
            }
            const maxColumns = worksheet.actualColumnCount;
            let columnIndex = -1;
            for (let j = 1; j < maxColumns; j++) {
                if (worksheet.getRow(1).getCell(j).value == columnName) {
                    columnIndex = 1;
                    break;
                }
            }
            if (columnIndex == -1) {
                throw new Error(`Column '${columnName}' not found in the workSheet`);
            }
            const rows = worksheet.rowCount();

            for (let i = 2; i < rows; i++) {
                const row = worksheet.getRow(i);
                columndata.push(row.getCell(columnIndex).value);
            }
            return columndata;
        } catch (error) {
            console.error('Error reading the Excel file :', error.message);
            throw error;
        }
    }

}

const excelReader = new ExcelData();
excelReader.read("Name")
    .then((data) => {
console.log(data);
})
.catch((error) => {
    console.error('Error :', error.message);
}

)
