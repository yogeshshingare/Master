import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { RoomService } from 'src/app/services/rooms.service';
import { RoomtDetailModel, Room } from 'src/app/_model/rooms.model';

export interface RoomData {
  id: string;
  Room_Name: number;
  Amenities: number;
  Type: string;
}

@Component({
  selector: 'app-manage-resource',
  templateUrl: './manage-resource.component.html',
  styleUrls: ['./manage-resource.component.css']
})
export class ManageResourceComponent implements OnInit {

  displayedColumns: string[] = [
     "Room_Name", "Amenities", "Type"
  ];
  publisherId: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  data:RoomData[]=[];
  // @ViewChild(PublisherDetailComponent)
  // public publisherForm: PublisherDetailComponent;

  public roomDetail: RoomtDetailModel = new RoomtDetailModel();
  tableData: MatTableDataSource<any>;

  constructor(private _router: Router, private room: RoomService,  private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => { this.publisherId = params['id'] }, error => { });
    this.loadAgreements();
    
    this.tableData = new MatTableDataSource(this.data);
    this.tableData.sort = this.sort;
    this.tableData.paginator = this.paginator;
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
          this.tableData = new MatTableDataSource(this.roomDetail.room);
          this.tableData.sort = this.sort;
          this.tableData.paginator = this.paginator;
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

 

