# VS Code AI Multi-Agent Team

> A VS Code-style IDE built with React, featuring 3-AI collaborative agents, a custom lightweight router, and real-time route performance visualization.

[![CI](https://github.com/b1highl0516/project_88fs_IDE/actions/workflows/ci.yml/badge.svg)](https://github.com/b1highl0516/project_88fs_IDE/actions/workflows/ci.yml)
[![Deploy](https://github.com/b1highl0516/project_88fs_IDE/actions/workflows/deploy.yml/badge.svg)](https://github.com/b1highl0516/project_88fs_IDE/actions/workflows/deploy.yml)
[![Tests](https://github.com/b1highl0516/project_88fs_IDE/actions/workflows/test.yml/badge.svg)](https://github.com/b1highl0516/project_88fs_IDE/actions/workflows/test.yml)

## ✨ Features

### 📁 VS Code File Explorer
- Tree view with nested folders
- Folder expand/collapse with indent guides
- 15+ file type icons (TS, JS, JSON, CSS, MD, Docker, etc.)
- Multi-select: Ctrl+Click, Shift+Click
- Right-click context menu: New, Rename, Delete, Duplicate

### 🤖 3-AI Collaborative Agents
- **Architect** (🔵) — System design & architecture
- **Coder** (🟡) — Implementation & algorithms  
- **Reviewer** (🟣) — Code review & quality assurance
- 3 Collaboration modes: **All** | **Round-Robin** | **Pick**
- Supports: OpenAI, Anthropic, Google Gemini, DeepSeek, Custom/Local
- Streaming responses, markdown rendering, code blocks

### 🔀 Custom Lightweight Router
- Hash-based routing (works in static hosting)
- Type-safe route definitions
- `useNavigate`, `useLocation`, `useParams`, `useQuery` hooks
- `<Link>` component with active state
- Dynamic params: `/editor/:fileId`
- Route guards, loaders, meta

### ⚡ Route Performance Analyzer
- 8-dimension analysis: Speed, Throughput, Scalability, Memory, Complexity, Isolation, Coverage, Middleware
- **Light Aura Visualization**: organic directional glow that extends based on metric strength
- Real-time Canvas 2D animation with particles
- S/A/B/C/D grading system

## 🚀 Quick Start

```bash
# Install
npm install

# Dev
npm run dev

# Build
npm run build

# Preview
npm run preview

# Test
npm run test
```

## 📁 Project Structure

```
src/
├── router/          # Custom lightweight router
│   ├── Router.tsx   # Core: Provider, Link, hooks
│   ├── types.ts     # Route type definitions
│   └── utils.ts     # Path matching utilities
├── routes/          # Route configuration
├── views/           # Page components
│   ├── WelcomeView.tsx
│   ├── EditorView.tsx
│   ├── AIWorkspaceView.tsx
│   ├── SettingsView.tsx
│   ├── RoutingDemoView.tsx
│   └── RouteAnalysisView.tsx
├── components/      # Reusable components
│   ├── FileExplorer.tsx
│   ├── AIChatPanel.tsx
│   ├── AISettingsModal.tsx
│   └── ...
├── services/        # Business logic
│   ├── aiService.ts
│   └── routeAnalyzer.ts
└── App.tsx          # Main layout
```

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Language | TypeScript 5.9 |
| Routing | Custom (Wouter-inspired) |
| AI | OpenAI / Anthropic / Google / DeepSeek APIs |
| Visualization | Canvas 2D |
| Testing | Vitest |
| CI/CD | GitHub Actions → GitHub Pages |

## 📊 CI/CD Pipeline

### Workflows

1. **CI** (`ci.yml`) - Lint, type-check, and build on every push
2. **Tests** (`test.yml`) - Unit tests on every push and PR
3. **Deploy** (`deploy.yml`) - Auto-deploy to GitHub Pages on main branch

## 📜 License

MIT
