import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  isSidePanelVisible: boolean = true;

  productdObj: any = {
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": ""
  };

  categoryList: any[] = [];
  productsList: any [] = [];

  constructor(private productSrv: ProductService) {

  }
  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
  }
  getAllProducts() {
    this.productSrv.getProducts().subscribe((res: any) => {
      this.productsList = res.data
    })
  }
  getAllCategory() {
    this.productSrv.getAllCategory().subscribe((res: any) => {
      this.categoryList = res.data
    })
  }
  onSave(obj : any) {
    this.productSrv.saveProduct(obj).subscribe((res: any) => {
      console.log(res)
      debugger;
      if (res.result) {
        alert("Product Created")
        this.getAllProducts();
      } else {
        alert(res.message)
      }
    });
  }

  onDelete(item:any){
    const isDelet = confirm("Are you sure want to delet?");
    console.log(item)
    if(isDelet){
      this.productSrv.deleteProduct(item.productId).subscribe((res: any) => {
        debugger;
        if (res.result) {
          alert("Product Deleted")
          this.getAllProducts();
        } else {
          alert(res.message)
        }
    })
    };
  }
  onEdit(item:any) {
    this.productdObj = item;
    this.openSidePanel();
  }
  onUpdate(){
    this.productSrv.updateProduct(this.productdObj).subscribe((res:any)=>{
      debugger;
      if(res.result){
        alert("Produc Updated");
        this.getAllProducts();
      }else{
        alert(res.message)
      }
    })
  }
  openSidePanel() {
    this.isSidePanelVisible = true;
  }
  closeSidePanel() {
    this.isSidePanelVisible = false;
  }
}
