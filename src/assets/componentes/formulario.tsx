import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Message } from "primereact/message";

export default function Formulario() {
  return (
    <div className="flex justify-center items-center w-full">
      <form className="flex flex-col !gap-7 p-4 border-2 border-green-300 rounded-xl 
        shadow-2xl bg-white w-full md:max-w-xl">
        
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 text-center">
          Formulario Prueba
        </h1>

        <div className="flex flex-col gap-1">
          <FloatLabel>
            <InputText id="username" className="w-full p-inputtext-md border-green-300 rounded-md" />
            <label className="text-green-700">Username</label>
          </FloatLabel>
          <Message 
            severity="error" 
            text="Username is required" 
            className=" !bg-red-100 rounded-md px-2 py-1 mt-1"
          />
        </div>

        <div className="flex flex-col gap-1">
          <FloatLabel>
            <InputText id="email" type="email" className="w-full p-inputtext-md border-green-300 rounded-md" />
            <label className="text-green-700">Email</label>
          </FloatLabel>
          <Message 
            severity="error" 
            text="Email is required" 
            className=" !bg-red-100 rounded-md px-2 py-1 mt-1"
          />
        </div>

        <div className="flex flex-col gap-1">
          <FloatLabel>
            <InputText id="password" type="password" className="w-full p-inputtext-md border-green-300 rounded-md" />
            <label className="text-green-700">Password</label>
          </FloatLabel>
          <Message 
            severity="error" 
            text="Password is required" 
            className=" !bg-red-100 rounded-md px-2 py-1 mt-1"
          />
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