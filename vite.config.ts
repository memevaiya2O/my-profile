import { defineConfig } from 'vite';
import obfuscator from 'vite-plugin-obfuscator';

export default defineConfig({
  plugins: [
    obfuscator({
      options: {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 1,
        debugProtection: true,
        debugProtectionInterval: 1000,
        disableConsoleOutput: true,
        identifierNamesGenerator: 'hexadecimal',
        log: false,
        numbersToExpressions: true,
        renameGlobals: true,
        selfDefending: true,
        splitStrings: true,
        splitStringsChunkLength: 2,
        stringArray: true,
        stringArrayEncoding: ['rc4', 'base64'],
        stringArrayThreshold: 1,
        transformObjectKeys: true,
        unicodeEscapeSequence: true
      },
    }),
  ],
  build: {
    assetsInlineLimit: 100000000,
  }
});
