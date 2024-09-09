import { ProductoTratamientoModel } from "../../domain/models/Producto_TratamientoModel";
import { ProductoTratamientoRespuesta } from "../interfaces/producto_tratamiento";


export class ProductoTratamientoMapper{
    static zoolAPIProductoTratamientoToModel(product_tra:ProductoTratamientoRespuesta):ProductoTratamientoModel{
        return{
            id:         product_tra.id,            
            product:    product_tra.product,
            status:     product_tra.status,
        }

    }
}