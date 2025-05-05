# Healthcare Appointment System Test Automation

This project contains automated end-to-end tests for the Katalon Demo CURA Healthcare appointment system using Nightwatch.js and Node.js.

## Requirments

Node Version: 22.0.0 or higher
NPM Version: 10.5.1 or higher

## Setup

1. Clone the repository
2. Install dependencies
   ```bash
   npm install
   ```

## Configuration

The Nightwatch configuration file (`nightwatch.conf.js`) contains the following key settings:

- **src_folders** pointing to `tests/`
- **page_objects_path** pointing to `pages/`
- **custom_commands_path** pointing to `commands/`
- **test_workers** enabled for parallel execution
- **test_settings** for Chrome and Firefox environments

## Running Tests

### 1. Run all tests

```bash
npm test
# or
npx nightwatch
```

### 2. Run a specific test file

```bash
npx nightwatch --test tests/appointmentSeoul.test.js
```

Or for the other scenarios:

```bash
npx nightwatch --test tests/appointmentHongkong.test.js
npx nightwatch --test tests/appointmentTokyo.test.js
```

### 4. Run tests in a specific browser

```bash
# Firefox only (the default)
npm run test

# Chrome only
npm run test:chrome
```

### 5. Run tests in parallel (Chrome + Firefox)

```bash
npm run test:parallel
# or
npx nightwatch --env chrome,firefox
# Windows Powershell:
npx nightwatch --env "chrome,firefox"
```

## Project Structure

- `/commands` - Custom Nightwatch commands
- `/pages` - Page Object Model definitions
- `/tests` - Test suites
