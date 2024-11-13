const framesInput = document.getElementById('frames');
const rendertimeInput = document.getElementById('rendertime');
const machinesInput = document.getElementById('machines');
const outputElement = document.getElementById('output')

function calculateRender() {
    let frames = framesInput.value;
    let rendertime = rendertimeInput.value;
    let machines = machinesInput.value;

    let totalTime = frames * rendertime / machines;
    let suffix = 'seconds';
    if (totalTime > 60) {
        totalTime = totalTime / 60;
        suffix = 'minutes';
        console.log(totalTime + ' ' + suffix);

        if (totalTime > 60) {
            totalTime = totalTime / 60;
            suffix = 'hours';
            console.log(totalTime + ' ' + suffix);
            
            if (totalTime > 72) {
                totalTime = totalTime / 24;
                suffix = 'days';
                console.log(totalTime + ' ' + suffix);

                if (totalTime > 7) {
                    totalTime = totalTime / 7;
                    suffix = 'weeks';
                    console.log(totalTime + ' ' + suffix);
                    
                    if (totalTime > 4) {
                        totalTime = totalTime / 4;
                        suffix = 'months';
                        console.log(totalTime + ' ' + suffix);
                    };
                };
            };
        };
    };

    totalTime = Math.round(totalTime * 10) / 10

    outputElement.innerText = totalTime + ' ' + suffix;
};

framesInput.addEventListener('change', calculateRender);
rendertimeInput.addEventListener('change', calculateRender);
machinesInput.addEventListener('change', calculateRender);