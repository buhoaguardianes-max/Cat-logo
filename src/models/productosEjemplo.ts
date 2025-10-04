import { Producto } from './Producto';

export const productosEjemplo: Producto[] = [
  {
    id: '001',
    nombre: 'Cámara de seguridad',
    descripcion: 'Cámara HD con visión nocturna',
    precio: 1200,
    imagenUrl: 'assets/camara.jpg',
    categoria: 'Cámaras'
  },
  {
    id: '002',
    nombre: 'Kit de alarma',
    descripcion: 'Kit completo de alarma para hogar',
    precio: 2500,
    imagenUrl: 'assets/alarma.jpg',
    categoria: 'Alarmas'
  },
  {
    id: '003',
    nombre: 'Sensor de movimiento',
    descripcion: 'Sensor inalámbrico de alta sensibilidad',
    precio: 800,
    imagenUrl: 'assets/sensor.jpg',
    categoria: 'Sensores'
  }
];
