import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetaillistComponent } from './userdetaillist.component';

describe('UserdetaillistComponent', () => {
  let component: UserdetaillistComponent;
  let fixture: ComponentFixture<UserdetaillistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdetaillistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetaillistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
