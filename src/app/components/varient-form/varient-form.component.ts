import { Component, Input, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-varient-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './varient-form.component.html',
  styleUrl: './varient-form.component.css',
})
export class VarientFormComponent implements OnInit {
  variantForm!: FormGroup;
  colors: any[] = [];
  accessories: any[] = [];
  features: any[] = [];

  fb = inject(FormBuilder);
  api = inject(ApiService);

  ngOnInit() {
    this.variantForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      colors: this.fb.array([], Validators.minLength(3)),
      accessories: this.fb.array([], Validators.minLength(4)),
      features: this.fb.array([], Validators.minLength(4)),
    });

    this.api.getColors().subscribe((res: any) => {
      this.colors = res;
    });
    this.api.getAccessories().subscribe((res:any) => {
      this.accessories=res;
    
    });
    this.api.getFeatures().subscribe((res:any) => {
      this.features = res;
     
    });
  }

  get colorsArray() {
    return this.variantForm.get('colors') as FormArray;
  }
  get accessoriesArray() {
    return this.variantForm.get('accessories') as FormArray;
  }
  get featuresArray() {
    return this.variantForm.get('features') as FormArray;
  }

  toggleSelection(array: FormArray, id: string) {
    const index = array.value.indexOf(id);
    if (index > -1) {
      array.removeAt(index);
    } else {
      array.push(this.fb.control(id));
    }
  }

  onSubmit() {
    if (this.variantForm.valid) {
      this.api.addVariant(this.variantForm.value).subscribe(() => {
        alert('Variant added!');
        this.variantForm.reset();
      });
    }
  }
}
