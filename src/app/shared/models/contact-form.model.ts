import { PreferredContact } from "./preferred-contact.enum";

export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  preferredContact: PreferredContact;
}