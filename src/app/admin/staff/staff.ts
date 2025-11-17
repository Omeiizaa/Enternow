import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  standalone: false,
  templateUrl: './staff.html',
  styleUrls: ['./staff.css'],
})
export class Staff implements OnInit {
  // Staff master list
  staffList = [
    { name: 'Chinedu Okafor', department: 'Customer Service' },
    { name: 'Aisha Bello', department: 'Accounts' },
    { name: 'Tunde Adebayo', department: 'Loans' },
    { name: 'Ngozi Nwosu', department: 'IT Support' },
    { name: 'Emeka Obi', department: 'Operations' },
    { name: 'Funke Adeoye', department: 'Internal Control' },
    { name: 'Musa Ibrahim', department: 'Marketing' },
    { name: 'Esther Johnson', department: 'HR' },
    { name: 'Bamidele Ojo', department: 'Security' },
    { name: 'Grace Udo', department: 'Compliance' },
  ];

  // All staff sign-ins (loaded from localStorage or dummy)
  staffSignIns: Array<{
    name: string;
    staffId: string;
    department: string;
    date: string;
    signInTime: string;
    signOutTime: string;
    status: 'Early' | 'Late';
  }> = [];

  ngOnInit(): void {
    const saved = localStorage.getItem('staffSignIns');
    if (saved) {
      this.staffSignIns = JSON.parse(saved);
    } else {
      this.seedDummySignIns();
    }
  }

  seedDummySignIns() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    for (let d of days) {
      for (let i = 0; i < this.staffList.length; i++) {
        const signInHour = 7 + (i % 3);
        const signOutHour = 17 + (i % 4);
        const signIn = this.formatTime(signInHour, this.randomMinute());
        const signOut = this.formatTime(signOutHour, this.randomMinute());
        const status: 'Early' | 'Late' = signInHour >= 8 ? 'Late' : 'Early';

        this.staffSignIns.push({
          name: this.staffList[i].name,
          staffId: `STF${1000 + i}`,
          department: this.staffList[i].department,
          date: d,
          signInTime: signIn,
          signOutTime: signOut,
          status,
        });
      }
    }
    localStorage.setItem('staffSignIns', JSON.stringify(this.staffSignIns));
  }

  getSignInsByStaff(name: string) {
    return this.staffSignIns.filter((s) => s.name === name);
  }

  getLateCount(name: string) {
    return this.getSignInsByStaff(name).filter((s) => s.status === 'Late').length;
  }

  private randomMinute() {
    return Math.floor(Math.random() * 60);
  }

  private formatTime(hour: number, minute: number) {
    const formattedMinute = minute < 10 ? `0${minute}` : `${minute}`;
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour;
    return `${displayHour}:${formattedMinute} ${ampm}`;
  }
}
