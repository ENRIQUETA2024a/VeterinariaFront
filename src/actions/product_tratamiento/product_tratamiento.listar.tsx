import { zoolomascotasAPI } from "../../config/api/zoolomascotasAPI";
import { ProductoTratamientoRespuesta } from "../../infraestructure/interfaces/producto_tratamiento";
import { ProductoTratamientoMapper } from "../../infraestructure/mappers/producto_tratamiento.mapper";


export const listarProductoTratamientoByIdTratamiento=async(id:number)=>{
    try {
        const { data } = await zoolomascotasAPI.get<ProductoTratamientoRespuesta[]>(
          `products_tratamientos/${id}`
        );
        const product_tratamientos = data.map((produt_tratamientosrpta) =>
          ProductoTratamientoMapper.zoolAPIProductoTratamientoToModel(produt_tratamientosrpta)
        );
        return product_tratamientos;
      } catch (error) {
        console.log(error);
        throw new Error(`Error obteniendo productos del tratamientos IdTratamiento: ${id}`);
      }
}