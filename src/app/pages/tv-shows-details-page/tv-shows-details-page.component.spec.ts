import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowsDetailsPageComponent } from './tv-shows-details-page.component';

describe('TvShowsDetailsPageComponent', () => {
  let component: TvShowsDetailsPageComponent;
  let fixture: ComponentFixture<TvShowsDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvShowsDetailsPageComponent]
    });
    fixture = TestBed.createComponent(TvShowsDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
