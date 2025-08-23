## Custom shadcn theme

### [tweakcn.com](https://tweakcn.com/)

Aha 🔑 that’s the most important question — **not just what colors you have, but where to actually apply them** so the UI feels clean, consistent, and _designed_.

Think of it like **roles in a movie** — each color has a job. If you use them in the wrong role, the design looks messy.

---

## 🎨 Where Each Theme Color Should Go (Shadcn + Tailwind)

### 1. **Primary**

👉 Your **main action / identity color**.

- Buttons for the **main CTA**: “Sign Up”, “Subscribe”, “Buy Now”
- Links or icons that represent _the heart of your app_
- Highlighted areas like hero section CTA

```jsx
<Button className="bg-primary text-primary-foreground">Subscribe</Button>
```

⚠️ Rule: **One primary action per screen**. Don’t spam it everywhere.

---

### 2. **Secondary**

👉 For **less important actions** or alternative paths.

- “Cancel” buttons
- Secondary links (“Learn More”, “View Details”)
- Background for small supporting UI elements

```jsx
<Button variant="secondary">Learn More</Button>
```

Think of it as: _If primary is “Do it now”, secondary is “Maybe later”_.

---

### 3. **Accent**

👉 For **interactive highlights and hover states**.

- Hover backgrounds (`hover:bg-accent`)
- Small highlights (badges, notifications, icons)
- Accents in cards or menus

```jsx
<div className="hover:bg-accent">Hover me</div>
```

Rule: Accent = “spice”. It should be felt, not screamed.

---

### 4. **Muted**

👉 For **low-emphasis backgrounds or text**.

- Side panels, tooltips, disabled states
- Secondary text (`text-muted-foreground`)
- Background for “less important” cards

```jsx
<p className="text-muted-foreground">This is less important info.</p>
```

Rule: Use muted to **de-emphasize**, so primary things pop more.

---

### 5. **Background / Foreground**

👉 Foundation colors.

- `background` → page or section background
- `foreground` → default text color

```jsx
<div className="bg-background text-foreground">Normal readable content</div>
```

---

### 6. **Border / Ring**

👉 For structure & accessibility.

- `border` → separating cards/sections
- `ring` → focus states on inputs

```jsx
<input className="border focus:ring-ring" />
```

---

## 🧠 Quick Formula for Deciding

Whenever you place a color, ask:

- **Is this the main action?** → `primary`
- **Is this a supporting action?** → `secondary`
- **Is this just an interaction cue (hover, highlight)?** → `accent`
- **Should this fade into background?** → `muted`
- **Is this structural (lines, focus)?** → `border` / `ring`
- **Is this base canvas or text?** → `background` / `foreground`

---

## ⚡ Example: OnlyChads Landing Page

- **Hero “Join Now” button** → `primary`
- **“Learn More” button** → `secondary`
- **Hover on pricing cards** → `accent`
- **Testimonial box background** → `muted`
- **Page background** → `background`
- **Default text** → `foreground`
- **Card outlines** → `border`
- **Form input focus** → `ring`

---

👉 So, the secret is: **don’t think “which color looks cool” — think “what role does this element play in the UI hierarchy”**.

Do you want me to **mock a real landing page wireframe for onlychads.fans** with shadcn colors applied so you can see how it fits together?
