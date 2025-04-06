import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-accessory-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './accessory-form.component.html',
  styleUrl: './accessory-form.component.css',
})
export class AccessoryFormComponent {
  categories: any[] = [];
  accessory = { name: '', imageUrl: '', categoryId: '' };

  http = inject(HttpClient);
  api = inject(ApiService);

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.api.getCategeory().subscribe((res: any) => {
      console.log(res);
      this.categories = res.filter(
        (category: any) => category.type === 'accessory'
      );
    });
  }

  onSubmit() {
    this.api.addAccesories(this.accessory).subscribe((res: any) => {
      console.log(res);
      alert("added successfully")
      this.accessory = { name: '', imageUrl: '', categoryId: '' };
    });
  }
}
