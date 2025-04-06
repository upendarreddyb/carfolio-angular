import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientVarientsComponent } from './client-varients.component';

describe('ClientVarientsComponent', () => {
  let component: ClientVarientsComponent;
  let fixture: ComponentFixture<ClientVarientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientVarientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientVarientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
