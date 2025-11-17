// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-sign-in',
//   standalone: false,
//   templateUrl: './sign-in.html',
//   styleUrls: ['./sign-in.css'],
// })
// export class SignIn implements OnInit {
//   staffSignIns: Array<{
//     name: string;
//     staffId: string;
//     department: string;
//     date: string;
//     signInTime: string;
//     signOutTime: string;
//     status: 'Early' | 'Late';
//   }> = [];

//   staffList = [
//     { name: 'Chinedu Okafor', staffId: 'STF1000', department: 'Customer Service' },
//     { name: 'Aisha Bello', staffId: 'STF1001', department: 'Accounts' },
//     { name: 'Tunde Adebayo', staffId: 'STF1002', department: 'Loans' },
//     { name: 'Ngozi Nwosu', staffId: 'STF1003', department: 'IT Support' },
//     { name: 'Emeka Obi', staffId: 'STF1004', department: 'Operations' },
//     { name: 'Funke Adeoye', staffId: 'STF1005', department: 'Internal Control' },
//     { name: 'Musa Ibrahim', staffId: 'STF1006', department: 'Marketing' },
//     { name: 'Esther Johnson', staffId: 'STF1007', department: 'HR' },
//     { name: 'Bamidele Ojo', staffId: 'STF1008', department: 'Security' },
//     { name: 'Grace Udo', staffId: 'STF1009', department: 'Compliance' },
//   ];

//   newStaff: {
//     name: string;
//     staffId: string;
//     department: string;
//     signInTime: string;
//     signOutTime?: string;
//   } = { name: '', staffId: '', department: '', signInTime: '', signOutTime: '' };

//   ngOnInit(): void {
//     // Load saved sign-ins from localStorage if available
//     const savedSignIns = localStorage.getItem('staffSignIns');
//     if (savedSignIns) {
//       this.staffSignIns = JSON.parse(savedSignIns);
//       return;
//     }

//     // Otherwise, seed with initial dummy data
//     const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
//     for (let d of days) {
//       for (let i = 0; i < this.staffList.length; i++) {
//         const signInHour = 7 + (i % 3);
//         const signOutHour = 17 + (i % 4);
//         const signIn = this.formatTime(signInHour, this.randomMinute());
//         const signOut = this.formatTime(signOutHour, this.randomMinute());
//         const status: 'Early' | 'Late' = signInHour >= 8 ? 'Late' : 'Early';

//         this.staffSignIns.push({
//           name: this.staffList[i].name,
//           staffId: this.staffList[i].staffId,
//           department: this.staffList[i].department,
//           date: d,
//           signInTime: signIn,
//           signOutTime: signOut,
//           status,
//         });
//       }
//     }

//     // Save initial data to localStorage
//     localStorage.setItem('staffSignIns', JSON.stringify(this.staffSignIns));
//   }

//   onStaffSelect(): void {
//     const selected = this.staffList.find((s) => s.name === this.newStaff.name);
//     if (selected) {
//       this.newStaff.staffId = selected.staffId;
//       this.newStaff.department = selected.department;

//       const now = new Date();
//       this.newStaff.signInTime = this.formatTime(now.getHours(), now.getMinutes());
//     } else {
//       this.newStaff.staffId = '';
//       this.newStaff.department = '';
//       this.newStaff.signInTime = '';
//     }
//   }

//   addStaffManualSignIn(): void {
//     if (
//       !this.newStaff.name?.trim() ||
//       !this.newStaff.staffId?.trim() ||
//       !this.newStaff.department?.trim() ||
//       !this.newStaff.signInTime?.trim()
//     ) {
//       alert('Please select a staff and ensure Sign-In Time is filled.');
//       return;
//     }

//     const hour = this.parseHourFromTime(this.newStaff.signInTime);
//     const status: 'Early' | 'Late' = hour >= 8 ? 'Late' : 'Early';
//     const today = new Date();
//     const dateStr = today.toLocaleDateString(undefined, {
//       weekday: 'short',
//       month: 'short',
//       day: 'numeric',
//     });

//     const newRecord = {
//       name: this.newStaff.name.trim(),
//       staffId: this.newStaff.staffId.trim(),
//       department: this.newStaff.department.trim(),
//       date: dateStr,
//       signInTime: this.newStaff.signInTime,
//       signOutTime: this.newStaff.signOutTime || '',
//       status,
//     };

//     this.staffSignIns.unshift(newRecord);

//     // Persist updated list
//     localStorage.setItem('staffSignIns', JSON.stringify(this.staffSignIns));

//     this.newStaff = { name: '', staffId: '', department: '', signInTime: '', signOutTime: '' };
//     alert('Manual sign-in added successfully.');
//   }

//   private randomMinute(): number {
//     return Math.floor(Math.random() * 60);
//   }

//   private formatTime(hour: number, minute: number): string {
//     const formattedMinute = minute < 10 ? `0${minute}` : `${minute}`;
//     const ampm = hour >= 12 ? 'PM' : 'AM';
//     const displayHour = hour > 12 ? hour - 12 : hour;
//     return `${displayHour}:${formattedMinute} ${ampm}`;
//   }

//   private parseHourFromTime(timeStr: string): number {
//     if (!timeStr) return 0;
//     const parts = timeStr.trim().split(' ');
//     const [hhText] = parts[0].split(':');
//     let hh = parseInt(hhText, 10);
//     if (parts[1]) {
//       const ampm = parts[1].toUpperCase();
//       if (ampm === 'PM' && hh < 12) hh += 12;
//       if (ampm === 'AM' && hh === 12) hh = 0;
//     }
//     return isNaN(hh) ? 0 : hh;
//   }
// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.css'],
})
export class SignIn implements OnInit {
  // The list shown in the table
  staffSignIns: Array<{
    name: string;
    staffId: string;
    department: string;
    date: string;
    signInTime: string;
    signOutTime: string;
    status: 'Early' | 'Late';
  }> = [];

  // Dropdown for manual add
  staffNames = [
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

  // Model for manual-add form
  newStaff: { name: string; staffId: string } = { name: '', staffId: '' };

  ngOnInit(): void {
    // Load from localStorage
    const saved = localStorage.getItem('staffSignIns');
    if (saved) {
      this.staffSignIns = JSON.parse(saved);
    } else {
      this.seedInitialData();
    }
  }

  seedInitialData() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    for (let d of days) {
      for (let i = 0; i < this.staffNames.length; i++) {
        const signInHour = 7 + (i % 3);
        const signOutHour = 17 + (i % 4);
        const signIn = this.formatTime(signInHour, this.randomMinute());
        const signOut = this.formatTime(signOutHour, this.randomMinute());
        const status: 'Early' | 'Late' = signInHour >= 8 ? 'Late' : 'Early';

        this.staffSignIns.push({
          name: this.staffNames[i].name,
          staffId: `STF${1000 + i}`,
          department: this.staffNames[i].department,
          date: d,
          signInTime: signIn,
          signOutTime: signOut,
          status,
        });
      }
    }
    this.saveToLocalStorage();
  }

  // Called when selecting a name from dropdown
  selectStaff(name: string) {
    const staff = this.staffNames.find((s) => s.name === name);
    if (staff) {
      this.newStaff.name = staff.name;
      this.newStaff.staffId = `STF${1000 + this.staffNames.indexOf(staff)}`;
    }
  }

  addStaffManualSignIn(): void {
    if (!this.newStaff.name || !this.newStaff.staffId) {
      alert('Please select a staff from the dropdown.');
      return;
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString(undefined, {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const status: 'Early' | 'Late' = now.getHours() >= 8 ? 'Late' : 'Early';

    const staffRecord = this.staffNames.find((s) => s.name === this.newStaff.name);

    const newRecord = {
      name: this.newStaff.name,
      staffId: this.newStaff.staffId,
      department: staffRecord?.department || '',
      date: dateStr,
      signInTime: timeStr,
      signOutTime: '',
      status,
    };

    this.staffSignIns.unshift(newRecord);
    this.saveToLocalStorage();
    this.newStaff = { name: '', staffId: '' };
    alert('Manual sign-in added successfully.');
  }

  editSignOutTime(record: any): void {
    const newTime = prompt('Enter Sign-Out Time (e.g., 5:30 PM):', record.signOutTime || '');
    if (newTime) {
      record.signOutTime = newTime;
      this.saveToLocalStorage();
      alert('Sign-Out time updated successfully.');
    }
  }

  // helpers
  private randomMinute() {
    return Math.floor(Math.random() * 60);
  }

  private formatTime(hour: number, minute: number) {
    const formattedMinute = minute < 10 ? `0${minute}` : `${minute}`;
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour;
    return `${displayHour}:${formattedMinute} ${ampm}`;
  }

  private saveToLocalStorage() {
    localStorage.setItem('staffSignIns', JSON.stringify(this.staffSignIns));
  }
}
