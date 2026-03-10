import Navbar from "../componentes/navbar";
import { BrowserRouter } from "react-router-dom";


type Props = {
  children: React.ReactNode;
};

export default function DefaultLayout({ children }: Props) {
  return (
    
    <BrowserRouter>

        <div className="w-full bg-gv min-h-screen flex flex-col">
            <Navbar />
            
            {children}
        </div>

    </BrowserRouter>
    
  );
}