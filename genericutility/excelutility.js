import excel from 'exceljs'

export async function readdatafromexcel(path,sheetname,rownum,cellnum){
    let book=new excel.Workbook()
    await book.xlsx.readFile(path)
    let sheet= await book.getWorksheet(sheetname)
   let data = await sheet.getRow(rownum).getCell(cellnum).toString()
   return data;

}