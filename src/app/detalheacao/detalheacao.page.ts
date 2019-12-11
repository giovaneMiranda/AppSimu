import { OnInit } from '@angular/core';
import { Component, NgZone } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Userbd } from '../interfaces/userbd';
import { AlertController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import *  as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

import { ModalPage } from '../detalheacao/modal/modal.page'
import { Modal2Page } from '../detalheacao/modal2/modal2.page';
import { OrdemCompra } from '../interfaces/ordem-compra';
import { HttpClient } from '@angular/common/http';
import { Acaofix } from '../interfaces/acaofix';


@Component({
  selector: 'app-detalheacao',
  templateUrl: './detalheacao.page.html',
  styleUrls: ['./detalheacao.page.scss'],
})

export class DetalheAcaoPage implements OnInit {
  comp: boolean;
  vend: boolean;
  public dataUser: Userbd;
  private idAcao: String = null;
  dataFromModal;
  private chart: am4charts.XYChart;
  private ordemCompra: OrdemCompra;
  public petr4: Acaofix = {valorOpen:30.33,valorClose:30.31,valorHigh:30.36,valorLow:30.30};
  public oibr3: Acaofix = {valorOpen:0.94,valorClose:0.94,valorHigh:0.94,valorLow:0.93};
  public vvar3: Acaofix = {valorOpen:10.12,valorClose:10.10,valorHigh:10.13,valorLow:10.08};
  public itsa4: Acaofix = {valorOpen:13.60,valorClose:13.65,valorHigh:13.67,valorLow:13.6};
  public bbas3: Acaofix = {valorOpen:48.66,valorClose:48.6,valorHigh:48.72,valorLow:48.57};
  public sanb11: Acaofix = {valorOpen:44.43,valorClose:44.44,valorHigh:44.50,valorLow:444.39};
  public bpan4: Acaofix = {valorOpen:9.17,valorClose:9.2,valorHigh:9.21,valorLow:9.17};
  public acaoFix: Acaofix={};


  constructor(private authService: AuthService,
    private afs: AngularFirestore,
    private modal1: ModalController,
    private modal2: ModalController,
    private zone: NgZone,
    private activatedRoute: ActivatedRoute,
    public http: HttpClient
  ) {

    this.authService.getAuth().onAuthStateChanged(user => {
      if (user) {
        this.afs.collection('User')
          .doc(user.uid)
          .valueChanges()
          .subscribe(docUser => {
            this.savemoney(docUser)
          });
      }
    });

    this.idAcao = this.activatedRoute.snapshot.params['id'];
    
    if(this.idAcao==="PETR4.SA"){
      this.acaoFix=  this.petr4; 
    }

    if(this.idAcao==="OIBR3.SA"){
      this.acaoFix=  this.oibr3;
    }

    if(this.idAcao==="VVAR3.SA"){
      this.acaoFix=   this.vvar3;
    }

    if(this.idAcao==="ITSA4.SA"){
      this.acaoFix=   this.itsa4;
    }

    if(this.idAcao==="BBAS3.SA"){
      this.acaoFix=   this.bbas3;
    }

    if(this.idAcao==="SANB11.SA"){
      this.acaoFix=   this.sanb11;
    }


    if(this.idAcao==="BPAN4.SA"){
      this.acaoFix=   this.bpan4;
    }

    // const newUserObject = Object.assign({}, this.userRegister);

   
    
  }

  ngOnInit() {
    
  }


  ngAfterViewInit() {


    this.zone.runOutsideAngular(() => {


      let chart = am4core.create("graf", am4charts.XYChart);
      chart.paddingRight = 20;
      am4core.options.minPolylineStep = 10;

      chart.dataSource.url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + this.idAcao + "&interval=15min&outputsize=compact&apikey=OEY3540OQVKYKIWL&datatype=csv";
      chart.dataSource.parser = new am4core.CSVParser();
      chart.dataSource.parser.options['reverse'] = true;
      chart.dataSource.parser.options['skipRows'] = 1;
      chart.dataSource.updateCurrentData = true;
      chart.dataSource.reloadFrequency = 150000;
      
     

      chart.leftAxesContainer.layout = "vertical"

      chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm:ss";

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      //dateAxis.renderer.grid.template.location = 0;

      dateAxis.baseInterval = {
        "timeUnit": "minute",
        "count": 15
      };
      dateAxis.skipEmptyPeriods = true;
      dateAxis.dateFormats.setKey("day", "MMM dd");


      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;

      let series = chart.series.push(new am4charts.CandlestickSeries());
      series.dataFields.dateX = "col0";
      series.dataFields.valueY = "col4";
      series.dataFields.openValueY = "col1";
      series.dataFields.lowValueY = "col3";
      series.dataFields.highValueY = "col2";
      series.simplifiedProcessing = true;
      series.tooltipText = "Abertura:R${openValueY.value}\nBaixa:R${lowValueY.value}\nAlta:R${highValueY.value}\nFechamento:R${valueY.value}";

      chart.cursor = new am4charts.XYCursor();

      
      
      // a separate series for scrollbar
      let lineSeries = chart.series.push(new am4charts.LineSeries());
      lineSeries.dataFields.dateX = "col0";
      lineSeries.dataFields.valueY = "col4";
      // need to set on default state, as initially series is "show"
      lineSeries.defaultState.properties.visible = false;

      // hide from legend too (in case there is one)
      lineSeries.hiddenInLegend = true;
      lineSeries.fillOpacity = 0.5;
      lineSeries.strokeOpacity = 0.5;

      let scrollbarX = new am4core.Scrollbar();;

      chart.scrollbarX = scrollbarX;
      dateAxis.start = 0.7;
      dateAxis.keepSelection = true;
      this.chart = chart;
     
    });
  }


  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
  savemoney(doc) {
    this.dataUser = doc;
  }

  async compra() {
    const modal = await this.modal1.create({
      component: ModalPage,
      cssClass: 'modalCompra',
      componentProps: { 
        id_emp: this.idAcao,
        fechamento: this.acaoFix.valorClose
      }
    });
    modal.present();
  }

  async venda() {
    const modal2 = await this.modal2.create({
      component: Modal2Page,
      cssClass: 'modalVenda',
      componentProps: { 
        id_emp: this.idAcao,
        fechamento: this.acaoFix.valorClose
      }
    });
    modal2.present();
  }

}
