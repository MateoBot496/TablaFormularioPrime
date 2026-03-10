export default function CartaValoracion(){
    return(
        <div className="bg-blue-50 p-5 font-arial flex flex-col !gap-3">
            <div className="font-bold !gap-3 flex justify-center items-center flex-col xl:flex-row "> 
                <div className="flex justify-center items-center">

                    <i className="pi pi-user border-1 rounded-full p-3" />
                    <p>Multiopticas</p>
                </div>

                <div className="flex">   
        
                    <i className="pi pi-star text-green-500" />
                    <i className="pi pi-star text-green-500" />
                    <i className="pi pi-star text-green-500" />
                    <i className="pi pi-star text-green-500" />
                    <i className="pi pi-star text-green-500" />
                </div>
            </div>
            <div>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore necessitatibus possimus ..."</div>
            <div className="font-bold"> Vicente Martinez</div>
        </div>
    )
}