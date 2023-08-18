export interface ScreenedStockResult {
    ProductId: number,
    Symbol: string,
    Currency: string,
    Venue: string,
    ImageUrl: string,
    Name: string,
    IVPrediction: string,
    SwingPrediction: string,
    BehaviorPrediction: string,
    Volume: number,
    Change: number,
    Price: number,
    Ironcondor: boolean,
    Straddle: boolean,
    Bullcallspread: boolean,
    Bearcallspread: boolean,
    Bullputspread: boolean,
    Bearputspread: boolean,
    Deltaneutral: boolean,
    Calendarspreadput: boolean,
    Calendarspreadcall: boolean,
    Brokenwingbutterflycall: boolean,
  }