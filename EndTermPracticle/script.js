document.addEventListener('DOMContentLoaded', () => {
    const cIn = document.getElementById('celsiusInput'), fIn = document.getElementById('fahrenheitInput');

    const update = (val, isC) => {
        if (val === '') {
            cIn.value = fIn.value = '';
            return;
        }
        const temp = parseFloat(val);
        if (isNaN(temp)) return;

        if (isC) {
            const f = (temp * 9 / 5) + 32;
            fIn.value = Math.round(f * 100) / 100;
        } else {
            const c = (temp - 32) * 5 / 9;
            cIn.value = Math.round(c * 100) / 100;
        }
    };

    cIn.addEventListener('input', (e) => update(e.target.value, true));
    fIn.addEventListener('input', (e) => update(e.target.value, false));

    // Initialize with Room Temp (20°C)
    update(20, true);
    cIn.value = 20;
});
