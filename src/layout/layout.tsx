import Navbar from "../componentes/navbar";
import { BrowserRouter } from "react-router-dom";


type Props = {
  children: React.ReactNode;
};

export default function DefaultLayout({ children }: Props) {
  return (
    
    <BrowserRouter>

        <div className="w-full h-full flex flex-col bg-gv justify-center items-center">
            <Navbar />
            
            {children}
        </div>

    </BrowserRouter>
    
  );
}