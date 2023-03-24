export class coffeeItem {
    public arrayNumber: number;
    public id: string;
    public uid: string;
    public blend_name: string;
    public origin: string;
    public variety: string;
    public notes: string;
    public intensifier: string;

    constructor(arrayNumber: number, id: string, uid: string, 
                blend_name: string, origin: string, variety: string,
                notes: string, intensifier: string){
                    
        this.arrayNumber = arrayNumber;
        this.id = id;
        this.uid = uid;
        this.blend_name = blend_name;
        this.origin = origin;
        this.variety = variety;
        this.notes = notes;
        this.intensifier = intensifier;
    }
}