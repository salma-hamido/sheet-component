import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from './components/Sheet.jsx';
import { Button } from './components/Button.jsx';
import './App.css';

function App() {

  const DemoPage = () => (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Sheet Component Library</h1>
          <p className="text-lg text-muted-foreground">
            A modern, accessible sheet component built with React, Radix UI, and Tailwind CSS
          </p>
        </header>

        <div className="grid gap-8">
          {/* Basic Example */}
          <section className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Basic Sheet</h2>
            <p className="text-muted-foreground mb-4">
              A simple sheet that slides in from the left side.
            </p>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open Basic Sheet</Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when you're done.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="name" className="text-right">
                      Name
                    </label>
                    <input
                      id="name"
                      defaultValue="Pedro Duarte"
                      className="col-span-3 border border-input rounded-md px-3 py-2"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="username" className="text-right">
                      Username
                    </label>
                    <input
                      id="username"
                      defaultValue="@peduarte"
                      className="col-span-3 border border-input rounded-md px-3 py-2"
                    />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit">Save changes</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </section>

          {/* Different Sides */}
          <section className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Different Sides</h2>
            <p className="text-muted-foreground mb-4">
              Sheets can slide in from any side of the screen.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Top</Button>
                </SheetTrigger>
                <SheetContent side="top">
                  <SheetHeader>
                    <SheetTitle>Top Sheet</SheetTitle>
                    <SheetDescription>
                      This sheet slides in from the top.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <p>Content for top sheet goes here.</p>
                  </div>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Bottom</Button>
                </SheetTrigger>
                <SheetContent side="bottom">
                  <SheetHeader>
                    <SheetTitle>Bottom Sheet</SheetTitle>
                    <SheetDescription>
                      This sheet slides in from the bottom.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <p>Content for bottom sheet goes here.</p>
                  </div>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Left</Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Left Sheet</SheetTitle>
                    <SheetDescription>
                      This sheet slides in from the left.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <p>Content for left sheet goes here.</p>
                  </div>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Right</Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Right Sheet</SheetTitle>
                    <SheetDescription>
                      This sheet slides in from the right.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <p>Content for right sheet goes here.</p>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </section>

          {/* Form Example */}
          <section className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Form in Sheet</h2>
            <p className="text-muted-foreground mb-4">
              Perfect for forms and complex interactions.
            </p>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Create New Item</Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Create New Item</SheetTitle>
                  <SheetDescription>
                    Fill out the form below to create a new item.
                  </SheetDescription>
                </SheetHeader>
                <form className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-medium">
                      Title
                    </label>
                    <input
                      id="title"
                      type="text"
                      className="w-full border border-input rounded-md px-3 py-2"
                      placeholder="Enter title..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-medium">
                      Description
                    </label>
                    <textarea
                      id="description"
                      rows={4}
                      className="w-full border border-input rounded-md px-3 py-2"
                      placeholder="Enter description..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium">
                      Category
                    </label>
                    <select id="category" className="w-full border border-input rounded-md px-3 py-2">
                      <option>Select category...</option>
                      <option>Work</option>
                      <option>Personal</option>
                      <option>Other</option>
                    </select>
                  </div>
                </form>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button>Create Item</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </section>

          {/* Complex Example */}
          <section className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Complex Settings</h2>
            <p className="text-muted-foreground mb-4">
              Advanced example with multiple form controls.
            </p>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Advanced Settings</Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[400px] sm:w-[540px]">
                <SheetHeader>
                  <SheetTitle>Advanced Settings</SheetTitle>
                  <SheetDescription>
                    Configure advanced settings for your application. These settings will be saved automatically.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Theme</label>
                    <select className="w-full border border-input rounded-md px-3 py-2">
                      <option>Light</option>
                      <option>Dark</option>
                      <option>System</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Language</label>
                    <select className="w-full border border-input rounded-md px-3 py-2">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Notifications</label>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Email notifications</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Push notifications</span>
                      </label>
                    </div>
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button>Save Settings</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </section>
        </div>

        <footer className="text-center mt-12 text-muted-foreground">
          <p>Built with React, Radix UI, and Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );

  return (
    <DemoPage />
  );
}

export default App;
