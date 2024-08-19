import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipePagesComponent } from './recipe-pages.component';

describe('RecipePagesComponent', () => {
  let component: RecipePagesComponent;
  let fixture: ComponentFixture<RecipePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipePagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
