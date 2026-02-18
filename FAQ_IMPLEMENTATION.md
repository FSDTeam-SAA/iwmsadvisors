# FAQ Section - Implementation Documentation

## 📋 Overview

A complete, modern FAQ section implementation for the IWMS Advisors Next.js project. This implementation follows best practices with Static Site Generation (SSG), TypeScript, and a clean accordion-style UI.

## 🎯 Features

- ✅ Static Site Generation (SSG) with ISR
- ✅ TypeScript with proper type definitions
- ✅ Modern accordion UI with smooth animations
- ✅ Fully responsive design
- ✅ Proper error handling and loading states
- ✅ Accessible markup
- ✅ Clean API integration
- ✅ Reusable components

## 📁 File Structure

```
src/
├── app/
│   └── faq/
│       ├── page.tsx              # Main FAQ listing page
│       ├── loading.tsx           # Loading state for FAQ list
│       ├── error.tsx             # Error boundary for FAQ list
│       └── [id]/
│           ├── page.tsx          # Single FAQ detail page
│           ├── loading.tsx       # Loading state for single FAQ
│           ├── error.tsx         # Error boundary for single FAQ
│           └── not-found.tsx     # 404 page for invalid FAQ IDs
├── components/
│   └── shared/
│       └── FAQ.tsx               # Reusable FAQ Accordion component
└── lib/
    ├── api/
    │   └── api.ts               # FAQ API functions (updated)
    ├── hooks/
    │   └── useFaq.ts            # Custom React Query hook for FAQs
    └── type/
        └── faq.ts               # TypeScript type definitions
```

## 🔌 API Endpoints

### Get All FAQs

```
GET /faq
```

**Expected Response:**

```typescript
{
  success: boolean;
  message: string;
  data: FAQ[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
```

### Get Single FAQ

```
GET /faq/:id
```

**Expected Response:**

```typescript
{
  success: boolean;
  message: string;
  data: FAQ;
}
```

### FAQ Object Structure

```typescript
{
  _id: string;
  question: string;
  answer: string;
  category?: string;
  order?: number;
  isActive?: boolean;
  createdAt: string;
  updatedAt: string;
}
```

## 🛠️ Implementation Details

### 1. Type Definitions (`lib/type/faq.ts`)

- Complete TypeScript interfaces for FAQ data
- Proper response typing for API calls
- Includes optional fields for flexibility

### 2. API Functions (`lib/api/api.ts`)

- `getFAQs()` - Fetches all FAQs
- `getSingleFAQ(id)` - Fetches a single FAQ by ID
- Proper error handling with try-catch
- Uses existing axios instance and base URL configuration

### 3. Custom Hook (`lib/hooks/useFaq.ts`)

- `useFAQs()` - React Query hook for all FAQs
- `useSingleFAQ(id)` - React Query hook for single FAQ
- Automatic caching and refetching
- Follows existing hook patterns in the project

### 4. FAQ Accordion Component (`components/shared/FAQ.tsx`)

- Reusable accordion component
- Smooth open/close animations
- Accessible keyboard navigation
- Primary color for icons (#2B5AA6)
- Empty state handling
- Accepts FAQ array as props

### 5. Main FAQ Page (`app/faq/page.tsx`)

- Uses Static Site Generation (SSG)
- Revalidates every hour (3600 seconds)
- SEO-optimized metadata
- Error handling with user-friendly messages
- Professional hero section
- CTA section linking to contact page

### 6. Single FAQ Page (`app/faq/[id]/page.tsx`)

- Dynamic route with SSG using `generateStaticParams`
- Pre-renders all FAQ pages at build time
- Dynamic metadata generation for SEO
- Breadcrumb navigation back to FAQ list
- Beautiful card layout with icon
- Shows last updated date
- 404 handling for invalid IDs

## 🎨 Design Features

### Color Scheme

- Primary: `#2B5AA6` (Blue)
- Primary Dark: `#1e3a6b`
- Backgrounds: Gray scale gradients
- Text: Gray scale for hierarchy

### Animations

- Smooth accordion transitions (300ms)
- Hover effects on buttons and cards
- Icon rotation for open/close state
- Loading skeleton animations

### Responsive Design

- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`
- Flexible layouts with proper spacing
- Touch-friendly accordion buttons

### Accessibility

- Semantic HTML markup
- ARIA labels and attributes
- Keyboard navigation support
- Focus states for interactive elements
- Screen reader friendly

## ⚡ Performance Optimizations

1. **Static Site Generation (SSG)**
   - All FAQs pre-rendered at build time
   - Fast page loads with no client-side data fetching

2. **Incremental Static Regeneration (ISR)**
   - Pages revalidate every hour
   - Updates without full rebuild
   - `revalidate: 3600` configured

3. **React Query Caching**
   - Intelligent caching strategy
   - Automatic background refetching
   - Reduced API calls

4. **Code Splitting**
   - Automatic Next.js code splitting
   - Client components only where needed
   - Optimized bundle sizes

## 🚀 Usage

### Visit FAQ Pages

```
/faq           # View all FAQs
/faq/[id]      # View specific FAQ
```

### Using in Components

```tsx
import FAQAccordion from "@/components/shared/FAQ";
import { useFAQs } from "@/lib/hooks/useFaq";

function MyComponent() {
  const { data, isLoading, error } = useFAQs();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading FAQs</div>;

  return <FAQAccordion faqs={data?.data || []} />;
}
```

## 🔧 Configuration

### Update Revalidation Time

Edit the `revalidate` constant in page files:

```tsx
export const revalidate = 3600; // 1 hour in seconds
```

### Customize Colors

Update Tailwind classes in components:

- Primary: `bg-[#2B5AA6]` or `text-[#2B5AA6]`
- Primary Dark: `bg-[#1e3a6b]`

### API Base URL

Set in environment variables:

```bash
NEXT_PUBLIC_API_URL=https://your-api-url.com/api/v1
```

## 🐛 Error Handling

1. **Network Errors** - Caught and displayed with user-friendly messages
2. **404 Errors** - Custom not-found page for invalid FAQ IDs
3. **Loading States** - Skeleton screens while data loads
4. **Error Boundaries** - React error boundaries for unexpected errors

## 📱 Pages Overview

### `/faq` - Main FAQ Page

- Lists all FAQs in accordion format
- Hero section with title and description
- Empty state if no FAQs available
- Error state for API failures
- CTA section to contact page

### `/faq/[id]` - Single FAQ Detail

- Full FAQ question and answer
- Category badge (if available)
- Last updated timestamp
- Back navigation to FAQ list
- Related CTAs

## ✅ Best Practices Implemented

1. ✅ TypeScript for type safety
2. ✅ SSG for performance
3. ✅ ISR for fresh content
4. ✅ Proper error handling
5. ✅ Loading states
6. ✅ Accessible markup
7. ✅ Responsive design
8. ✅ SEO optimization
9. ✅ Clean code structure
10. ✅ Reusable components

## 🔄 Future Enhancements

Potential improvements you could add:

1. **Search Functionality** - Filter FAQs by keyword
2. **Category Filtering** - Filter by FAQ categories
3. **Pagination** - For large FAQ lists
4. **Helpful Voting** - "Was this helpful?" buttons
5. **Related FAQs** - Show similar questions
6. **Analytics** - Track most viewed FAQs
7. **Admin Panel** - Manage FAQs from dashboard

## 📞 Support

For questions or issues with this implementation, refer to:

- Next.js Documentation: https://nextjs.org/docs
- React Query Documentation: https://tanstack.com/query
- Tailwind CSS Documentation: https://tailwindcss.com/docs

---

**Built with ❤️ for IWMS Advisors**
