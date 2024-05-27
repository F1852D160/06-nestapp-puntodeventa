import { Controller, Get, Param } from '@nestjs/common';

@Controller('productos')
export class ProductosController {
    private productos = ['Xiaomi 14 Ultra','Xiaomi 14','Xiaomi 13T pro','Xiaomi 13T','Xiaomi 12T pro','Xiaomi 12'];

    @Get()
    getAllProductos(){
        return this.productos;
    }

    @Get(":id")
    getProductosById(@Param("id") id:String){
        return this.productos[+id]
    }

    
}