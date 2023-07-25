import { TestBed } from '@angular/core/testing';

import { ApiOembedYoutubeService } from './api-oembed-youtube.service';

describe('ApiOembedYoutubeService', () => {
  let service: ApiOembedYoutubeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiOembedYoutubeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
