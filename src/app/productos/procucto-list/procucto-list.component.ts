import { Component } from '@angular/core';
import { IProductos } from '../iproductos';

@Component({
  selector: 'app-procucto-list',
  templateUrl: './procucto-list.component.html',
  styleUrls: ['./procucto-list.component.css']
})
export class ProcuctoListComponent {

  imageWidth:number=50;
  imageMargin: number=2;
  muestrImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestrImg=!this.muestrImg;
  }

  productos:IProductos[]=[

    {
    "Modelo":'Sentra',
    "Descripcion":"4 puertas Familiar",
    "year":"febrero 2 2022",
    "Precio":12000,
    "Marca":"Nisssan",
    "Color":"Negro",
    "Imagen":"https://acroadtrip.blob.core.windows.net/publicaciones-imagenes/Large/mazda/3-sedan/mx/RT_PU_712d9218a08c4d67b62963ba6477b02b.webp"
    },

    {
      "Modelo":'Tesla',
      "Descripcion":"2 puertas Familiar",
      "year":"febrero 2 2021",
      "Precio":14000,
      "Marca":"WILSON",
      "Color":"Azul",
      "Imagen":"https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2020/09/hipertextual-tesla-anuncia-model-s-plaid-con-830-km-autonomia-y-aceleracion-0-100-kmh-menos-2-segundos-2020753048-scaled.jpg?fit=2560%2C1645&quality=50&strip=all&ssl=1"
    },
    
    {
      "Modelo":'Mazda',
      "Descripcion":"2 puertas Familiar",
      "year":"febrero 2 2022",
      "Precio":140000,
      "Marca":"Wilson",
      "Color":"Rojo",
      "Imagen":""
    }

  ]

}
