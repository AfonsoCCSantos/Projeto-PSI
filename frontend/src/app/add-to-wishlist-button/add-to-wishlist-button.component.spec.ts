import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToWishlistButtonComponent } from './add-to-wishlist-button.component';

describe('AddToWishlistButtonComponent', () => {
  let component: AddToWishlistButtonComponent;
  let fixture: ComponentFixture<AddToWishlistButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToWishlistButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToWishlistButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
