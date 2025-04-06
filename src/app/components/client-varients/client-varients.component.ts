import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from "../../pipes/safe-url.pipe";

@Component({
  selector: 'app-client-varients',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, SafeUrlPipe],
  templateUrl: './client-varients.component.html',
  styleUrl: './client-varients.component.css',
})
export class ClientVarientsComponent {
  route = inject(ActivatedRoute);

  http = inject(HttpClient);
  api_service = inject(ApiService);
  variant: any;

  ngOnInit(): void {
    const modelId = this.route.snapshot.paramMap.get('id');
    console.log(modelId);
    if (modelId) {
      this.getVariantsByModelId(modelId);
    }
  }

  getVariantsByModelId(modelId: string) {
    this.api_service.getVariantByID(modelId).subscribe((res) => {
      console.log(res);
      this.variant = res;
    });
  }
}
