import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NodesDetailComponent } from '../nodes-detail/nodes-detail.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-nodes-row]',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodesRowComponent implements OnInit {

  @Input() node: any;

  isDanger(prop) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }

  constructor(private modalService: NgbModal) { }

  open(node) {
    const modal = this.modalService.open(NodesDetailComponent);
    modal.componentInstance.node = node;
  }

  ngOnInit() {
  }

}
