function loadingBar(num) {
    let percent = num + '%';
    let bars = num / 10;
    let dots = 10 - bars;

    let progress = '[' + '%'.repeat(bars) + '.'.repeat(dots) + ']';

    if (num < 100) {
        console.log(`${percent} ${progress}`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    }
}

// Examples
loadingBar(30);   // Output:
                  // 30% [%%%.......]
                  // Still loading...

loadingBar(50);   // Output:
                  // 50% [%%%%%.....]
                  // Still loading...

loadingBar(100);  // Output:
                  // 100% Complete!
                  // [%%%%%%%%%%]
