import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from '../produto/interfaces/produto.interface';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  async search(): Promise<Produto[]> {
    return await this.produtoService.search();
  }

  @Post()
  async criar(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.create(produto);
  }

  @Get(':codigoDoProduto')
  async buscarPorId(
    @Param('codigoProduto') codigoProduto: string,
  ): Promise<Produto> {
    return this.produtoService.searchBySku(codigoProduto);
  }

  @Put(':_id')
  async atualizar(
    @Param('_id') _id: string,
    @Body() produto: Produto,
  ): Promise<Produto> {
    return this.produtoService.update(_id, produto);
  }

  @Delete(':_id')
  async remover(
    @Param('_id') _id: string,
  ): Promise<Produto> {
    return this.produtoService.delete(_id);
  }
}
