# kokonut UI Clone

A modern React/Next.js clone of kokonutui.com featuring the CardFlip component and other interactive widgets.

## 🚀 Features

- **CardFlip Component**: Interactive 3D flip card with hover effects
- **Modern UI**: Built with Tailwind CSS v3 and React 18
- **Dark Theme**: Beautiful dark mode by default
- **Responsive Design**: Mobile-first approach
- **Interactive Widgets**: Search Commands, AI Chat, Fitness Tracker, and more

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Build Tool**: Vite (via Next.js)

## 📦 Installation

1. **Install Node.js** (version 18 or higher)
   ```bash
   # Download from https://nodejs.org/
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3001](http://localhost:3001)

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Components

### CardFlip
The main interactive component featuring:
- 3D flip animation on hover
- Animated orange circles
- Front and back content
- Smooth transitions

### Other Widgets
- **Search Commands**: Interactive command list with icons
- **AI Chat**: Chat interface with "AI is free" banner
- **Searching the web**: Progress indicator with animated steps
- **UI Enhancement**: Status indicators with colored dots
- **Fitness Tracker**: SVG progress rings for health metrics

## 🌙 Theme

- **Dark Mode**: Default theme with zinc color palette
- **Light Mode**: Available via theme toggle
- **Custom Colors**: Extended Tailwind palette with zinc variants

## 📱 Responsive Design

- Mobile-first approach
- Responsive grid layouts
- Mobile menu with hamburger button
- Optimized for all screen sizes

## 🔧 Customization

### Adding New Components
1. Create component in `src/components/`
2. Import and use in `src/app/page.tsx`
3. Add any new Tailwind classes to `tailwind.config.js`

### Modifying Colors
Update the color scheme in `tailwind.config.js` under the `extend.colors` section.

### Adding Animations
New animations can be added to `tailwind.config.js` under `extend.animation` and `extend.keyframes`.

## 📄 License

MIT License - feel free to use this project for learning and development.

## 🙏 Credits

- **Original Design**: [kokonutui.com](https://kokonutui.com)
- **Author**: @dorian_baffier
- **Component**: CardFlip v1.0.0

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 3000
   npx kill-port 3000
   ```

2. **TypeScript errors**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run dev
   ```

3. **Tailwind not working**
   ```bash
   # Rebuild CSS
   npm run build
   ```

## 📞 Support

If you encounter any issues or have questions, please check:
1. Node.js version (should be 18+)
2. All dependencies are installed
3. No conflicting processes on port 3000

---

**Happy coding! 🎉**
