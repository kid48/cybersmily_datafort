import { Cp2020NetrunDeck } from './../netrun/cp2020-netrun-deck';
import { Cp2020ProgramList } from './../netrun/cp2020-program-list';
import { Cp2020DeckManager } from './../netrun/cp2020-deck-manager';
import * as jsPDF from 'jspdf';
import { NetRunProgram } from '../netrun';
import { LinkedList } from 'ngx-bootstrap';

export class DeckManagerToPdf {
  private static _left = 5;
  private static _top = 15;
  private static _midPage = 105;
  private static _fontSize = 11;

  static generatePdf( manager: Cp2020DeckManager) {
    const doc: jsPDF = new jsPDF({
      orientation: 'p',
      format: 'a4',
      unit: 'mm'
    });
    doc.setFontSize(this._fontSize);
    let line = this._top;
    line = this.addHeader(doc, 'CYBERPUNK 2020 DECK MANAGER', line);

    line = this.addHeader(doc, 'DECK', line);
    line = this.addDeck(doc, manager.deck, line);

    line = this.addHeader(doc, 'PROGRAMS', line);
    line = this.addProgramList(doc, manager.programList, line);

    doc.save('CP_DeckManager.pdf');
  }

  private static addHeader(doc: jsPDF, text: string, line: number): number {
    doc.setFontStyle('bold');
    doc.setFontSize(15);
    doc.text(text, this._midPage, line, 'center');
    doc.setFontSize(this._fontSize);
    line += 20;
    return line;
  }

  private static addDeck(doc: jsPDF, deck: Cp2020NetrunDeck, line: number): number {
    doc.setFontStyle('bold');
    doc.setFontSize(13);
    doc.text(deck.name, this._left, line);
    doc.setFontStyle('normal');
    doc.text(`${deck.cost}eb`, this._left + 190, line, 'right');
    doc.setFontSize(this._fontSize);
    line += 7;
    doc.text(`Chassis: ${deck.type.name}`, this._left, line);
    line += 7;
    doc.text(`Speed: +${deck.speed}`, this._left, line);
    doc.text(`DataWall: ${deck.dataWall}`, this._left + 60, line, 'right');
    doc.text(`MU: ${deck.mu}`, this._left + 120, line, 'right');
    line += 7;
    const options  = deck.options.map(o => (o.count && o.count > 1 ? o.count + ' ' : '' ) + o.name).join(', ');
    const optList: Array<string> = doc.splitTextToSize(`Options: ${options}`, 200);
    optList.forEach( d => {
      doc.text(d, this._left, line);
      line += 7;
    });
    line += 2;

    const desc: Array<string> = doc.splitTextToSize(`  ${deck.description}`, 200);
    desc.forEach( d => {
      doc.text(d, this._left, line);
      line += 7;
    });
    line += 2;

    return line;
  }

  private static addProgramList(doc: jsPDF, list: Cp2020ProgramList, line: number): number {
    let col = this._left;
    let nextLine = line;
    let i = 0;
    list.programs.forEach( (d) => {
      const newLine = this.addProgram(doc, d, line, col);
      nextLine = (newLine > nextLine) ? newLine : nextLine;
      if ( nextLine > 240 ) {
        line = this._top;
        nextLine = line;
        doc.addPage();
        i = 1;
      }
      if (((i + 1)) % 2 === 0) {
        col = this._left;
        line = nextLine;
      } else {
        col = this._midPage;
      }
      i++;
    });
    return line;
  }

  private static addProgram(doc: jsPDF, prog: NetRunProgram, line: number, column: number ): number {
    doc.setFontStyle('bold');
    doc.setFontSize(13);
    doc.rect(column, line - 3, 3, 3, 'S');
    doc.text(prog.name, column + 4, line);
    doc.setFontStyle('normal');
    doc.text(`${prog.cost}eb`, column + 90, line, 'right');
    doc.setFontSize(this._fontSize);
    line += 7;
    doc.text(`Class: ${prog.class.name}`, column, line);
    line += 7;
    doc.text(`Strength: +${prog.strength}`, column, line);
    doc.text(`MU: ${prog.mu}`, column + 90, line, 'right');
    line += 7;
    const options  = prog.options.map(o => o.name).join(', ');
    const optList: Array<string> = doc.splitTextToSize(`Options: ${options}`, 90);
    optList.forEach( d => {
      doc.text(d, column, line);
      line += 7;
    });
    line += 2;

    const desc: Array<string> = doc.splitTextToSize(`    ${prog.description}`, 90);
    desc.forEach( d => {
      doc.text(d, column, line);
      line += 7;
    });
    line += 2;
    const icon: Array<string> = doc.splitTextToSize((`Icon: ${prog.icon}`), 90);
    icon.forEach( d => {
      doc.text(d, column, line);
      line += 7;
    });
    line += 2;
    return line;
  }
}