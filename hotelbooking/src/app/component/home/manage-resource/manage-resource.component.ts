import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { RoomService } from 'src/app/services/rooms.service';
import { RoomtDetailModel, Room } from 'src/app/_model/rooms.model';


@Component({
  selector: 'app-manage-resource',
  templateUrl: './manage-resource.component.html',
  styleUrls: ['./manage-resource.component.css']
})
export class ManageResourceComponent implements OnInit {

  displayedColumns: string[] = [
    "id", "Room_Name", "Amenities", "Type"
  ];
  publisherId: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // @ViewChild(PublisherDetailComponent)
  // public publisherForm: PublisherDetailComponent;

  public roomDetail: RoomtDetailModel = new RoomtDetailModel();
  listData: MatTableDataSource<any>;

  constructor(private _router: Router, private room: RoomService,  private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => { this.publisherId = params['id'] }, error => { });
    this.loadAgreements();
  }

  //make the call to the node app to fetch all the agreement by publisher uid
  loadAgreements() {
    let conditions = [{
      "attribute": "Publisher_UID",
      "operator": "EQ",
      // "value": parseInt(this.publisherId)
    },
    {
      "attribute": "IFNULL(Deleted,false)",
      "operator": "NE",
      "value": true
    }]
    let requestPayload = {
      'Conditionals': conditions
    }
    // requestPayload = this._sessionService.addRequiredParams(requestPayload)
    this.room.getRooms(requestPayload).subscribe(
      responseObj => {
        if (responseObj['success']) {
          this.roomDetail = new RoomtDetailModel().fromServerObject(responseObj);
          this.roomDetail.room.sort((a, b) => b.ID - a.ID);
          this.listData = new MatTableDataSource(this.roomDetail.room);
          this.listData.sort = this.sort;
          this.listData.paginator = this.paginator;
        }
      });
  }
  getAgreementDetailId(id) {
    return this._router.url + '/' + id;
  }

  getAgreementAddUrl() {
    return this._router.url + '/room';
  }

  }

 

