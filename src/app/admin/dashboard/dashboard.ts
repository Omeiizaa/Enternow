import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff/staff'; // import your Staff class if needed

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard implements OnInit {

  staffList = Staff.prototype.staffList; // get existing staff list
  staffSignIns: any[] = [];

  suspendedCount = 2;

  ngOnInit() {
    const saved = localStorage.getItem('staffSignIns');
    if (saved) this.staffSignIns = JSON.parse(saved);
  }

  getPercentEarly() {
    const early = this.staffSignIns.filter(s => s.status === 'Early').length;
    return this.staffSignIns.length ? Math.round((early / this.staffSignIns.length) * 100) : 0;
  }

  getPercentLate() {
    const late = this.staffSignIns.filter(s => s.status === 'Late').length;
    return this.staffSignIns.length ? Math.round((late / this.staffSignIns.length) * 100) : 0;
  }

  getSuspendedCount() {
    return this.suspendedCount;
  }

  getTopEarly() {
    return this.staffSignIns.filter(s => s.status === 'Early').slice(0, 5);
  }

  getTopLate() {
    return this.staffSignIns.filter(s => s.status === 'Late').slice(0, 5);
  }
}
