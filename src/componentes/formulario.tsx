import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Message } from "primereact/message";
import { useState } from "react";
import { useStore } from "../store/useStore";
import type { Producto } from "../store/useStore";

type Errors = {
  nombre: string | null,
  categoria: string | null,
  cantidad: string | null,
}

export default function Formulario() {

  const {products, addProducts, setProducts, deleteProduct} = useStore()

  const [errors, setErrors] = useState <Errors>({
    nombre: null,
    categoria: null,
    cantidad: null,
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const nombre = formData.get("nombre") as string | null
    const categoria = formData.get("categoria") as string | null
    const cantidad = formData.get("cantidad") as string | null

    // Validaciones
    const auxErrors: Errors = {
      nombre: null,
      categoria: null,
      cantidad: null
    }

    if(!nombre) auxErrors.nombre = "Nombre es necesario"
    if(!categoria) auxErrors.categoria = "Categoria es necesario"
    if(!cantidad) auxErrors.cantidad = "Cantidad es necesario"

    setErrors(auxErrors)

    if(auxErrors.nombre === null && auxErrors.categoria === null && auxErrors.cantidad === null){
      
      const codigo = String(Number(products[products.length -1].code) + 1);
      const productoAux: Producto = {
        code: codigo,
        name: nombre!,
        category: categoria!,
        quantity: Number(cantidad)
      }
      addProducts(productoAux)
    }
  }


  return (
    <div className="flex justify-center items-center md:max-w-7xl w-full ">
      <form className="flex flex-col !gap-7 p-4 rounded-xl 
        bg-gray-300 w-full md:max-w-7xl" onSubmit={(e) => handleSubmit(e)}>
        
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 text-center">
          Formulario Prueba
        </h1>

        <div className="flex flex-col gap-1">
          <FloatLabel>
            <InputText id="nombre" name="nombre" className="w-full p-inputtext-md border-green-300 rounded-md" />
            <label className="text-green-700">Nombre</label>
          </FloatLabel>
          { errors.nombre != null ? <Message 
            severity="error" 
            text={errors.nombre}
            className=" !bg-red-100 rounded-md px-2 py-1 mt-1"
          /> : ("")}
          
        </div>

        <div className="flex flex-col gap-1">
          <FloatLabel>
            <InputText id="categoria" name="categoria" type="text" className="w-full p-inputtext-md border-green-300 rounded-md" />
            <label className="text-green-700">Categoria</label>
          </FloatLabel>
           {errors.categoria != null ? <Message 
            severity="error" 
            text={errors.categoria}
            className=" !bg-red-100 rounded-md px-2 py-1 mt-1"
          />: ("")}
          
        </div>

        <div className="flex flex-col gap-1">
          <FloatLabel>
            <InputText id="cantidad" name="cantidad" type="number" className="w-full p-inputtext-md border-green-300 rounded-md" />
            <label className="text-green-700">Cantidad</label>
          </FloatLabel>
          { errors.cantidad != null ? <Message 
            severity="error" 
            text={errors.cantidad}
            className=" !bg-red-100 rounded-md px-2 py-1 mt-1"
          /> : ("")}
          
        </div>

        <Button 
          type="submit" 
          label="Submit" 
          className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-200"
        />
      </form>
    </div>
  );
}