export default class HourModel {
    description: string;
    customer: string;
    project: string;
    comment?: string;
    date: Date;
    hours: Number;
   
    constructor(description: string, customer: string, project: string, comment: string, date: Date, hours: Number) {
      this.description = description;
      this.customer = customer;
      this.project = description;
      this.comment = comment;
      this.date = date;
      this.hours = hours;
    }

    // method save in local storage
    save() {
        const hour = {
          "description": this.description,
          "customer": this.customer,
          "project": this.project,
          "comment": this.comment || null,
          "date": this.date,
          "hours": this.hours
        }

        let hours = JSON.parse(localStorage.hours);
        if (hours.length > 0) {
          hours.push(hour);
        }
        localStorage.setItem('hours', JSON.stringify(hours));
    }

  }
   