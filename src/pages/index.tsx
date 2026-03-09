import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import Formulario from "../assets/componentes/formulario";

interface Product {
    code: string;
    name: string;
    category: string;
    quantity: number;
}

export default function Index() {
    const [products, setProducts] = useState<Product[]>([
        { code: "P001", name: "Patata", category: "Vegetal", quantity: 20 },
        { code: "P002", name: "Tomate", category: "Vegetal", quantity: 35 },
        { code: "P003", name: "Manzana", category: "Fruta", quantity: 50 },
        { code: "P004", name: "Leche", category: "Lácteo", quantity: 15 },
        { code: "P005", name: "Pan", category: "Panadería", quantity: 40 },
        { code: "P006", name: "Zanahoria", category: "Vegetal", quantity: 25 },
        { code: "P007", name: "Huevos", category: "Lácteo", quantity: 60 },
        { code: "P008", name: "Queso", category: "Lácteo", quantity: 10 }
    ]);

    const [globalFilter, setGlobalFilter] = useState<string | null>(null);

    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

    

    return (
        <div className="w-full flex flex-col !gap-4 p-4 md:p-10 justify-center items-center min-h-[80vh]">
            
            <div className="w-full max-w-6xl mb-2">
                <span className="w-full flex justify-center items-center ">
                    <i className="pi pi-search" />
                    <InputText
                        placeholder="Buscar..."
                        value={globalFilter || ""}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                        className="w-full"
                    />
                </span>
            </div>

            <DataTable
                value={products}
                paginator
                rows={5}
                removableSort
                className="rounded-xl overflow-hidden shadow-md w-full max-w-6xl"
                globalFilter={globalFilter || undefined}
                selectionMode="checkbox"
                selection={selectedProducts}
                onSelectionChange={(e) => {setSelectedProducts(e.value)}}
                dataKey="code"
            >
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                <Column field="code" header="Código" sortable filter filterPlaceholder="Filtrar por código" />
                <Column field="name" header="Nombre" sortable filter filterPlaceholder="Filtrar por nombre" />
                <Column field="category" header="Categoría" sortable filter filterPlaceholder="Filtrar por categoría" />
                <Column field="quantity" header="Cantidad" sortable filter filterPlaceholder="Filtrar por cantidad" />
            </DataTable>

            <Formulario />
        </div>
    );
}