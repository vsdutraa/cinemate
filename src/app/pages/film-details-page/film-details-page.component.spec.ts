import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetailsPageComponent } from './film-details-page.component';

describe('FilmDetailsPageComponent', () => {
  let component: FilmDetailsPageComponent;
  let fixture: ComponentFixture<FilmDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmDetailsPageComponent]
    });
    fixture = TestBed.createComponent(FilmDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
