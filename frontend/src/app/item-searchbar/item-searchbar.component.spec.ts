import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSearchbarComponent } from './item-searchbar.component';

describe('ItemSearchbarComponent', () => {
  let component: ItemSearchbarComponent;
  let fixture: ComponentFixture<ItemSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSearchbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
