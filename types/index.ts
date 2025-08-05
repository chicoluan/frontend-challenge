interface Condition {
  questionId: string;
  expectedValue: string;
  action: 'show';
}

interface Question {
  id: string;
  label: string;
  type: string;
  options?: { id: string; label: string }[];
  conditions?: Condition[];
}

// biome-ignore lint/correctness/noUnusedVariables: <>
interface FormSchema {
  id: string;
  title: string;
  questions: Question[];
}

// export type FieldType = "text" | "select" | "checkbox";

// export interface Option {
// 	id: string;
// 	label: string;
// 	value: string;
// }

// export interface Condition {
// 	questionId: string;
// 	expectedValue: string;
// 	action: "show" | "hide";
// }

// export interface Question {
// 	id: string;
// 	label: string;
// 	type: FieldType;
// 	options?: Option[];
// 	conditions?: Condition[];
// }

// export interface FormSchema {
// 	id: string;
// 	title: string;
// 	questions: Question[];
// }
