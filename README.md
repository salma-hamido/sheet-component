# Sheet Component

A modern, accessible sheet component built with React, Radix UI, and Tailwind CSS. This component provides a flexible and customizable sheet/drawer that can slide in from any side of the screen.

## Features

- 🎯 **Accessible** - Built on top of Radix UI primitives
- 🎨 **Customizable** - Fully customizable with Tailwind CSS
- 📱 **Responsive** - Works great on all screen sizes
- ⚡ **Lightweight** - Minimal bundle size
- 🎭 **Flexible** - Slide in from any side (left, right, top, bottom)
- 🎪 **Animated** - Smooth animations and transitions

## Installation

```bash
npm install sheet-component
```

## Dependencies

This package requires the following peer dependencies:

```bash
npm install @radix-ui/react-dialog class-variance-authority clsx lucide-react tailwind-merge
```

## Usage

### Basic Example

```jsx
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "sheet-component";

function App() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>Open Sheet</button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p>Your content goes here...</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
```

### Different Sides

```jsx
// Left side (default)
<SheetContent side="left">
  <p>Content slides in from left</p>
</SheetContent>

// Right side
<SheetContent side="right">
  <p>Content slides in from right</p>
</SheetContent>

// Top side
<SheetContent side="top">
  <p>Content slides in from top</p>
</SheetContent>

// Bottom side
<SheetContent side="bottom">
  <p>Content slides in from bottom</p>
</SheetContent>
```

### Controlled Sheet

```jsx
import { useState } from "react";

function ControlledSheet() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button>Open Controlled Sheet</button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Controlled Sheet</SheetTitle>
          <SheetDescription>
            This sheet is controlled by React state.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p>Content here...</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
```

## Components

### Sheet

The root component that wraps the entire sheet functionality.

### SheetTrigger

The trigger element that opens the sheet. Use `asChild` prop to render as a child element.

### SheetContent

The main content container. Accepts a `side` prop to control which side the sheet slides in from.

### SheetHeader

Container for the sheet header content.

### SheetTitle

The title of the sheet.

### SheetDescription

The description text for the sheet.

### SheetFooter

Container for the sheet footer content.

### SheetClose

A button that closes the sheet.

## Props

### SheetContent Props

| Prop        | Type                                     | Default  | Description                         |
| ----------- | ---------------------------------------- | -------- | ----------------------------------- |
| `side`      | `'left' \| 'right' \| 'top' \| 'bottom'` | `'left'` | Which side the sheet slides in from |
| `className` | `string`                                 | -        | Additional CSS classes              |

### Sheet Props

| Prop           | Type                      | Default | Description                                    |
| -------------- | ------------------------- | ------- | ---------------------------------------------- |
| `open`         | `boolean`                 | -       | Controls the open state (for controlled usage) |
| `onOpenChange` | `(open: boolean) => void` | -       | Callback when open state changes               |

## Styling

The component uses Tailwind CSS for styling. Make sure you have Tailwind CSS configured in your project with the following CSS variables:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
  --muted: 210 40% 96%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96%;
  --accent-foreground: 222.2 84% 4.9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
  --radius: 0.5rem;
}
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
