
const ExcelJS = require('exceljs');

const createExcelFile = async (products) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Low Availability Products');


  worksheet.columns = [
    { header: 'ID', key: '_id', width: 30 },
    { header: 'Name', key: 'name', width: 30 },
    { header: 'Availability', key: 'availability', width: 20 },
  ];

 
  products.forEach(product => {
    worksheet.addRow({
      _id: product._id.toString(),
      name: product.name,
      availability: product.availability,
    });
  });

  
  const buffer = await workbook.xlsx.writeBuffer();
  return buffer;
};

module.exports = { createExcelFile };
