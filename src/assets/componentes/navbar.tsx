import { Menubar } from "primereact/menubar";
import { Menu } from "primereact/menu";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";
import type { MenuItem } from "primereact/menuitem";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();
  const profileMenu = useRef<Menu>(null);

  const items: MenuItem[] = [
    {
      label: "Dashboard",
      icon: "pi pi-home",
      command: () => navigate("/")
    },
    {
      label: "Usuarios",
      icon: "pi pi-users",
      items: [
        {
          label: "Lista usuarios",
          icon: "pi pi-list",
          command: () => navigate("/usuarios")
        },
        {
          label: "Crear usuario",
          icon: "pi pi-user-plus",
          command: () => navigate("/usuarios/crear")
        }
      ]
    },
    {
      label: "Productos",
      icon: "pi pi-box",
      items: [
        {
          label: "Lista productos",
          icon: "pi pi-list",
          command: () => navigate("/productos")
        },
        {
          label: "Crear producto",
          icon: "pi pi-plus",
          command: () => navigate("/productos/crear")
        }
      ]
    },
    {
      label: "Reportes",
      icon: "pi pi-chart-bar",
      command: () => navigate("/reportes")
    }
  ];

  const profileItems: MenuItem[] = [
    { label: "Perfil", icon: "pi pi-user", command: () => navigate("/perfil") },
    { label: "Configuración", icon: "pi pi-cog", command: () => navigate("/config") },
    { separator: true },
    { label: "Cerrar sesión", icon: "pi pi-sign-out", command: () => navigate("/logout") }
  ];

  const start = (
    <span
      className="text-xl font-bold text-blue-600 cursor-pointer"
      onClick={() => navigate("/")}
    >
      PrimeApp
    </span>
  );

  const end = (
    <div className="flex items-center gap-3">

      <span className="hidden md:flex justify-center items-center gap-2">
        <i className="pi pi-search" />
        <InputText placeholder="Buscar..." className="p-inputtext-sm" />
      </span>

      <Avatar
        icon="pi pi-user"
        shape="circle"
        className="cursor-pointer bg-blue-500 text-white"
        onClick={(e) => profileMenu.current?.toggle(e)}
      />

      <Menu model={profileItems} popup ref={profileMenu} />
    </div>
  );

  return (
    <div className="shadow-md border-b border-gray-200">
      <Menubar
        model={items}
        start={start}
        end={end}

  className="w-full flex justify-between"
      />
    </div>
  );
}