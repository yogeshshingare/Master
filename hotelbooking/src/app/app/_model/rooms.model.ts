export class RoomtDetailModel {
    public success: boolean;
    public room: Room[];

    constructor() { }

    fromServerObject(data: any): any {
        this.success = data.success ? data.success : '';
        this.room = data.room.length != 0 ?
            Object.keys(data.agreements).map(item => new Room().fromAgreementServer(data.agreements[item])) : [];
        return this;
    }
}

export class Room {

    ID: number;
    Name: string;
    Amenities: number;
    Type: number;


    constructor() {
        this.ID = 0;
        this.Name = '';
        this.Amenities = null;
        this.Type = null;
        
    }

    fromAgreementServer(data) {
        this.ID = data.ID ? data.ID : null;
        this.Name = data.Name ? data.Name : '';
        this.Amenities = data.Amenities ? data.Amenities : null;
        this.Type = data.Type ? data.Type : null;

         return this;
    }
}