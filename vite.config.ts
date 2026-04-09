import { defineConfig } from 'vite';
import obfuscator from 'rollup-plugin-javascript-obfuscator';

export default defineConfig({
  plugins: [
    {
      ...obfuscator({
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 1,
        debugProtection: true,
        debugProtectionInterval: 2000,
        disableConsoleOutput: true,
        identifierNamesGenerator: 'hexadecimal',
        numbersToExpressions: true,
        renameGlobals: true,
        selfDefending: true,
        splitStrings: true,
        splitStringsChunkLength: 2,
        stringArray: true,
        stringArrayEncoding: ['rc4'],
        stringArrayThreshold: 1,
        unicodeEscapeSequence: true
      }),
      apply: 'build' // এটি শুধুমাত্র প্রোডাকশন বিল্ডের সময় কাজ করবে
    }
  ],
  build: {
    assetsInlineLimit: 100000000,
  }
});
