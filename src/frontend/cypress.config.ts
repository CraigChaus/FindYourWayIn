import { defineConfig } from 'cypress'

export default defineConfig({
    projectId: '5n41q5',
    defaultCommandTimeout: 5000,
    e2e: {
        baseUrl: 'http://localhost:3000',
        setupNodeEvents(on, config) {
            // e2e testing node events setup code
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            require('@cypress/code-coverage/task')(on, config)
            return config
        },
        specPattern: 'cypress/integration/**/*.spec.js',
        supportFile: 'cypress/support/index.js',
        video: false,
        screenshotOnRunFailure: false
    },
    component: {
        devServer: {
            framework: 'next',
            bundler: 'webpack',
        },
        video: false,
        screenshotOnRunFailure: false
    },
})