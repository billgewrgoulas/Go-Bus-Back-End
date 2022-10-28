import { Injectable, NotFoundException} from "@nestjs/common";
import { Product } from "./product.model";
import { HttpService } from '@nestjs/axios';
import { from, lastValueFrom, of } from "rxjs";


@Injectable()
export class ProductService{
    public products: Product[] = [];
    public points: Object = {};

    constructor(private http: HttpService){}

    public test(): Promise<any>{
        return lastValueFrom(this.http.get('http://telematics.oasa.gr/api/?act=getStopArrivals&p1=400075'));
        
    }

    public insertProduct(title: string){
        const product = new Product('hello', title);
        this.products.push(product);
        return product.id;
    }

    public getProducts(){
        return [...this.products];
    }

    public getSingleProduct(id: string){
        const product = this.findProduct(id);
        return {...product};
    }

    public updateProduct(id: string){
        const product = this.findProduct(id);
        //if check
        product.id = 'nestjs';
    }

    private findProduct(id: string):Product{
        const product = this.products.find(prod=>prod.id == id);
        if(!product){
            throw new NotFoundException('Couldnot found product');
        }
        return product;
    }

}