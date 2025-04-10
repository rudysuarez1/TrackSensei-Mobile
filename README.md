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
This project uses ESLint and Prettier for code quality, with Husky pre-commit hooks:

1. **Install Dev Tools** (already in package.json):

```bash
npm install --save-dev eslint prettier @eslint/js eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks husky lint-staged
```

2. **Set Up Git Hooks**:

```bash
npm run prepare  # Sets up Husky hooks
```

3. **Pre-commit Automation**:
   When you commit code, lint-staged will automatically:

- Run ESLint on all staged TypeScript files (.ts/.tsx)
- Run Prettier formatting on them

4. **Manual Commands**:

```bash
npm run lint    # Lint all files
npm run format  # Format all files
```

The configuration is already set up in package.json:

```json
"lint-staged": {
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"]
}
```

💧 Tech Stack

- React Native (Expo)
- TypeScript
- Axios
- Zustand (state management)
- Prettier + ESLint
- Husky + lint-staged
