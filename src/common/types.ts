export type Participant = {
  name: string;
  participantID: string;
  enrolledCourses?: Course[];
  assignmentGrades?: number[];
  finalGrade?: number; // calculated, wont have in xlsx
};

export type Course = {
  name: string;
  courseID: string;
  description?: string;
  participants?: Participant[]; // modified, wont have in xlsx
  assignments?: number;
};
