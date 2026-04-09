// ১. আপনার সব CSS এখানে দিন (স্ট্রিং হিসেবে)
const rawCSS = `
  /* আপনার সব CSS কোড এখানে পেস্ট করুন */
`;

// ২. আপনার সব HTML বডি এখানে দিন
const rawHTML = `
  <div id="root">
     </div>
`;

// ৩. অটো-ইঞ্জেকশন লজিক
const styleTag = document.createElement("style");
styleTag.innerHTML = rawCSS;
document.head.appendChild(styleTag);
document.body.innerHTML = rawHTML;

// ৪. আপনার সব জাভাস্ক্রিপ্ট লজিক (Audio, Typing, etc.)
const initPremiumCode = () => {
    // আপনার সব JavaScript ফাংশনগুলো এখানে পেস্ট করুন
};

// রান করুন
initPremiumCode();
