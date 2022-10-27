import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import {CreateProductDto} from './dto/create-product.dto'
import { ProductsService } from './products.service'
import { ProductInterface } from './interfaces/ProductInterface'

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}

    @Get()
    getProducts(): Promise<ProductInterface[]> {
        return this.productService.getProducts()
    }

    @Get(':id')
    getProduct(@Param('id') id) {
        return this.productService.getProduct(id)
    }

    @Post()
    createProduct(@Body() product: CreateProductDto): Promise<ProductInterface> {
        return this.productService.createProduct(product)
    }

    @Put(':id')
    updateProduct(@Body() product : CreateProductDto, @Param('id') id) {
        return this.productService.updateProduct(id, product)
    }

    @Delete(':id')
    deleteProduct(@Param('id') id): string {
        this.productService.deleteProduct(id)
        return `product successfully removed`
    }
}
