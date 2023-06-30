import ProductFactory from "../../../domain/product/factory/product.factory";
import ProductRepositoryInterface from "../../../domain/product/repository/product-repository.interface";
import { InputProductCustomerDto, OutputProductCustomerDto } from "./create.product.dto";

export default class CreateProductUseCase {

    private productRepositoryInterface:ProductRepositoryInterface;

    constructor(productRepositoryInterface: ProductRepositoryInterface) {
        this.productRepositoryInterface = productRepositoryInterface;
      }
    
      async execute(
        input: InputProductCustomerDto
      ): Promise<OutputProductCustomerDto> {
        const product = ProductFactory.create(
          input.id,
          input.name,
          input.price
        );
    
        await this.productRepositoryInterface.create(product);
    
        return {
          id: product.id,
          name: product.name,
          price: product.price
        };
      }
}