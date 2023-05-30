# Directory Map

```
├── App.tsx
├── LICENSE
├── Makefile            # *Core Repository Interactions*
├── README.md
├── app.json            # [ignore?] Expo Config [https://docs.expo.dev/versions/latest/config/app/]
├── assets
├── babel.config.js     # JS compiler/transpiler to make modern JS backwards compatible
├── components          # React Components
│   ├── atoms               # Smallest Atomic components (no state hooks, only rendering)
│   ├── molecules           # Could be made with atoms   (no state hooks, only rendering)
│   └── organisms           # Could be made with atoms/molecules (handles state hooks)
├── dependencies.sh     # Bash Dependencies before active Dockerfile
├── eas.json            # [ignore?] Expo Application Services [https://expo.dev/eas]
├── hooks               # React Query Hooks/Keys
├── package-lock.json
├── package.json
├── pages               # App Pages/Screens made with components
├── stores              # App State Management (Zustand)
├── tsconfig.json
├── utils               # Utility JS Functions
└── yarn.lock
```

# Setup

- [Setup GitHub SSH keys, generate a new one if needed](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys?platform=linux)

- [Install GitHub CLI (optional)](https://github.com/cli/cli/blob/trunk/docs/install_linux.md#debian-ubuntu-linux-apt)
  - `gh auth login`
  - `gh repo view --web`
  - `gh pr list`
  - `...`

# Development

- See "scripts" in [package.json](./package.json), e.g "npm start"
- Alterntively, use [make commands](./Makefile), e.g `make start-app`
- Because the app is built via expo, installing dependencies is done via `npx expo install <package-name>`

# DevOps

- [Setup Github Pages Deploy](https://docs.expo.dev/distribution/publishing-websites/#github-pages) --> `DONE`

- Makefile command to deploy (`make deploy-gh-pages`)

- [Setup Expo Go Mobile Deploy](https://docs.expo.dev/eas-update/getting-started/) --> `WIP, Not Needed Yet`
