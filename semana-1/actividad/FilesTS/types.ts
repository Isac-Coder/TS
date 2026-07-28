//products
export type products ={
ProductId : number,
ProductName : string,
InventoryId : number,
SKU : string,
Quantity : number,
Price : number,
ProductCategory :
  | "technology"
  | "clothing"
  | "food"
  | "home"
}



//suplier
export type Supliers={
SupplierId : number,
SupplierName : string,
SupplierEmail : string,
Supplierphone? : string,
}


//
export type stocks={
movementid : number,
movementStock : string,
}

  
