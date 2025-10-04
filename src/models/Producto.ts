export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagenUrl?: string;
  categoria?: string;
}

// Ejemplo de uso:
// const productoEjemplo: Producto = {
//   id: '001',
//   nombre: 'Cámara de seguridad',
//   descripcion: 'Cámara HD con visión nocturna',
//   precio: 1200,
//   imagenUrl: 'assets/camara.jpg',
//   categoria: 'Cámaras'
// };
