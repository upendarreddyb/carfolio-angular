import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-color-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './color-form.component.html',
  styleUrl: './color-form.component.css',
})
export class ColorFormComponent {
  color = { name: '', hexCode: '#000000', price: 0 };

  http = inject(HttpClient);
  api_service = inject(ApiService);

  onSubmit() {
    console.log(this.color);
    this.api_service.addColors(this.color).subscribe(
      (res: any) => {
        console.log('res', res);
        alert('Color added successfully!');
        this.color = { name: '', hexCode: '#000000', price: 0 }; // reset form
      },
      (error) => {
        console.error('Error adding color', error);
        alert('Failed to add color.');
      }
    );
  }
}
