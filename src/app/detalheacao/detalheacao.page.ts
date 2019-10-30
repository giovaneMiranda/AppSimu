import { OnInit } from '@angular/core';
import { Component, NgZone } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Userbd } from '../interfaces/userbd';
import { AlertController, ModalController } from '@ionic/angular';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

import { ModalPage } from '../detalheacao/modal/modal.page'
import { Modal2Page } from '../detalheacao/modal2/modal2.page';



@Component({
  selector: 'app-detalheacao',
  templateUrl: './detalheacao.page.html',
  styleUrls: ['./detalheacao.page.scss'],
})

export class DetalheAcaoPage implements OnInit {
  comp: boolean;
  vend: boolean;
  public dataUser: Userbd;

  dataFromModal;
  private chart: am4charts.XYChart;
  constructor(private authService: AuthService,
    private afs: AngularFirestore,
    private modal1: ModalController,
    private modal2: ModalController,
    private zone: NgZone
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
  }

  ngOnInit() {
  }


  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("graf", am4charts.XYChart);
      chart.responsive.enabled = true;


      chart.dataSource.url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=PETR4.SA&interval=30min&apikey=OEY3540OQVKYKIWL&datatype=csv";
      chart.dataSource.parser = new am4core.CSVParser();


      // ... chart code goes here ...
      chart.paddingRight = 20;

      chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm:ss";

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;
      dateAxis.baseInterval = {
        "timeUnit": "minute",
        "count": 30
      }

      //dateAxis.skipEmptyPeriods = true;
      //dateAxis.dateFormats.setKey("day", "yyyy-MM-dd HH:mm:ss");

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.strictMinMax = true;
      valueAxis.tooltip.disabled = true;



      let series = chart.series.push(new am4charts.CandlestickSeries());
      series.dataFields.dateX = "col0";
      series.dataFields.valueY = "col4";
      series.dataFields.openValueY = "col1";
      series.dataFields.lowValueY = "col3";
      series.dataFields.highValueY = "col2";
      series.simplifiedProcessing = true;
      series.tooltipText = "Open:${openValueY.value}\nLow:${lowValueY.value}\nHigh:${highValueY.value}\nClose:${valueY.value}";



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

      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(lineSeries);

      chart.scrollbarX = scrollbarX;

      // chart.events.on("inited", function (ev) {
      //   dateAxis.zoomToDates(new Date(2019, 10, 29), new Date(2019, 10, 30));
      // });

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
    });
    modal.present();
  }

  async venda() {
    const modal2 = await this.modal2.create({
      component: Modal2Page,
      cssClass: 'modalVenda',
    });
    modal2.present();
  }

}
