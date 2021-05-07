import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniaturaListComponent } from './miniatura-list.component';

describe('MiniaturaListComponent', () => {
  let component: MiniaturaListComponent;
  let fixture: ComponentFixture<MiniaturaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniaturaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniaturaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
