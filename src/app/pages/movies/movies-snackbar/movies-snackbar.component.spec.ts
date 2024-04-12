import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesSnackbarComponent } from './movies-snackbar.component';

describe('MoviesSnackbarComponent', () => {
  let component: MoviesSnackbarComponent;
  let fixture: ComponentFixture<MoviesSnackbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesSnackbarComponent]
    });
    fixture = TestBed.createComponent(MoviesSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
