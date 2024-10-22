const AnalyticsCardView = [
  {
    title: 'Total Revenue',
    icon: 'DollarSign',
    value: '$1,000',
    subValue: '+20.1% from last month',
  },
  {
    title: 'Subscriptions',
    icon: 'Users',
    value: '100',
    subValue: '+180.1% from last month',
  },
  {
    title: 'Sales',
    icon: 'CreditCard',
    value: '+12,234',
    subValue: 'This month',
  },
  {
    title: 'Active Now',
    icon: 'Activity',
    value: '+573',
    subValue: '+201 since last hour',
  },
];

const DateFilterView = [
  { label: 'Today', value: 'today' },
  { label: 'Yesterday', value: 'yesterday' },
  { label: 'Last 7 days', value: 'last7days' },
  { label: 'Last 30 days', value: 'last30days' },
  { label: 'This month', value: 'thismonth' },
  { label: 'Last month', value: 'lastmonth' },
  { label: 'Custom range', value: 'custom' },
];

const MultiSelectOptions = [
  { label: 'nextjs', value: 'Nextjs' },
  { label: 'Vite', value: 'vite' },
  { label: 'Nuxt', value: 'nuxt' },
  { label: 'Vue', value: 'vue, disable: true' },
  { label: 'Remix', value: 'remix' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Angular', value: 'angular' },
  { label: 'Ember', value: 'ember' },
  { label: 'React', value: 'react' },
  { label: 'Gatsby', value: 'gatsby' },
  { label: 'Astro', value: 'astro' },
];

export { AnalyticsCardView, DateFilterView, MultiSelectOptions };
