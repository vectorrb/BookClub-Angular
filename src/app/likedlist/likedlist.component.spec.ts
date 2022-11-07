import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedlistComponent } from './likedlist.component';

describe('LikedlistComponent', () => {
  let component: LikedlistComponent;
  let fixture: ComponentFixture<LikedlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
