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
import MiniCarta from "../componentes/miniCarta";
import { Dialog } from "primereact/dialog";

interface Product {
    code: string;
    name: string;
    category: string;
    quantity: number;
}

export default function Index() {
    const {products} = useStore()
    const [visible, setVisible] = useState(false)
    const [globalFilter, setGlobalFilter] = useState<string | null>(null);

    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

    

    return (
        <div className="xs:text-md text-center w-full
        flex flex-col !gap-20 justify-evenly 
        items-center min-h-[80vh] flex-1 max-w-7xl">
                
            
            {/* HERO */}
            <div id="indexHero" className="w-full flex items-center md:!h-[50dvh] md:flex-row flex-col px-10 mt-10">
                <div id="indexHeroText" className="flex-1 flex flex-col h-full justify-center !gap-4">
                    <p className="max-w-7xl  text-5xl font-bold whitespace-normal">
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

            {/* VALORACIONES */}
            <div className="w-full flex flex-col justify-center items-center !gap-6 p-4 px-10">
                <p className="max-w-7xl text-5xl font-bold whitespace-normal text-center">Conoce la <span className="text-gradient ">opinión</span> de nuestros clientes</p>
                <div id="valoraciones" className="flex justify-between flex-col md:flex-row">
                    <CartaValoracion />
                    <CartaValoracion />
                    <CartaValoracion />
                </div>
                <p className="font-bold text-blue-500"><Link to={"/"}>Ver todas las valoraciones</Link></p>
            </div>

            {/* MINI CARTAS */} 
            <div className="w-full flex flex-col !gap-10 px-10">
                
                <h1 className="text-4xl md:text-5xl font-bold text-center">
                    Sencillamente, <span className="text-gradient ">el mejor </span></h1>

                
                <div className="grid-mini w-full !gap-10">


                    <div className="flex flex-col !gap-6 rounded-xl ">
                        <i className="pi pi-file"></i>
                        <MiniCarta titulo="Facturacion" texto="Todo el ciclo de compra-venta completo, lleva un control de tus pedidos, albaranes, tickets y vincula estos documentos entre sí"></MiniCarta>
                    </div>
                    
                    <div className="flex flex-col !gap-6 ">
                        <i className="pi pi-credit-card"></i>
                        <MiniCarta titulo="Facturacion" texto="Todo el ciclo de compra-venta completo, lleva un control de tus pedidos, albaranes, tickets y vincula estos documentos entre sí"></MiniCarta>
                    </div>
                    
                    <div className="flex flex-col !gap-6">
                        <i className="pi pi-receipt text-blue-900"></i>
                        <MiniCarta titulo="Facturacion" texto="Todo el ciclo de compra-venta completo, lleva un control de tus pedidos, albaranes, tickets y vincula estos documentos entre sí"></MiniCarta>
                    </div>
                    
                    <div className="flex flex-col !gap-6">
                        <i className="pi pi-receipt"></i>
                        <MiniCarta titulo="Facturacion" texto="Todo el ciclo de compra-venta completo, lleva un control de tus pedidos, albaranes, tickets y vincula estos documentos entre sí"></MiniCarta>
                    </div>  
                    
                    <div className="flex flex-col !gap-6">
                        <i className="pi pi-plus"></i>
                        <MiniCarta titulo="Facturacion" texto="Todo el ciclo de compra-venta completo, lleva un control de tus pedidos, albaranes, tickets y vincula estos documentos entre sí"></MiniCarta>
                    </div>  
                    
                    <div className="flex flex-col !gap-6">
                        <i className="pi pi-receipt"></i>
                        <MiniCarta titulo="Facturacion" texto="Todo el ciclo de compra-venta completo, lleva un control de tus pedidos, albaranes, tickets y vincula estos documentos entre sí"></MiniCarta>
                    </div>  
                    
                    <div className="flex flex-col !gap-6">
                        <i className="pi pi-plus"></i>
                        <MiniCarta titulo="Facturacion" texto="Todo el ciclo de compra-venta completo, lleva un control de tus pedidos, albaranes, tickets y vincula estos documentos entre sí"></MiniCarta>
                    </div>  
                    
                    <div className="flex flex-col !gap-6">
                        <i className="pi pi-plus"></i>
                        <MiniCarta titulo="Facturacion" texto="Todo el ciclo de compra-venta completo, lleva un control de tus pedidos, albaranes, tickets y vincula estos documentos entre sí"></MiniCarta>
                    </div>  
                </div>



            </div>



            {/* Otros */}
            <div className=" bg-redondo !py-50 flex flex-col justify-center items-center !gap-10">

                <div id="ciclo_facturacion_texto" className="max-w-xl flex flex-col !gap-5 justify-center items-center p-5">
                    
                    <h1 className="text-center bg-blue-100 text-blue-900 text-xl md:w-md w-2xs rounded-2xl p-1">Todo lo que necesitas</h1>
                    <h2 className="text-center  text-5xl font-bold"><span className="text-gradient ">Ciclo de facturación </span> completo</h2>
                    <p className="text-center">Gesvision es el mejor software para ópticas, especialmente diseñado para <b>gestionar tu negocio</b>. Hemos pensado en <b>todo lo que tu óptica necesita</b>  para que no tengas que preocuparte por nada.</p>

                </div>


                <div id="ciclo_facturacion_hero" className="flex md:flex-row flex-col  px-10 !gap-10  justify-center items-center max-w-7xl">
                    <img src={gv1} alt="" className="w-1/2 h-1/2" />
                    <div className="flex flex-col !gap-10 flex-grow">

                        <MiniCarta titulo="Control total del proceso de la venta" texto="Así comiences la venta desde un presupuesto o desde unticket podrás generar automáticamente cualquier documento asociado al proceso de venta."></MiniCarta>

                        <MiniCarta titulo="Control total del proceso de la venta" texto="Así comiences la venta desde un presupuesto o desde unticket podrás generar automáticamente cualquier documento asociado al proceso de venta."></MiniCarta>

                        <MiniCarta titulo="Control total del proceso de la venta" texto="Así comiences la venta desde un presupuesto o desde unticket podrás generar automáticamente cualquier documento asociado al proceso de venta."></MiniCarta>

                    </div>

                </div>

                
                <Button className="button-gradient"> Saber mas</Button>


                <div className="w-full md:max-w-7xl mb-2 flex flex-col !gap-5 px-10" >
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

                <Button className="button-gradient" onClick={()  => setVisible(true)}> Abrir formulario </Button>
                <Dialog visible={visible} 
                    modal
                    dismissableMask={true}
                    style={{ width: '50vw' }} 
                    onHide={() => {if (!visible) return; setVisible(false); }}
                    content={() => (
                        
                    <Formulario />
                    )}>
                
                
                </Dialog>


            </div>
        </div>
    );
}