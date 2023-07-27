import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-note',
  templateUrl: './card-note.component.html',
  styleUrls: ['./card-note.component.sass']
})
export class CardNoteComponent {
  @Input() noteData: any | null = null;
}
