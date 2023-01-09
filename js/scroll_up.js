window.addEventListener("load", function() {
    const target = document.querySelectorAll('.scr-target')
    const targetArray = Array.prototype.slice.call(target);
    const options = {
        root: null,
        rootMargin: '0px 0px',
        threshold: 0.2
    };
    
    const observer = new IntersectionObserver(callback, options)
    targetArray.forEach(function (tgt) {
        observer.observe(tgt)
    });
    
    function callback(entries) {
        entries.forEach(function(entry) {
            const target = entry.target;
            if (entry.isIntersecting && !target.classList.contains('is-active')) {
                console.log("active!");
                target.classList.add('is-active');
            }
        });
    };
});

window.addEventListener("load", function() {
    const target = document.querySelectorAll('.scr-delay-target')
    const targetArray = Array.prototype.slice.call(target);
    const options = {
        root: null,
        rootMargin: '0px 0px',
        threshold: 0.2
    };
    
    const observer = new IntersectionObserver(callback, options)
    targetArray.forEach(function (tgt) {
        observer.observe(tgt)
    });
    
    function callback(entries) {
        entries.forEach(function(entry, i) {
            const target = entry.target;
            if (entry.isIntersecting && !target.classList.contains('is-active')) {
                const delay = i * 100
                setTimeout(function(){
                    target.classList.add('is-active');
                },delay);
            }
        });
    };
});