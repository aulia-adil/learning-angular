import { TestBed } from '@angular/core/testing';

import { ApiMyquranService } from './api-myquran.service';

describe('ApiMyquranService', () => {
  let service: ApiMyquranService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMyquranService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getData function', () => {
    expect(service.getData).toBeTruthy();
  });

  it('should have getData function JSON', async () => {
    // Get year, month, and date now
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    // Check if the data is JSON
    const data = await service.getData(1221, year, month, date);
    expect(data).toBeTruthy();
  });
});
