# Estructura de la actividad

```
inventario-riwi/
├── index.html                    # Punto de entrada del navegador
├── src/
│   ├── types/
│   │   ├── ids.types.ts          # ProductId, SupplierId, InventoryId
│   │   ├── product.types.ts      # ProductName, SKU, Price, Quantity, ProductCategory
│   │   ├── supplier.types.ts     # Supplier, SupplierId relacionados
│   │   ├── inventory.types.ts    # Movimientos (entradas/salidas), Tuplas
│   │   └── index.ts              # Reexporta todos los tipos (barrel file)
│   │
│   ├── models/
│   │   ├── Product.ts            # interface Product / clase Product
│   │   ├── Supplier.ts           # interface Supplier / clase Supplier
│   │   └── InventoryMovement.ts  # Estructura de movimientos de stock
│   │
│   ├── utils/
│   │   ├── validators.ts         # Validaciones (categoría válida, stock bajo, etc.)
│   │   └── typeGuards.ts         # Funciones type guard (is ProductCategory, etc.)
│   │
│   ├── services/
│   │   ├── ProductService.ts     # Registrar, consultar, actualizar productos
│   │   ├── SupplierService.ts    # Gestión de proveedores
│   │   └── InventoryManager.ts   # Clase central: stock, alertas, entradas/salidas
│   │
│   ├── data/
│   │   └── mockData.ts           # Datos de prueba (productos/proveedores de ejemplo)
│   │
│   ├── ui/
│   │   ├── renderProducts.ts     # Pinta la tabla/lista de productos en el DOM
│   │   ├── renderSuppliers.ts    # Pinta proveedores
│   │   ├── renderAlerts.ts       # Pinta alertas de bajo stock
│   │   └── dom.ts                # Helpers genéricos (querySelector, crear nodos, etc.)
│   │
│   └── main.ts                   # Punto de entrada: conecta services + ui, se importa desde index.html
│
├── styles/
│   └── main.css                  # Estilos del renderizado
│
├── tests/                        # (opcional)
│
├── tsconfig.json
├── package.json
└── README.md
```