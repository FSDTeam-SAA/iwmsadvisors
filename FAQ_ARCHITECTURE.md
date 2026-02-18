# FAQ Component Architecture

## 📊 Component Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     User Navigation                          │
│                                                              │
│         /faq                        /faq/[id]               │
│           │                              │                   │
│           ▼                              ▼                   │
└───────────┼──────────────────────────────┼──────────────────┘
            │                              │
            │                              │
┌───────────▼──────────────┐   ┌──────────▼─────────────────┐
│   FAQ List Page (SSG)    │   │   Single FAQ Page (SSG)     │
│                          │   │                             │
│  • Hero Section          │   │  • Navigation Breadcrumb    │
│  • FAQAccordion          │   │  • FAQ Card                 │
│  • CTA Section           │   │  • Metadata Display         │
│                          │   │  • CTA Section              │
│  Revalidate: 1 hour      │   │  Revalidate: 1 hour         │
└───────────┬──────────────┘   └──────────┬─────────────────┘
            │                              │
            │                              │
            ▼                              ▼
┌───────────────────────────────────────────────────────────┐
│                     Data Layer                            │
│                                                           │
│   ┌─────────────┐       ┌──────────────┐                │
│   │  useFAQs()  │       │ useSingleFAQ │                │
│   │   Hook      │       │    (id)      │                │
│   └──────┬──────┘       └──────┬───────┘                │
│          │                     │                         │
│          │    React Query      │                         │
│          └──────────┬──────────┘                         │
│                     │                                    │
│                     ▼                                    │
│          ┌──────────────────┐                           │
│          │   API Functions  │                           │
│          │                  │                           │
│          │  • getFAQs()     │                           │
│          │  • getSingleFAQ()│                           │
│          └────────┬─────────┘                           │
│                   │                                     │
└───────────────────┼─────────────────────────────────────┘
                    │
                    ▼
           ┌────────────────┐
           │  Backend API   │
           │                │
           │  GET /faq      │
           │  GET /faq/:id  │
           └────────────────┘
```

## 🗂️ File Dependencies

```
src/app/faq/page.tsx
├── imports → @/lib/api/api (getFAQs)
├── imports → @/lib/type/faq (FAQResponse, FAQ)
├── imports → @/components/shared/FAQ (FAQAccordion)
└── renders → FAQAccordion with data

src/app/faq/[id]/page.tsx
├── imports → @/lib/api/api (getFAQs, getSingleFAQ)
├── imports → @/lib/type/faq (FAQResponse, SingleFAQResponse)
├── uses → generateStaticParams() to pre-render pages
└── uses → generateMetadata() for dynamic SEO

src/components/shared/FAQ.tsx
├── imports → @/lib/type/faq (FAQ)
├── imports → lucide-react (ChevronDown)
├── receives → faqs: FAQ[]
└── renders → Accordion UI with animations

src/lib/hooks/useFaq.ts
├── imports → @tanstack/react-query
├── imports → @/lib/api/api
├── exports → useFAQs()
└── exports → useSingleFAQ(id)

src/lib/api/api.ts
├── imports → axios
├── exports → getFAQs()
└── exports → getSingleFAQ(id)

src/lib/type/faq.ts
├── exports → FAQ interface
├── exports → FAQResponse interface
└── exports → SingleFAQResponse interface
```

## 🔄 Data Flow

### FAQ List Flow

```
1. User visits /faq
   ↓
2. Next.js loads page.tsx (SSG)
   ↓
3. getFAQs() called at build time
   ↓
4. API returns FAQ data
   ↓
5. Data passed to FAQAccordion
   ↓
6. User sees rendered FAQs
   ↓
7. ISR revalidates every hour
```

### Single FAQ Flow

```
1. User clicks FAQ or visits /faq/[id]
   ↓
2. Next.js loads [id]/page.tsx (SSG)
   ↓
3. getSingleFAQ(id) called
   ↓
4. API returns single FAQ
   ↓
5. Metadata generated dynamically
   ↓
6. User sees FAQ detail page
   ↓
7. ISR revalidates every hour
```

### Client-Side Hook Flow (if needed)

```
1. Component calls useFAQs()
   ↓
2. React Query checks cache
   ↓
3. If not cached, calls getFAQs()
   ↓
4. Data cached for future use
   ↓
5. Component receives data
   ↓
6. Auto-refetch on stale data
```

## 🎨 Component Hierarchy

```
/faq page
└── <main>
    ├── <section> Hero
    │   └── <div> Container
    │       └── <div> Content
    │           ├── <h1> Title
    │           └── <p> Description
    │
    ├── <section> FAQ Content
    │   └── <div> Container
    │       └── <FAQAccordion>
    │           └── {faqs.map()}
    │               └── <div> Accordion Item
    │                   ├── <button> Question
    │                   │   ├── <span> Question Text
    │                   │   └── <ChevronDown> Icon
    │                   └── <div> Answer Panel
    │                       └── <p> Answer Text
    │
    └── <section> CTA
        └── <div> Container
            ├── <h2> Heading
            ├── <p> Description
            └── <a> Contact Button

/faq/[id] page
└── <main>
    ├── <section> Navigation
    │   └── <Link> Back to FAQs
    │
    ├── <article> FAQ Content
    │   └── <div> Container
    │       └── <div> Card
    │           ├── <div> Header
    │           │   ├── <HelpCircle> Icon
    │           │   ├── <h1> Question
    │           │   └── <span> Category Badge
    │           ├── <div> Content
    │           │   ├── <h2> "Answer"
    │           │   └── <p> Answer Text
    │           └── <div> Metadata
    │               └── <p> Last Updated
    │
    └── <section> CTA
        └── <div> Container
            ├── <h2> Heading
            ├── <p> Description
            └── <div> Buttons
                ├── <Link> View All FAQs
                └── <Link> Contact Us
```

## 🔐 Type Safety Flow

```
Backend API Response
        ↓
TypeScript Interface (faq.ts)
        ↓
API Function Return Type
        ↓
React Query Hook Type
        ↓
Component Props Type
        ↓
Rendered UI (Type-Safe)
```

## ⚡ Performance Strategy

```
Build Time (SSG)
├── Generate /faq page
├── Fetch all FAQs via API
├── Generate /faq/[id] for each FAQ
└── Create static HTML files

Runtime (ISR)
├── Serve static HTML (instant)
├── Background revalidation (hourly)
├── Update static files if changed
└── Next request gets fresh data

Client Side (React Query)
├── Cache API responses
├── Deduplicate requests
├── Background refetching
└── Optimistic updates
```

## 🛡️ Error Boundaries

```
Page Level
├── error.tsx (catches rendering errors)
├── loading.tsx (loading states)
└── not-found.tsx (404 errors)

Component Level
├── try/catch in API calls
├── null/undefined checks
└── conditional rendering

Network Level
├── axios error handling
├── timeout handling
└── retry logic (React Query)
```

---

**Visual Reference for Development**
