# Notifications

Use this component to show notifications

```typescript
import { Notifications, notify } from '@cantinc/ui'
```

## Usage

Add `Notifications` into a place you want to put notification HTML elements.

```tsx
function App () {
  return (
    <>
      <div id='root'>...</div>
      <Notifications />
    </>
  )
}
```

*Note: put it inside an element without parents that have css property of `transform`.*

You can use `portal` to add notifications anywhere.

```tsx
function Global () {
  return (
    <portal parent={document.body}>
      <!-- Other stuff -->
      <Notifications />
    </portal>
  )
}
```
