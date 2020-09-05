import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelleryCollectionComponent } from './jewellery-collection.component';

describe('JewelleryCollectionComponent', () => {
  let component: JewelleryCollectionComponent;
  let fixture: ComponentFixture<JewelleryCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JewelleryCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JewelleryCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
