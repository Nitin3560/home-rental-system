import { Component } from '@angular/core';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css'],
    standalone: false
})
export class LandingPageComponent {

  cities: string[] = [
    'Ahmadnagar',
    'Akola',
    'Amravati',
    'Aurangabad',
    'Bhandara',
    'Bhusawal',
    'Bid',
    'Buldhana',
    'Chandrapur',
    'Daulatabad',
    'Dhule',
    'Jalgaon',
    'Kalyan',
    'Karli',
    'Kolhapur',
    'Mahabaleshwar',
    'Malegaon',
    'Matheran',
    'Mumbai',
    'Nagpur',
    'Nanded',
    'Nashik',
    'Osmanabad',
    'Pandharpur',
    'Parbhani',
    'Pune',
    'Ratnagiri',
    'Sangli',
    'Satara',
    'Sevagram',
    'Solapur',
    'Thane',
    'Ulhasnagar',
    'Vasai-Virar',
    'Wardha',
    'Yavatmal',
  ]
  model = '';
  filteredCities: string[] = this.cities;

  filterCities(): void {
    const term = (this.model || '').toLowerCase();
    this.filteredCities = term
      ? this.cities.filter((city: string) => city.toLowerCase().includes(term))
      : this.cities;
  }

  dropdownValues: string[] = ['Anyone', 'Male', 'Female'];
  selectedValue = 'Anyone';

  dropdownValues2: string[] = ['Single', 'Double', 'Three', 'Four'];
  selectedValue2 = 'Single';

  stats = [
    { icon: 'chat_bubble_outline', title: 'Direct talk with owners', detail: 'Chat directly with verified property owners. No middlemen.' },
    { icon: 'verified_user', title: 'Verified listings', detail: 'Genuine listings with clear details and pricing.' },
    { icon: 'tune', title: 'Filter what matters', detail: 'Find places by room type, budget, location and more.' },
  ];

  featuredProperties = [
    {
      name: 'Urban Nest PG',
      location: 'Pune, Maharashtra',
      rent: 'Rs 8,500',
      deposit: 'Deposit Rs 15,000',
      image: 'assets/h1.jpg',
      type: 'PG / Hostel',
      room: 'Single Room',
      tenant: 'Female',
      tags: ['WiFi', 'Laundry', 'Food'],
    },
    {
      name: 'Green View Home',
      location: 'Mumbai, Maharashtra',
      rent: 'Rs 22,000',
      deposit: 'Deposit Rs 50,000',
      image: 'assets/h2.jpg',
      type: 'Home',
      room: '2 BHK',
      tenant: 'Anyone',
      tags: ['Parking', 'AC', 'Power Backup'],
    },
    {
      name: 'Comfort Stay PG',
      location: 'Thane, Maharashtra',
      rent: 'Rs 7,000',
      deposit: 'Deposit Rs 10,000',
      image: 'assets/h3.jpg',
      type: 'PG / Hostel',
      room: 'Double Sharing',
      tenant: 'Male',
      tags: ['WiFi', 'Food', 'Housekeeping'],
    },
    {
      name: 'City Corner Apartment',
      location: 'Navi Mumbai, Maharashtra',
      rent: 'Rs 18,000',
      deposit: 'Deposit Rs 40,000',
      image: 'assets/h2.jpg',
      type: 'Home',
      room: '1 BHK',
      tenant: 'Anyone',
      tags: ['Lift', 'Parking', '24x7 Water'],
    },
  ];

  propertyTypes = [
    { icon: 'bed', title: 'PG / Hostel' },
    { icon: 'apartment', title: 'Apartments' },
    { icon: 'chair', title: 'Private Room' },
    { icon: 'groups', title: 'Shared Room' },
  ];

  popularCities = [
    { name: 'Mumbai', image: 'assets/h2.jpg' },
    { name: 'Pune', image: 'assets/h1.jpg' },
    { name: 'Nagpur', image: 'assets/h3.jpg' },
    { name: 'Nashik', image: 'assets/h2.jpg' },
    { name: 'Thane', image: 'assets/h1.jpg' },
    { name: 'Kolhapur', image: 'assets/h3.jpg' },
    { name: 'Aurangabad', image: 'assets/h2.jpg' },
    { name: 'Navi Mumbai', image: 'assets/h1.jpg' },
  ];

  testimonials = [
    { name: 'Sneha K.', city: 'Pune', quote: 'Found a PG close to my college and spoke directly with the owner.' },
    { name: 'Rohit M.', city: 'Mumbai', quote: 'Much easier to compare rent, deposit and amenities.' },
    { name: 'Anjali S.', city: 'Thane', quote: 'The owner was responsive and the place was exactly as shown.' },
  ];
}
