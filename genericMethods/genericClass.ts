import * as excel from 'exceljs';
export default class GenericMethods {
  page: any;
  private currentDate: any;
  private FutureDate: any;
  public async simulateAsyncTask(): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve(); // Resolving the promise without any value
      }, 2000); // Simulating a delay of 2 seconds
    });
  }
  public async simulateAsyncTaskWithTime(time): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve(); // Resolving the promise without any value
      }, time + 1000);
    });
  }
  public async randcharset() {
    const randcharset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randchars = (function (R, M) {
      var L = R.length, r = M.random, f = M.floor;
      return function (len) {
        var ind, str = "";
        for (ind = 0; ind < len; ind++) str += R[f(r() * L)];
        return str;
      };
    })(randcharset.split(''), Math);
    return randchars(5);
  }
  public async randcharsetwithChar(noOfChar) {
    const randcharset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randchars = (function (R, M) {
      var L = R.length, r = M.random, f = M.floor;
      return function (len) {
        var ind, str = "";
        for (ind = 0; ind < len; ind++) str += R[f(r() * L)];
        return str;
      };
    })(randcharset.split(''), Math);
    return randchars(noOfChar);
  }
  public async Date() {
    this.currentDate = new Date();
    let cDate = this.currentDate.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
    return cDate;
  }
  public async EndDate() {
    this.currentDate = new Date();
    this.FutureDate = new Date();
    this.FutureDate.setMonth(this.currentDate.getMonth() + 1);
    let fDate = this.FutureDate.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
    return fDate;
  }
  /*
  @anbarasan
  Function returs random number between 1 to 999 (inclusive)
  */
  public async getRandomThreeDigitNumber() {
    return Math.floor(Math.random() * 900) + 1;
  }
  /*
  @anbarasan
 write data in excel 
  */
  public async writeTheDataInExcel(fileName: string, sheetName: string, cloumnName: string, dataToBeEntered: string) {
    const workbook = new excel.Workbook();
    const excelFileName = fileName;
    await workbook.xlsx.readFile(excelFileName);
    const worksheet = workbook.getWorksheet(sheetName);
    const column = worksheet.getColumn(cloumnName);
    if (column) {
      let rowCount = 0;
      column.eachCell((cell) => {
        const cellValue = cell.value;
        if (typeof cellValue === 'string' && cellValue.trim() !== '') {
          rowCount++;
        }

      });
      let cellname = cloumnName + (rowCount + 1);
      worksheet.getCell(cellname).value = dataToBeEntered;
      await workbook.xlsx.writeFile(excelFileName);
    }
  }
  /*
  @anbarasan
 read a data from excel 
 @return last value of the column
  */
  public async readTheDataInExcel(fileName: string, sheetName: string, cloumnName: string) {
    const workbook = new excel.Workbook();
    const excelFileName = fileName;
    await workbook.xlsx.readFile(excelFileName);
    const worksheet = workbook.getWorksheet(sheetName);
    const column = worksheet.getColumn(cloumnName);
    let expectedValue: any;
    if (column) {
      let rowCount = 0;
      column.eachCell((cell) => {
        const cellValue = cell.value;
        if (typeof cellValue === 'string' && cellValue.trim() !== '') {
          rowCount++;
        }

      });
      let cellname = cloumnName + (rowCount);
      expectedValue = worksheet.getCell(cellname).value;
    }
    return expectedValue;
  }
  // @suraj
  // to get random date 
  public async getRandomDate() {
    const startYear = 1900;
    const endYear = 2000;
    const randomYear = startYear + Math.floor(Math.random() * (endYear - startYear + 1));
    const randomMonth = Math.floor(Math.random() * 12) + 1;
    const randomDay = Math.floor(Math.random() * 28) + 1;
    const formattedMonth = String(randomMonth).padStart(2, '0');
    const formattedDay = String(randomDay).padStart(2, '0');
    const randomDate = `${formattedMonth}/${formattedDay}/${randomYear.toString()}`;
    return randomDate;
  }
}