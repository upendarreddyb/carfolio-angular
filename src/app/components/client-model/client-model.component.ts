import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { Router } from 'express';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-client-model',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './client-model.component.html',
  styleUrl: './client-model.component.css',
})
export class ClientModelComponent implements OnInit {
  http = inject(HttpClient);
  api_service = inject(ApiService);
  fb = inject(FormBuilder);
  models: any[] = []; // store models
  filteredModels: any[] = [];
  searchQuery: string = '';
  ngOnInit(): void {
    this.getAllModels();
  }
  getAllModels() {
    this.api_service.getAllModels().subscribe((res: any) => {
      console.log(res);
      this.models = res;
      this.filteredModels = res;
    });
  }
  ngDoCheck() {
    this.filterModels();
  }
  filterModels() {
    const query = this.searchQuery.toLowerCase();

    this.filteredModels = this.models.filter((model) => {
      const modelMatch = model.name?.toLowerCase().includes(query);

      const variantMatch = model.variants?.some((variant: any) =>
        variant.name?.toLowerCase().includes(query)
      );

      const accessoryMatch = model.variants?.some((variant: any) =>
        variant.accessories?.some((accessory: any) =>
          accessory.name?.toLowerCase().includes(query)
        )
      );

      return modelMatch || variantMatch || accessoryMatch;
    });
  }
}
