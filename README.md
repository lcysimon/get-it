# Get-It Quiz App

A cross-platform quiz application for interview preparation, built with React, Vite, and Tailwind CSS.

## Technology Stack

- **Framework**: React 18 (SPA - Single Page Application)
- **Bundler**: Vite (fast development)
- **Styling**: Tailwind CSS (utility-first CSS)
- **Mobile Ready**: Responsive design works on Android, iOS, and web
- **Future Mobile Apps**: Can be wrapped with Capacitor for native mobile apps

## Why This Stack?

1. **React + Vite**: Modern, fast, and easy to develop with hot-reloading
2. **Tailwind CSS**: Rapid UI development with utility classes
3. **Web-first**: Works on any device with a browser
4. **Mobile-friendly**: Responsive design adapts to all screen sizes
5. **Extensible**: Can be wrapped with Capacitor/Cordova for app store distribution

## Project Structure

```
get-it/
├── src/
│   ├── components/    # Reusable components
│   ├── data/          # Quiz data (JSON)
│   ├── App.jsx        # Main application
│   ├── main.jsx       # Entry point
│   └── index.css      # Tailwind imports
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Features

- Multiple quiz categories (Data Engineering, etc.)
- Interactive questions with multiple-choice answers
- Immediate feedback with explanations
- Progress tracking
- Score display
- Responsive design for all devices

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:5173 in your browser
```

## Building for Production

```bash
npm run build
npm run preview
```

## 🌐 Deploying to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

This method automatically deploys your app whenever you push to `main`.

1. **Push your code to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/get-it.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Settings → Pages
   - Under "Build and deployment", select:
     - **Source**: GitHub Actions
   - Click "Save"

3. **That's it!** 
   - The workflow will run automatically
   - Your app will be deployed to: `https://YOUR_USERNAME.github.io/get-it/`

### Option 2: Manual Deployment with `gh-pages`

1. Install `gh-pages` (already in devDependencies)

2. Run the deploy script:
   ```bash
   npm run deploy
   ```
   This will:
   - Build your app
   - Push the `dist` folder to the `gh-pages` branch
   - Your app will be at: `https://YOUR_USERNAME.github.io/get-it/`

3. **Important**: Update `vite.config.js`
   - Change the `repoName` variable to match your repository name
   - For example, if your repo is `myusername/my-app`, set: `const repoName = 'my-app'`

### Custom Domain (Optional)

If you want to use a custom domain:
1. Buy a domain (e.g., get-it.com)
2. Add a `CNAME` file in your repo with the domain
3. Configure DNS with a CNAME record pointing to `YOUR_USERNAME.github.io`

---

## Deploying to Mobile

To create native mobile apps:

1. Install Capacitor:
```bash
npm install @capacitor/core @capacitor/cli
npx cap init
```

2. Add platforms:
```bash
npx cap add android
npx cap add ios
```

3. Sync and build:
```bash
npm run build
npx cap sync
npx cap open android  # Opens in Android Studio
npx cap open ios      # Opens in Xcode
```

## Sample Quiz Questions

The app includes sample quizzes for:
- Spark Basics (5 questions)
- Python for Data Engineers
- SQL Fundamentals

All questions include detailed explanations to help users learn.

## Mockup Preview

### Home Screen
- Lists all available quizzes
- Filter by category
- Shows quiz metadata (title, description, question count)

### Quiz Screen
- Displays current question
- Multiple choice options
- Progress bar
- Immediate feedback on answers
- Explanations shown after answering
- Score tracking

### Results Screen
- Final score display
- Percentage correct
- Option to retry or return to home

## Adding New Quizzes

Edit `src/data/quizzes.js` to add new quiz categories and questions:

```javascript
{
  id: 4,
  title: "New Quiz",
  description: "Description here",
  category: "Category",
  questions: [
    {
      id: 1,
      question: "Question text?",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswer: "Option 2",
      explanation: "Explanation here..."
    }
  ]
}
```
