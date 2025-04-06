import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-feature-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './feature-form.component.html',
  styleUrl: './feature-form.component.css',
})
export class FeatureFormComponent implements OnInit {
  form!: FormGroup;
  categories: any = [];
  mediaTypes = ['image', 'video'];

  http = inject(HttpClient);
  api_service = inject(ApiService);
  fb = inject(FormBuilder);

  ngOnInit() {
    this.getCategeorys();
    this.form = this.fb.group({
      name: ['', Validators.required],
      mediaType: ['', Validators.required],
      mediaUrl: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }
  getCategeorys() {
    this.api_service.getCategeory().subscribe((res:any) => {
      this.categories = this.categories = res.filter(
        (category: any) => category.type === 'feature'
      );;
    });
  }
  onSubmit() {
    if (this.form.valid) {
      this.api_service.addFeature(this.form.value).subscribe(() => {
        alert('Feature saved!');
        this.form.reset();
      });
    }
  }
}
