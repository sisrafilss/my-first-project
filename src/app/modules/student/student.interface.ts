export type GuardianType = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type UserNameType = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type LocalGuardianType = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type StudentType = {
  id: string;
  name: UserNameType;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email: string;
  contactNumber: string;
  emergencyContactNo: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: GuardianType;
  localGuardian: LocalGuardianType;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
