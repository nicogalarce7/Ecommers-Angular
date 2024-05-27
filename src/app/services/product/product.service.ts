import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';


@Injectable({
  providedIn:'root'
})
export class ProductService {

  constructor(private http: HttpClient){}

  getAllCategory(){
    return this.http.get<any>('https://freeapi.miniprojectideas.com/api/BigBasket/' + Constant.METHODS.GET_ALL_CATEGORY)
  }

   getProducts(){
    return this.http.get('https://freeapi.miniprojectideas.com/api/amazon/GetAllProducts')
  }

  saveProduct(obj:any){
    return this.http.post('/api/BigBasket/' + Constant.METHODS.CREATE_PRODUCT, obj)
  }

  updateProduct(obj:any){
    return this.http.post('/api/BigBasket/' + Constant.METHODS.UPDATE_PRODUCT, obj)
  }
  deleteProduct(id:number){
    return this.http.get('/api/BigBasket/' + Constant.METHODS.DELETE_PRODUCT + id)
  }
}

