# Sheet Component Library

A modern, accessible sheet component built with React, Radix UI, and Tailwind CSS. This component provides a sliding panel that can appear from any side of the screen.

## Features

- 🎯 **Accessible**: Built on top of Radix UI primitives
- 🎨 **Customizable**: Fully customizable with Tailwind CSS
- 📱 **Responsive**: Works great on all screen sizes
- ⚡ **Performant**: Lightweight and fast
- 🎭 **Flexible**: Supports multiple sides (top, bottom, left, right)
- 🎪 **Animated**: Smooth animations and transitions

## Installation

```bash
npm install sheet-component
```

## Usage

```jsx
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "sheet-component";

function MyComponent() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>Open Sheet</button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">{/* Your content here */}</div>
        <SheetFooter>
          <SheetClose asChild>
            <button>Save changes</button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
```

## Components

### Sheet

The root component that wraps the entire sheet functionality.

### SheetTrigger

The component that triggers the sheet to open. Use `asChild` prop to render as a different element.

### SheetContent

The main content container of the sheet. Accepts a `side` prop to determine which side the sheet slides in from.

**Props:**

- `side`: `'top' | 'bottom' | 'left' | 'right'` - The side from which the sheet slides in
- `className`: Additional CSS classes

### SheetHeader

Container for the sheet's header content.

### SheetTitle

The title of the sheet.

### SheetDescription

The description text for the sheet.

### SheetFooter

Container for the sheet's footer content.

### SheetClose

A component that closes the sheet when clicked.

## Examples

### Basic Sheet

```jsx
<Sheet>
  <SheetTrigger asChild>
    <button>Open Sheet</button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Basic Sheet</SheetTitle>
      <SheetDescription>This is a basic sheet example.</SheetDescription>
    </SheetHeader>
    <div className="py-4">
      <p>Your content goes here.</p>
    </div>
  </SheetContent>
</Sheet>
```

### Sheet from Different Sides

```jsx
// Top sheet
<SheetContent side="top">
  {/* Content */}
</SheetContent>

// Bottom sheet
<SheetContent side="bottom">
  {/* Content */}
</SheetContent>

// Left sheet
<SheetContent side="left">
  {/* Content */}
</SheetContent>

// Right sheet
<SheetContent side="right">
  {/* Content */}
</SheetContent>
```

### Form in Sheet

```jsx
<Sheet>
  <SheetTrigger asChild>
    <button>Create New Item</button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Create New Item</SheetTitle>
      <SheetDescription>
        Fill out the form below to create a new item.
      </SheetDescription>
    </SheetHeader>
    <form className="grid gap-4 py-4">
      <div className="space-y-2">
        <label htmlFor="title">Title</label>
        <input id="title" type="text" />
      </div>
      <div className="space-y-2">
        <label htmlFor="description">Description</label>
        <textarea id="description" rows={4} />
      </div>
    </form>
    <SheetFooter>
      <SheetClose asChild>
        <button variant="outline">Cancel</button>
      </SheetClose>
      <SheetClose asChild>
        <button>Create Item</button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

## Styling

The component uses Tailwind CSS for styling. You can customize the appearance by:

1. **Modifying CSS variables**: The component uses CSS custom properties for colors and spacing
2. **Adding custom classes**: Use the `className` prop to add custom styles
3. **Overriding Tailwind classes**: Modify the component's Tailwind classes directly

### CSS Variables

The component uses the following CSS variables for theming:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
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

## Development

### Running Storybook

```bash
npm run storybook
```

This will start Storybook on `http://localhost:6006` where you can view and interact with all the component examples.

### Building the Library

```bash
npm run build
```

### Running Tests

```bash
npm test
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT

## Dependencies

- React 19+
- Radix UI Dialog
- Tailwind CSS
- Lucide React (for icons)
- Class Variance Authority
- clsx
- tailwind-merge
