export interface Calculate {

  validate(number: number): boolean;

  sendMessage(): string;
}