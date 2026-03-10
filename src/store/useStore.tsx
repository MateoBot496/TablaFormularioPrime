import { create } from "zustand"
import { persist } from "zustand/middleware"

export type Producto = {
  code: string
  name: string
  category: string
  quantity: number
}

type Store = {
  products: Producto[]
  addProducts: (newProduct: Producto) => void
  deleteProduct: (code: string) => void
  setProducts: (productos: Producto[]) => void
}

export const useStore = create<Store>()(
  persist(
    (set) => ({
      products: [
        { code: "1", name: "Patata", category: "Vegetal", quantity: 20 },
        { code: "2", name: "Tomate", category: "Vegetal", quantity: 35 },
        { code: "3", name: "Manzana", category: "Fruta", quantity: 50 },
        { code: "4", name: "Leche", category: "Lácteo", quantity: 15 },
        { code: "5", name: "Pan", category: "Panadería", quantity: 40 },
        { code: "6", name: "Zanahoria", category: "Vegetal", quantity: 25 },
        { code: "7", name: "Huevos", category: "Lácteo", quantity: 60 },
        { code: "8", name: "Queso", category: "Lácteo", quantity: 10 }
      ],

      addProducts: (newProduct) =>
        set((state) => ({
          products: [...state.products, newProduct]
        })),

      deleteProduct: (code) =>
        set((state) => ({
          products: state.products.filter((p) => p.code !== code)
        })),

      setProducts: (productos) =>
        set({ products: productos })
    }),
    {
      name: "tienda",
    }
  )
)