import { Component, OnInit, AfterViewInit, NgZone, ChangeDetectorRef, ViewRef } from '@angular/core';
import Prism = require('prismjs');

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements AfterViewInit {

  constructor(
  ) {}

  ngAfterViewInit() {
    Prism.highlightAll();
  }
}
