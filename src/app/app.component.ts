import { Component, ElementRef, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';
import { Anton } from '../assets/fonts/teste';

// LINKS DE IDEIAS:
// https://codepen.io/stuehler/pen/pZMdKo
// http://raw.githack.com/MrRio/jsPDF/master/docs/
// https://jsfiddle.net/cxLzsp4r/2/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('content', {static: false}) el!: ElementRef;

  title = 'testepdf'; 

  printsimplePDF () {
    const doc = new jsPDF('p', 'pt', 'a4');

    doc.addFileToVFS('Anton-Regular.ttf', Anton);
    doc.addFont('Anton-Regular.ttf', 'Anton', 'normal');
    doc.setFont('Anton');
    doc.setFontSize(12);

    doc.text("Teste fonte fora do html!", 100, 100);

    console.log(this.el.nativeElement);

    doc.html(this.el.nativeElement, {
      callback: (doc) => {
        // doc.addFileToVFS('Anton-Regular.ttf', Anton); // TENTATIVAS EM VÃO DE INSERÇÃO DA FONTE NO HTML
        // doc.addFont('Anton-Regular.ttf', 'Anton', 'normal');
        // doc.setFont('Anton');
        doc.save("teste.pdf");
      }
    })
  }
}
