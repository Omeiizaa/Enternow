export interface IStaffSignIn {
  staffId: number;
  name: string;
  department: string;
  signInTime: string;
  status: 'early' | 'late';
  deductions: number;
}
