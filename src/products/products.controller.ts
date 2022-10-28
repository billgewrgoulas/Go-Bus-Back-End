import { Controller, Post, Get, Header, Body, Param, Patch, Injectable} from "@nestjs/common";
import { ProductService } from "./products.service";
import { Values } from "./values";


@Controller('points')
export class ProductsController{

    constructor(private readonly productsService: ProductService){
        Values.init();
    }

    @Post()
    @Header('Content-Type', 'application/json')
    public addProduct(@Body('title') title: string): any{
        const id = this.productsService.insertProduct(title);
        return {pid: id};
    }

    @Get()
    public getAll(){
        return 'hello';
    }

    @Get(':code')
    public async getProduct(@Param('code') code: string){
        return Values.get(code);
        
    }

    @Patch('id')
    public updateProduct(@Param('pid') pid: string){
        this.productsService.updateProduct(pid);
        return null;
    }
}