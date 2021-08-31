import { Component, ElementRef, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';

// LINKS DE IDEIAS:
// https://codepen.io/stuehler/pen/pZMdKo
// http://raw.githack.com/MrRio/jsPDF/master/docs/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('content', {static: false}) el!: ElementRef;

  title = 'testepdf';

  printsimplePDF () {
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.addFont("Arimo-Regular.ttf", "Arimo", "normal");
    pdf.setFont("Arimo");
    pdf.setFontSize(28);
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("teste.pdf");
      }
    })
  }
}
