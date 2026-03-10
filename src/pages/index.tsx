import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import Formulario from "../componentes/formulario";
import { useStore } from "../store/useStore";
import gv1 from "../assets/gv1.png";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import CartaValoracion from "../componentes/cartaValoracion";

interface Product {
    code: string;
    name: string;
    category: string;
    quantity: number;
}

export default function Index() {
    const {products} = useStore()

    const [globalFilter, setGlobalFilter] = useState<string | null>(null);

    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

    

    return (
        <div className="w-full flex flex-col !gap-20 p-4 md:p-10 justify-evenly items-center min-h-[80vh] flex-1 ">
            
            <div id="indexHero" className="w-full flex flex-col md:flex-row items-center !gap-10 ">
                <div id="indexHeroText" className="flex-1 flex flex-col !gap-3 h-full justify-evenly">
                    <p className="max-w-7xl text-5xl font-bold whitespace-normal">
                    El <span className="text-gradient ">software para ópticas </span> más avanzado
                    </p>
                    <p className="text-xl">Gesvision te da todo lo que tu óptica necesita, en un solo lugar.</p>
                    <p className="font-bold text-md flex gap-2 items-center"><i className="pi pi-check text-blue-500 " />Gestiona tus ventas y gastos de manera eficáz</p>
                    <p className="font-bold text-md flex gap-2 items-center"><i className="pi pi-check text-blue-500" />Lleva un seguimiento completo de tus clientes y sus exámenes de optometría y contactología</p>
                    <Button className="button-gradient"> Pruebalo gratis </Button>
                </div>
                <div className="flex-1">
                    <img src={gv1} alt="Imagen principal" className="w-full h-auto" />
                </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center !gap-6 p-4">
                <p className="max-w-7xl text-5xl font-bold whitespace-normal">Conoce la <span className="text-gradient ">opinión</span> de nuestros clientes</p>
                <div id="valoraciones" className="flex justify-between">
                    <CartaValoracion />
                    <CartaValoracion />
                    <CartaValoracion />
                </div>
                <p className="font-bold text-blue-500"><Link to={"/"}>Ver todas las valoraciones</Link></p>
            </div>

            <div className="w-full md:max-w-7xl mb-2 flex flex-col !gap-5" >
                <span className="w-full flex justify-center items-center ">
                    <i className="pi pi-search" />
                    <InputText
                        placeholder="Buscar..."
                        value={globalFilter || ""}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                        className="w-full"
                    />
                </span>

                <DataTable
                    value={products}
                    paginator
                    rows={5}
                    removableSort
                    className="rounded-xl overflow-hidden shadow-md w-full md:max-w-7xl"
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
            
            </div>

            <Formulario />
        </div>
    );
}