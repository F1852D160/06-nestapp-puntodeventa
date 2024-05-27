import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { ProductosController } from './produtos/produtos.controller';

@Module({
  imports: [ProductosModule],
  controllers: [ProductosController],
  providers: [],
})
export class AppModule {}
