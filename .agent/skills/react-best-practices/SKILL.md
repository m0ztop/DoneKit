---
name: react-best-practices
description: React performance and code quality guidelines. Apply when writing, reviewing, or refactoring React components, handling state, or optimizing renders.
---

# React Best Practices

Curated performance and quality guidelines for React frontends, adapted from Vercel Engineering.

## When to Apply

Reference these when:
- Writing new React components
- Reviewing code for performance issues
- Refactoring existing React code
- Optimizing bundle size or load times

## Priority Guidelines

| Priority | Category | Focus |
|----------|----------|-------|
| 1 | Component Structure | Clean, maintainable components |
| 2 | Rendering Performance | Avoid unnecessary re-renders |
| 3 | Bundle Optimization | Smaller initial load |
| 4 | JavaScript Patterns | Clean, efficient code |

---

## 1. Component Structure

### Use Explicit Conditional Rendering
Use ternary `? :` instead of `&&` to avoid rendering `0` or empty strings.

```tsx
// ❌ Bad - renders "0" when count is 0
{count && <Badge count={count} />}

// ✅ Good - renders nothing when count is 0
{count > 0 ? <Badge count={count} /> : null}
```

### Hoist Static JSX
Move JSX that doesn't depend on props/state outside the component.

```tsx
// ❌ Bad - recreated every render
function Page() {
  const footer = <Footer />
  return <div>{content}{footer}</div>
}

// ✅ Good - created once
const footer = <Footer />
function Page() {
  return <div>{content}{footer}</div>
}
```

### Use Lazy State Initialization
For expensive initial values, pass a function to useState.

```tsx
// ❌ Bad - parses JSON every render
const [data, setData] = useState(JSON.parse(localStorage.getItem('data') || '{}'))

// ✅ Good - parses only on mount
const [data, setData] = useState(() => JSON.parse(localStorage.getItem('data') || '{}'))
```

---

## 2. Rendering Performance

### Memoize Expensive Components
Use `React.memo` for components that receive the same props frequently.

```tsx
// ✅ Good - only re-renders when props change
const ExpensiveList = React.memo(function ExpensiveList({ items }) {
  return items.map(item => <ComplexItem key={item.id} {...item} />)
})
```

### Use Transitions for Non-Urgent Updates
Wrap expensive state updates in `startTransition` to keep UI responsive.

```tsx
import { startTransition } from 'react'

function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleChange = (e) => {
    setQuery(e.target.value) // Urgent - update input immediately
    startTransition(() => {
      setResults(search(e.target.value)) // Non-urgent - can wait
    })
  }
}
```

### Avoid Inline Object/Array Props
Create stable references to prevent child re-renders.

```tsx
// ❌ Bad - new object every render
<Child style={{ color: 'red' }} />

// ✅ Good - stable reference
const style = useMemo(() => ({ color: 'red' }), [])
<Child style={style} />
```

---

## 3. Bundle Optimization

### Avoid Barrel File Imports
Import directly from source files, not index files.

```tsx
// ❌ Bad - loads entire library
import { Check, X } from 'lucide-react'

// ✅ Good - loads only what you need
import Check from 'lucide-react/dist/esm/icons/check'
import X from 'lucide-react/dist/esm/icons/x'
```

### Lazy Load Heavy Components
Use dynamic imports for large components not needed immediately.

```tsx
import { lazy, Suspense } from 'react'

const HeavyEditor = lazy(() => import('./HeavyEditor'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyEditor />
    </Suspense>
  )
}
```

### Preload on User Intent
Start loading before the user clicks.

```tsx
function EditorButton({ onClick }) {
  const preload = () => import('./HeavyEditor')

  return (
    <button
      onMouseEnter={preload}
      onFocus={preload}
      onClick={onClick}
    >
      Open Editor
    </button>
  )
}
```

---

## 4. JavaScript Patterns

### Early Return from Functions
Exit early to reduce nesting and improve readability.

```tsx
// ❌ Bad - deeply nested
function process(user) {
  if (user) {
    if (user.isActive) {
      if (user.hasPermission) {
        return doWork(user)
      }
    }
  }
  return null
}

// ✅ Good - flat and clear
function process(user) {
  if (!user) return null
  if (!user.isActive) return null
  if (!user.hasPermission) return null
  return doWork(user)
}
```

### Use toSorted() for Immutability
Avoid mutating arrays when sorting in React state.

```tsx
// ❌ Bad - mutates original array
const sorted = items.sort((a, b) => a.name.localeCompare(b.name))

// ✅ Good - returns new array
const sorted = items.toSorted((a, b) => a.name.localeCompare(b.name))
```

### Cache Repeated Lookups
Store frequently accessed values in variables.

```tsx
// ❌ Bad - repeated property access
items.forEach(item => {
  console.log(item.user.profile.name)
  console.log(item.user.profile.email)
})

// ✅ Good - cached access
items.forEach(item => {
  const profile = item.user.profile
  console.log(profile.name)
  console.log(profile.email)
})
```

---

## Quick Checklist

Before shipping, verify:

- [ ] No `&&` rendering with numbers/strings that could be falsy
- [ ] Static JSX hoisted outside components
- [ ] Expensive initial state uses lazy initialization
- [ ] Heavy components are lazy loaded
- [ ] No barrel imports for large libraries
- [ ] Complex state updates use transitions when appropriate
