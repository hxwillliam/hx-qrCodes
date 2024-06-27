import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'] 
})

export class InputComponent {
  @Input({required: true}) data?: string;
  @Output() dataChange: EventEmitter<string> = new EventEmitter<string>();
  qrCodeData: string = '';
  link: string = 'https://www.hxwilliam.org';

  generateQRCode() {
    this.data = this.link;
    this.dataChange.emit(this.link);
    console.log('Generating QR code...');
  }
}