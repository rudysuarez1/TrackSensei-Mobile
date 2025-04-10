📱 TrackSensei Mobile 📱
This is the mobile companion app for the TrackSensei system. It allows you to remotely control data logging on your Jetson Nano, monitor live telemetry data, and interact with your home server to access racing session data and ideal lap feedback.

🚀 Setup

1. Clone the repository

```bash
git clone https://github.com/rudysuarez1/TrackSensei-Mobile.git
cd TrackSensei-Mobile
```

2. Install Node.js and npm
   We recommend using Node Version Manager (nvm) to manage your Node.js installation:

```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Restart your terminal or load nvm manually
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"

# Install latest LTS version of Node.js
nvm install --lts
```

3. Install Dependencies

```bash
npm install
```

4. Run the App

```bash
npm start
```

Use the Expo Go app on your iPhone or Android device to scan the QR code and test the app.

✅ Pre-commit and Code Quality
This project uses Prettier and ESLint for formatting and linting, with pre-commit hooks.

Install dev tools:

```bash
npm install --save-dev eslint prettier husky lint-staged eslint-config-prettier eslint-plugin-react-hooks
```

Enable Git hooks with Husky (modern setup):

```bash
npx husky init
```

This will set up the `.husky/` directory and add a sample pre-commit hook.

Replace the contents of `.husky/pre-commit` with:

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

Add this to your `package.json`:

```json
"lint-staged": {
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"]
}
```

To manually lint and format code:

```bash
npm run lint
npm run format
```

💧 Tech Stack

- React Native (Expo)
- TypeScript
- Axios
- Zustand (state management)
- Prettier + ESLint
- Husky + lint-staged
