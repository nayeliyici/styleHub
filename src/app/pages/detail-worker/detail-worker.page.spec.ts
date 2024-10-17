import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailWorkerPage } from './detail-worker.page';

describe('DetailWorkerPage', () => {
  let component: DetailWorkerPage;
  let fixture: ComponentFixture<DetailWorkerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailWorkerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
