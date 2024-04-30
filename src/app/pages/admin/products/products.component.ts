import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

   isSidePanelVisible : boolean = true;


   products : any = [
      {
        "id": 1,
        "foto": "url_imagen_1",
        "nombre": "Arroz Blanco",
        "categoria": "Granos y Cereales",
        "descripcion": "Arroz blanco de grano largo, ideal para acompañar platos principales.",
        "precio": 2.5
      },
      {
        "id": 2,
        "foto": "url_imagen_2",
        "nombre": "Leche Entera",
        "categoria": "Lácteos",
        "descripcion": "Leche entera fresca, rica en calcio y nutrientes.",
        "precio": 1.8
      },
      {
        "id": 3,
        "foto": "url_imagen_3",
        "nombre": "Pan Integral",
        "categoria": "Panadería",
        "descripcion": "Pan integral elaborado con harina de trigo integral, saludable y delicioso.",
        "precio": 3.0
      },
      {
        "id": 4,
        "foto": "url_imagen_4",
        "nombre": "Huevos",
        "categoria": "Huevos y Lácteos",
        "descripcion": "Docena de huevos frescos, ideales para desayunos y preparaciones.",
        "precio": 2.2
      },
      {
        "id": 5,
        "foto": "url_imagen_5",
        "nombre": "Aceite de Oliva Extra Virgen",
        "categoria": "Aceites y Condimentos",
        "descripcion": "Aceite de oliva extra virgen de alta calidad, perfecto para aderezar ensaladas y cocinar.",
        "precio": 5.0
      },
      {
        "id": 6,
        "foto": "url_imagen_6",
        "nombre": "Pollo Entero",
        "categoria": "Carnes",
        "descripcion": "Pollo entero fresco, listo para cocinar al horno o a la parrilla.",
        "precio": 6.5
      },
      {
        "id": 7,
        "foto": "url_imagen_7",
        "nombre": "Yogur Natural",
        "categoria": "Lácteos",
        "descripcion": "Yogur natural sin azúcar añadido, rico en probióticos y calcio.",
        "precio": 1.2
      },
      {
        "id": 8,
        "foto": "url_imagen_8",
        "nombre": "Manzanas",
        "categoria": "Frutas",
        "descripcion": "Manzanas frescas, crujientes y llenas de vitaminas.",
        "precio": 2.0
      },
      {
        "id": 9,
        "foto": "url_imagen_9",
        "nombre": "Queso Cheddar",
        "categoria": "Quesos",
        "descripcion": "Queso cheddar madurado, perfecto para sandwiches y gratinados.",
        "precio": 4.5
      },
      {
        "id": 10,
        "foto": "url_imagen_10",
        "nombre": "Pasta Espagueti",
        "categoria": "Pasta",
        "descripcion": "Espagueti de trigo durum, listo para cocinar con tu salsa favorita.",
        "precio": 1.0
      },
      {
        "id": 11,
        "foto": "url_imagen_11",
        "nombre": "Atún en Conserva",
        "categoria": "Conservas",
        "descripcion": "Atún en conserva en aceite de oliva, fuente de proteínas y ácidos grasos omega-3.",
        "precio": 2.3
      },
      {
        "id": 12,
        "foto": "url_imagen_12",
        "nombre": "Zanahorias",
        "categoria": "Verduras",
        "descripcion": "Zanahorias frescas, ideales para ensaladas y guisos.",
        "precio": 1.5
      },
      {
        "id": 13,
        "foto": "url_imagen_13",
        "nombre": "Galletas de Avena",
        "categoria": "Galletas y Snacks",
        "descripcion": "Galletas de avena horneadas, perfectas para un tentempié saludable.",
        "precio": 2.8
      },
      {
        "id": 14,
        "foto": "url_imagen_14",
        "nombre": "Lechuga",
        "categoria": "Verduras",
        "descripcion": "Lechuga fresca, crujiente y llena de vitaminas.",
        "precio": 1.0
      },
      {
        "id": 15,
        "foto": "url_imagen_15",
        "nombre": "Café Molido",
        "categoria": "Café y Té",
        "descripcion": "Café molido de tueste medio, aromático y delicioso.",
        "precio": 4.0
      },
      {
        "id": 16,
        "foto": "url_imagen_16",
        "nombre": "Pimiento Rojo",
        "categoria": "Verduras",
        "descripcion": "Pimiento rojo fresco, perfecto para ensaladas y salteados.",
        "precio": 2.2
      },
      {
        "id": 17,
        "foto": "url_imagen_17",
        "nombre": "Mantequilla",
        "categoria": "Lácteos",
        "descripcion": "Mantequilla de alta calidad, ideal para cocinar y untar.",
        "precio": 3.5
      },
      {
        "id": 18,
        "foto": "url_imagen_18",
        "nombre": "Tomates",
        "categoria": "Verduras",
        "descripcion": "Tomates frescos y jugosos, perfectos para ensaladas y salsas.",
        "precio": 2.3
      },
      {
        "id": 19,
        "foto": "url_imagen_19",
        "nombre": "Salmon Fresco",
        "categoria": "Pescados",
        "descripcion": "Filetes de salmón fresco, rico en ácidos grasos omega-3.",
        "precio": 8.0
      },
      {
        "id": 20,
        "foto": "url_imagen_20",
        "nombre": "Papas",
        "categoria": "Verduras",
        "descripcion": "Papas frescas, perfectas para hervir, freír o asar.",
        "precio": 1.8
      },
      {
        "id": 21,
        "foto": "url_imagen_21",
        "nombre": "Naranjas",
        "categoria": "Frutas",
        "descripcion": "Naranjas frescas y jugosas, ricas en vitamina C.",
        "precio": 3.0
      },
      {
        "id": 22,
        "foto": "url_imagen_22",
        "nombre": "Pasta Integral",
        "categoria": "Pasta",
        "descripcion": "Pasta integral de trigo, rica en fibra y nutrientes.",
        "precio": 1.2
      },
      {
        "id": 23,
        "foto": "url_imagen_23",
        "nombre": "Cereal de Maíz",
        "categoria": "Cereales para el Desayuno",
        "descripcion": "Cereal de maíz crujiente, perfecto para el desayuno con leche.",
        "precio": 3.2
      },
      {
        "id": 24,
        "foto": "url_imagen_24",
        "nombre": "Pechuga de Pavo",
        "categoria": "Embutidos",
        "descripcion": "Pechuga de pavo ahumada, baja en grasas y alta en proteínas.",
        "precio": 5.0
      },
      {
        "id": 25,
        "foto": "url_imagen_25",
        "nombre": "Cerveza Artesanal",
        "categoria": "Bebidas Alcohólicas",
        "descripcion": "Cerveza artesanal de sabor intenso y aroma único.",
        "precio": 3.5
      },
      {
        "id": 26,
        "foto": "url_imagen_26",
        "nombre": "Miel Natural",
        "categoria": "Endulzantes",
        "descripcion": "Miel natural sin aditivos, ideal para endulzar infusiones y postres.",
        "precio": 4.0
      },
      {
        "id": 27,
        "foto": "url_imagen_27",
        "nombre": "Pimiento Verde",
        "categoria": "Verduras",
        "descripcion": "Pimiento verde fresco, perfecto para ensaladas y guisos.",
        "precio": 1.8
      },
      {
        "id": 28,
        "foto": "url_imagen_28",
        "nombre": "Pan de Molde Integral",
        "categoria": "Panadería",
        "descripcion": "Pan de molde integral, perfecto para sandwiches saludables.",
        "precio": 2.5
      },
      {
        "id": 29,
        "foto": "url_imagen_29",
        "nombre": "Chocolate Negro",
        "categoria": "Chocolates y Dulces",
        "descripcion": "Tableta de chocolate negro, rico en antioxidantes y sabor intenso.",
        "precio": 3.0
      },
      {
        "id": 30,
        "foto": "url_imagen_30",
        "nombre": "Cebollas",
        "categoria": "Verduras",
        "descripcion": "Cebollas frescas, ideales para salteados y guisos.",
        "precio": 1.2
      }
      ]
}
