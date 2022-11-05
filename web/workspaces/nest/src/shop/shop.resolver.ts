import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ShopService } from './shop.service';
import { CreateShopInput } from './dto/create-shop.input';
import { UpdateShopInput } from './dto/update-shop.input';

@Resolver('Shop')
export class ShopResolver {
  constructor(private readonly shopService: ShopService) {}

  @Mutation('createShop')
  create(@Args('createShopInput') createShopInput: CreateShopInput) {
    return this.shopService.create(createShopInput);
  }

  @Query('shop')
  findAll() {
    return this.shopService.findAll();
  }

  @Query('shop')
  findOne(@Args('id') id: number) {
    return this.shopService.findOne(id);
  }

  @Mutation('updateShop')
  update(@Args('updateShopInput') updateShopInput: UpdateShopInput) {
    return this.shopService.update(updateShopInput.id, updateShopInput);
  }

  @Mutation('removeShop')
  remove(@Args('id') id: number) {
    return this.shopService.remove(id);
  }
}
