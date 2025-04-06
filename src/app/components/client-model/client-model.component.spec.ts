import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientModelComponent } from './client-model.component';

describe('ClientModelComponent', () => {
  let component: ClientModelComponent;
  let fixture: ComponentFixture<ClientModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
