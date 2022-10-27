import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ProductInterface } from './interfaces/ProductInterface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('product') private productModel: Model<ProductDocument>,
  ) {}

    async getProducts(): Promise<ProductInterface[]> {
    return await this.productModel.find();
  }

  async getProduct(id: string) {
    return await this.productModel.findById(id);
  }

  async createProduct(product: CreateProductDto) {
    const newProduct = new this.productModel(product);
    return await newProduct.save();
  }

    async deleteProduct(id: string) {
      await this.productModel.findByIdAndDelete({_id: id})
  }

    async updateProduct(id: string, product: CreateProductDto ) {
      const { name, price, description, stock, brand } = product
      return await this.productModel.findByIdAndUpdate(id, { name, price, description, stock, brand }, { new: true })
  }
}
