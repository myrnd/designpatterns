// Product
class SaleReport {

}


// Builder
abstract class SalesReportBuilder {
  getData: () => void;
  processData: () => void;
  printReport: (reportType: string) => void;
}

// Concrete Builder
class ConcreteSalesReportBuilder implements SalesReportBuilder {
    constructor() {
        new SaleReport();
    }
  getData() {
    console.log("Fetching data from database");
  }

  processData() {
    console.log("Processing data");
  }

  printReport(reportType: string) {
    console.log("Printing " + reportType, " report");
  }
}

// Director
class Director {
  private builder: SalesReportBuilder;
  constructor(builder: SalesReportBuilder) {
    this.builder = builder;
  }

  buildExcelReport() {
    this.builder.getData();
    this.builder.processData();
    this.builder.printReport("excel");
  }

  buildPdfReport() {
    this.builder.getData();
    this.builder.processData();
    this.builder.printReport("pdf");
  }
}

const builder = new ConcreteSalesReportBuilder();
const director = new Director(builder);

director.buildPdfReport();
director.buildExcelReport();
