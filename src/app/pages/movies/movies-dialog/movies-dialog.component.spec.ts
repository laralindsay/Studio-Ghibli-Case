import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesDialogComponent } from './movies-dialog.component';

describe('MoviesDialogComponent', () => {
  let component: MoviesDialogComponent;
  let fixture: ComponentFixture<MoviesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesDialogComponent]
    });
    fixture = TestBed.createComponent(MoviesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
