import { defineConfig } from 'vite';
import obfuscator from 'vite-plugin-obfuscator';

export default defineConfig({
  plugins: [
    obfuscator({
      options: {
        compact: true,               // কোনো স্পেস বা কমেন্ট থাকবে না
        controlFlowFlattening: true, // লজিককে গোলকধাঁধা বানিয়ে ফেলবে
        controlFlowFlatteningThreshold: 1,
        deadCodeInjection: true,     // ১ লাইনের বদলে ২০০ লাইন ভুয়া কোড ঢোকাবে
        deadCodeInjectionThreshold: 1,
        debugProtection: true,       // ইন্সপেক্ট করলে ব্রাউজার পজ হয়ে যাবে
        debugProtectionInterval: 500,
        disableConsoleOutput: true,  // সব লগ হাইড করবে
        identifierNamesGenerator: 'hexadecimal', 
        numbersToExpressions: true,  // সংখ্যাকে কঠিন ইকুয়েশনে বদলে দিবে
        renameGlobals: true,
        selfDefending: true,          // কেউ ফরম্যাট বা এডিট করলে ফাইল ক্রাশ করবে
        splitStrings: true,           // প্রতিটি টেক্সটকে হাজার টুকরো করবে
        splitStringsChunkLength: 3,
        stringArray: true,
        stringArrayEncoding: ['rc4'], // মিলিটারি গ্রেড এনক্রিপশন
        stringArrayThreshold: 1,
        transformObjectKeys: true,
        unicodeEscapeSequence: true   // সব অক্ষরকে হেক্স কোডে রূপান্তর করবে
      },
    }),
  ],
  build: {
    assetsInlineLimit: 100000000, // সব কোড একটি ফাইলের পেটে ঢুকিয়ে ফেলবে
  }
});
