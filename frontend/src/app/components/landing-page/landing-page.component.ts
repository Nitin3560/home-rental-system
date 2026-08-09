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
    { value: '250+', label: 'verified rooms' },
    { value: '35+', label: 'Maharashtra cities' },
    { value: '24 hr', label: 'owner response window' },
  ];

  featuredProperties = [
    {
      name: 'Sunrise PG, Pune',
      location: 'Kothrud, Pune',
      rent: 'Rs 7,500/mo',
      image: 'assets/h1.jpg',
      tags: ['Wifi', 'Meals', 'Single sharing'],
    },
    {
      name: 'Urban Nest Home',
      location: 'Andheri, Mumbai',
      rent: 'Rs 18,000/mo',
      image: 'assets/h2.jpg',
      tags: ['2BHK', 'Family ready', 'Parking'],
    },
    {
      name: 'Campus Corner Hostel',
      location: 'Hinjewadi, Pune',
      rent: 'Rs 6,800/mo',
      image: 'assets/h3.jpg',
      tags: ['Laundry', 'Security', 'Shared room'],
    },
  ];

  propertyTypes = [
    { title: 'PG and hostels', detail: 'Budget-friendly stays near colleges and offices.' },
    { title: 'Independent homes', detail: 'Private houses for families and working professionals.' },
    { title: 'Shared rooms', detail: 'Flexible sharing options with essential amenities.' },
  ];

  steps = [
    { title: 'Search by city', detail: 'Start with the location, tenant preference, and sharing type.' },
    { title: 'Compare listings', detail: 'Review rent, deposit, amenities, rules, and availability.' },
    { title: 'Message owners', detail: 'Open a chat with the owner and move ahead confidently.' },
  ];
}
