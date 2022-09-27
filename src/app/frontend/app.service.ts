import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  routePrefix: string = '';
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (this.routePrefix) return;
      this.routePrefix = params!['currentCluster'];
    });
  }
  getRoutePrefix(): string {
    return this.routePrefix;
  }
}
