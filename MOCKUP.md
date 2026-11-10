# Get-It Quiz App - Mockup

## Technology Decision: **React + Vite + Tailwind CSS**

**Why this stack?**
- ✅ **Cross-platform**: Single web app works on Android, iOS, and desktop
- ✅ **Fast development**: Vite provides instant hot-reloading
- ✅ **Mobile-ready**: Responsive design out of the box
- ✅ **Easy to extend**: Can wrap with Capacitor for native mobile apps later
- ✅ **Modern tooling**: React 18, Tailwind CSS for rapid UI development

---

## Mockup Screens

### 1. Home Screen (Quiz Selection)

```
┌─────────────────────────────────────────────────────────────┐
│  Get-It                         Master your interview skills  │
│ ─────────────────────────────────────────────────────────── │
│                                                               │
│                    Available Quizzes                         │
│           Select a quiz to start practicing                  │
│                                                               │
│  [All] [Data Engineering]                                    │
│                                                               │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐ │
│  │ [Data Eng]      │  │ [Data Eng]      │  │ [Data Eng]  │ │
│  │ Spark Basics    │  │ Python for DE   │  │ SQL Fund.   │ │
│  │                 │  │                 │  │             │ │
│  │ Test your       │  │ Python fundam.  │  │ Basic SQL   │ │
│  │ knowledge of    │  │ for data eng.   │  │ knowledge   │ │
│  │ Apache Spark    │  │                 │  │             │ │
│  │                 │  │                 │  │             │ │
│  │ 5 questions     │  │ 2 questions     │  │ 2 questions │ │
│  └─────────────────┘  └─────────────────┘  └─────────────┘ │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

### 2. Quiz Screen (Question View)

```
┌─────────────────────────────────────────────────────────────┐
│  ← Back            Spark Basics               Question 1/5    │
│ ─────────────────────────────────────────────────────────── │
│                                                               │
│  [============>        ] 20%                                   │
│                                                               │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Which one of these 4 methods is an ACTION in Spark?     │ │
│  │                                                           │ │
│  │  [ ] count()                                              │ │
│  │  [ ] filter()                                             │ │
│  │  [ ] groupBy()                                            │ │
│  │  [ ] join()                                               │ │
│  │                                                           │ │
│  │                        [Next]                             │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                               │
│  Score: 0                                                        │
└─────────────────────────────────────────────────────────────┘
```

---

### 3. After Answering (With Feedback)

```
┌─────────────────────────────────────────────────────────────┐
│  ← Back            Spark Basics               Question 1/5    │
│ ─────────────────────────────────────────────────────────── │
│                                                               │
│  [==========>          ] 20%                                   │
│                                                               │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Which one of these 4 methods is an ACTION in Spark?     │ │
│  │                                                           │ │
│  │  [✓] count()          CORRECT ← (green background)       │ │
│  │  [ ] filter()                                         │ │
│  │  [ ] groupBy()                                        │ │
│  │  [ ] join()                                           │ │
│  │                                                           │ │
│  │  ℹ In Spark, transformations (filter, groupBy, join)   │ │
│  │    are lazy and build the execution plan. Actions       │ │
│  │    (count, collect, show) trigger actual computation    │ │
│  │    and return results.                                  │ │
│  │                                                           │ │
│  │                        [Next]                             │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                               │
│  Score: 1                                                        │
└─────────────────────────────────────────────────────────────┘
```

---

### 4. Wrong Answer (With Feedback)

```
┌─────────────────────────────────────────────────────────────┐
│  ← Back            Spark Basics               Question 2/5    │
│ ─────────────────────────────────────────────────────────── │
│                                                               │
│  [==============>      ] 40%                                   │
│                                                               │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ What is the result of applying map() followed by filter()?│ │
│  │                                                           │ │
│  │  [ ] A new RDD with both operations applied              │ │
│  │  [✗] An error because filter must come first (red)      │ │
│  │  [✓] Nothing until an action is called (green)           │ │
│  │  [ ] The operations are applied immediately              │ │
│  │                                                           │ │
│  │  ℹ Spark uses lazy evaluation. Transformations like     │ │
│  │    map and filter are only executed when an action       │ │
│  │    (like count or collect) is called.                    │ │
│  │                                                           │ │
│  │                        [Next]                             │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                               │
│  Score: 1                                                        │
└─────────────────────────────────────────────────────────────┘
```

---

### 5. Results Screen

```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│                          ✓ Quiz Completed!                    │
│                                                               │
│                        You scored:                            │
│                                                               │
│                          4/5                                   │
│                                                               │
│                      80% Correct                              │
│                                                               │
│                    [Try Again]                                │
│                                                               │
│                 [Back to Quizzes]                            │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## Color Scheme

- **Primary**: Indigo (#4f46e5) - Buttons, accents
- **Success**: Green (#10b981) - Correct answers
- **Error**: Red (#ef4444) - Wrong answers
- **Background**: Light gray (#f9fafb) - Page background
- **Cards**: White (#ffffff) - Quiz cards, question cards
- **Text**: Dark gray (#1f2937) - Primary text

---

## Responsive Behavior

### Mobile (≤ 768px)
- Single column layout
- Full-width quiz cards
- Large touch-friendly buttons
- Bottom navigation

### Tablet (769-1024px)
- 2-column grid for quiz cards
- Side-by-side layout for options

### Desktop (≥ 1025px)
- 3-column grid for quiz cards
- Expanded layout with more whitespace

---

## Key Features Implemented

1. **Quiz Categories**: Filter quizzes by category (Data Engineering, etc.)
2. **Progress Tracking**: Visual progress bar during quiz
3. **Immediate Feedback**: Color-coded correct/wrong answers
4. **Explanations**: Detailed explanations after each answer
5. **Score System**: Track correct answers throughout the quiz
6. **Responsive Design**: Works on all screen sizes
7. **Interactive UI**: Hover effects, smooth transitions

---

## How to Run

```bash
cd /workspaces/get-it
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

---

## Next Steps for Mobile Apps

To deploy as native mobile apps:

1. **Install Capacitor**
   ```bash
   npm install @capacitor/core @capacitor/cli
   npx cap init
   ```

2. **Add Platforms**
   ```bash
   npx cap add android
   npx cap add ios
   ```

3. **Build and Run**
   ```bash
   npm run build
   npx cap sync
   npx cap open android  # Opens in Android Studio
   npx cap open ios      # Opens in Xcode
   ```

This will give you native Android and iOS apps with the same codebase!
