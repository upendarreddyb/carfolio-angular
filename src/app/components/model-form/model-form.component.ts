import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-model-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './model-form.component.html',
  styleUrl: './model-form.component.css',
})
export class ModelFormComponent {
  form!: FormGroup;
  variantList: any[] = [];

  fb = inject(FormBuilder);
  api = inject(ApiService);
  http = inject(HttpClient);

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      image: [''],
      variants: this.fb.array([]),
    });

    this.loadVariants();
    this.getAllModels();
  }

  getAllModels(){
    this.api.getAllModels().subscribe((res)=>{
      console.log(res)
    })
  }
  loadVariants() {
    this.api.getAllVerients().subscribe((res: any) => {
      this.variantList = res;
    });
  }

  onVariantToggle(variantId: string, event: any) {
    const selectedVariants = this.form.get('variants') as FormArray;
    if (event.target.checked) {
      selectedVariants.push(this.fb.control(variantId));
    } else {
      const idx = selectedVariants.controls.findIndex(
        (c) => c.value === variantId
      );
      if (idx !== -1) {
        selectedVariants.removeAt(idx);
      }
    }
  }

  submit() {
    if (this.form.invalid) return;
    this.api.createModel(this.form.value).subscribe((res) => {
      alert('Model Created Successfully');
      this.form.reset();
    });
  }
}
