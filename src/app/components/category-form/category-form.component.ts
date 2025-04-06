import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css',
})
export class CategoryFormComponent implements OnInit {
  categoryForm!: FormGroup;
  types = ['accessory', 'feature'];
  http = inject(HttpClient);
  api_service = inject(ApiService);
  fb = inject(FormBuilder);

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.categoryForm.invalid) return;

    this.api_service.createCategory(this.categoryForm.value).subscribe({
      next: (res) => {
        alert('Category added successfully!');
        this.categoryForm.reset();
      },
      error: (err) => {
        console.error('Error creating category:', err);
        alert('Failed to add category. Please try again.');
      },
    });
  }
}
