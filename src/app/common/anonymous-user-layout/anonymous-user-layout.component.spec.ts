import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonymousUserLayoutComponent } from './anonymous-user-layout.component';

describe('AnonymousUserLayoutComponent', () => {
  let component: AnonymousUserLayoutComponent;
  let fixture: ComponentFixture<AnonymousUserLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnonymousUserLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonymousUserLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
