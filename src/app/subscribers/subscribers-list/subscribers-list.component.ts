import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SubscribersService, ISubscriber } from '../../core/services/subscribers.service';

@Component({
  selector: 'app-subscribers-list',
  templateUrl: './subscribers-list.component.html',
  styleUrls: ['./subscribers-list.component.css']
})
export class SubscribersListComponent implements OnInit {
  subscribers: ISubscriber[];

  constructor(private subscriberService: SubscribersService) {
  }

  async ngOnInit() {
    this.subscribers = await this.subscriberService.getAll().toPromise();
  }
}
