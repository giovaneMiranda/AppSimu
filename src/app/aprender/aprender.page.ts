import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aprender',
  templateUrl: './aprender.page.html',
  styleUrls: ['./aprender.page.scss'],
})
export class AprenderPage implements OnInit {
  
  componentes:  Componente[] = [
    {
      name: 'Action Sheet',
      redirectTo: '/configuracao'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
}

interface Componente{
  name: string;
  redirectTo: string;
}